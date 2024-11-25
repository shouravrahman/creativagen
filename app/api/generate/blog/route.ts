// import { GoogleGenerativeAI } from "@google/generative-ai";
// import { ResearchService } from "@/services/blog/research";
// import { PromptEngineering } from "@/services/blog/prompt";
// import { ContentHumanizer } from "@/services/blog/humanizer";
// import { PlagiarismChecker } from "@/services/blog/plagiarism-checker";
// import { SeoOptimizer } from "@/services/blog/seo-optimizer";
// import { BlogGenerationConfig } from "@/types";

// export async function POST(req: Request) {
// 	try {
// 		const config: BlogGenerationConfig = await req.json();

// 		// Initialize services
// 		const genAI = new GoogleGenerativeAI(
// 			process.env.GOOGLE_AI_API_KEY as string
// 		);
// 		const model = genAI.getGenerativeModel({ model: "gemini-pro" });
// 		const researchService = new ResearchService();
// 		const plagiarismChecker = new PlagiarismChecker();
// 		const seoOptimizer = new SeoOptimizer();

// 		// 1. Perform research based on topic and depth
// 		const research = await researchService.performResearch(
// 			config.topic,
// 			config.researchDepth
// 		);

// 		// 2. Generate optimized prompt
// 		const prompt = PromptEngineering.generatePrompt(config, research);

// 		// 3. Generate initial content
// 		const result = await model.generateContent(prompt.toString());
// 		let content = result.response.text();

// 		// 4. Check for plagiarism if enabled
// 		if (config.plagiarismCheck) {
// 			const plagiarismResult = await plagiarismChecker.checkPlagiarism(
// 				content
// 			);
// 			if (plagiarismResult.isPlagiarized) {
// 				// Regenerate content with modified prompt
// 				const newResult = await model.generateContent(
// 					prompt.toString() +
// 						"\nEnsure content is completely original."
// 				);
// 				content = newResult.response.text();
// 			}
// 		}

// 		// 5. Humanize content
// 		content = ContentHumanizer.humanize(content, config.humanizeLevel);

// 		// 6. Optimize for SEO
// 		content = seoOptimizer.optimize(content, config.keywords);

// 		return new Response(
// 			JSON.stringify({
// 				content,
// 				metadata: {
// 					wordCount: content.split(" ").length,
// 					readingTime: Math.ceil(content.split(" ").length / 200),
// 					keywordDensity: calculateKeywordDensity(
// 						content,
// 						config.keywords
// 					),
// 				},
// 			}),
// 			{
// 				status: 200,
// 				headers: { "Content-Type": "application/json" },
// 			}
// 		);
// 	} catch (error) {
// 		console.error("Blog generation error:", error);
// 		return new Response(
// 			JSON.stringify({
// 				error: "Failed to generate blog content",
// 			}),
// 			{
// 				status: 500,
// 				headers: { "Content-Type": "application/json" },
// 			}
// 		);
// 	}
// }

// function calculateKeywordDensity(
// 	content: string,
// 	keywords: string[]
// ): Record<string, number> {
// 	const wordCount = content.split(" ").length;
// 	const density = {};

// 	for (const keyword of keywords) {
// 		const regex = new RegExp(keyword, "gi");
// 		const matches = content.match(regex);
// 		density[keyword] = matches ? (matches.length / wordCount) * 100 : 0;
// 	}

// 	return density;
// }
