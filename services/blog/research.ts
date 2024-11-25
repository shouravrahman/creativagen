import { ResearchResult } from "@/types";
import { GoogleCustomSearch } from "@google-cloud/custom-search";
import { ChromaClient } from "chromadb";
import { WebBaseLoader } from "langchain/document_loaders/web";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";

export class ResearchService {
	private searchClient: GoogleCustomSearch;
	private vectorStore: ChromaClient;

	constructor() {
		this.searchClient = new GoogleCustomSearch({
			apiKey: process.env.GOOGLE_SEARCH_API_KEY,
			cx: process.env.GOOGLE_SEARCH_CX,
		});
		this.vectorStore = new ChromaClient();
	}

	async performResearch(
		topic: string,
		depth: string
	): Promise<ResearchResult[]> {
		const searchResults = await this.searchClient.search({
			q: topic,
			num: this.getSearchDepthCount(depth),
		});

		const processedResults: ResearchResult[] = [];

		for (const result of searchResults) {
			const loader = new WebBaseLoader(result.link);
			const docs = await loader.load();

			const splitter = new RecursiveCharacterTextSplitter({
				chunkSize: 1000,
				chunkOverlap: 200,
			});

			const splits = await splitter.splitDocuments(docs);

			// Store in vector database for similarity search
			await this.vectorStore.addDocuments(splits);

			processedResults.push({
				url: result.link,
				title: result.title,
				snippet: result.snippet,
				relevanceScore: this.calculateRelevance(result.snippet, topic),
			});
		}

		return processedResults;
	}

	private getSearchDepthCount(depth: string): number {
		const depthMap = {
			basic: 3,
			moderate: 5,
			deep: 8,
			academic: 12,
		};
		return depthMap[depth] || 5;
	}

	private calculateRelevance(snippet: string, topic: string): number {
		// Implement relevance scoring logic
		return 0.8; // Placeholder
	}
}
