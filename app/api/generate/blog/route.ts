import { GoogleGenerativeAI } from "@google/generative-ai";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { PromptTemplate } from "@langchain/core/prompts";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { RunnableSequence } from "@langchain/core/runnables";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY!);

// Types for request body
interface BlogRequestBody {
	topic: string;
	keywords: string[];
	tone: string;
	wordCount: number;
	style: string;
	targetAudience?: string;
	includeOutline?: boolean;
	layout?: string;
	headingStyle?: string;
}

// Blog outline prompt template
const outlinePromptTemplate = PromptTemplate.fromTemplate(`
Create a detailed outline for a blog post about {topic}.
Target word count: {wordCount} words
Writing tone: {tone}
Target keywords: {keywords}
Target audience: {targetAudience}

The outline should include:
- An engaging introduction
- 3-5 main sections with subpoints
- A compelling conclusion
- Potential subheadings that incorporate target keywords naturally

Format the outline in a clear, hierarchical structure.
`);

// Main blog content prompt template
const blogPromptTemplate = PromptTemplate.fromTemplate(`
Write a comprehensive blog post based on the following parameters:

Topic: {topic}
Style: {style}
Tone: {tone}
Target Keywords: {keywords}
Word Count: {wordCount} words
Target Audience: {targetAudience}
Layout Style: {layout}
Heading Style: {headingStyle}

Guidelines:
1. Write in a {tone} tone while maintaining professionalism and clarity
2. Naturally incorporate these keywords: {keywords}
3. Use {headingStyle} style for headings and subheadings
4. Include relevant examples and data points where applicable
5. Maintain consistent {style} throughout the content
6. Format for {layout} layout
7. Optimize for readability with short paragraphs and clear transitions

Content Requirements:
- Start with an engaging introduction that hooks the reader
- Include relevant statistics or examples to support main points
- Use subheadings for better organization
- Incorporate expert insights or quotes where relevant
- End with a strong conclusion and call-to-action
- Maintain natural keyword density (1-2%)

SEO Guidelines:
- Use primary keyword in first paragraph
- Include keywords in headings naturally
- Optimize meta description
- Use varied keyword phrases
- Include LSI keywords
- Structure content with proper H2s and H3s

Output the blog post in clean, formatted markdown.
`);

// SEO optimization prompt template
const seoOptimizationTemplate = PromptTemplate.fromTemplate(`
Optimize the following blog content for SEO while maintaining readability:

CONTENT:
{content}

Keywords to target: {keywords}

Please:
1. Ensure optimal keyword placement
2. Add LSI keywords naturally
3. Optimize headings and subheadings
4. Improve meta description if provided
5. Maintain natural language flow
6. Add internal linking suggestions
7. Suggest image alt texts

Return the optimized content in markdown format.
`);

export async function POST(req: Request) {
	try {
		const body: BlogRequestBody = await req.json();
		const {
			topic,
			keywords,
			tone,
			wordCount,
			style,
			targetAudience = "general readers",
			includeOutline = false,
			layout = "standard",
			headingStyle = "modern",
		} = body;

		// Initialize LangChain model
		const model = new ChatGoogleGenerativeAI({
			modelName: "gemini-pro",
			maxOutputTokens: 2048,
			temperature: 0.7,
		});

		// Create a chain for generating outline
		const outlineChain = RunnableSequence.from([
			outlinePromptTemplate,
			model,
			new StringOutputParser(),
		]);

		// Create a chain for generating blog content
		const blogChain = RunnableSequence.from([
			blogPromptTemplate,
			model,
			new StringOutputParser(),
		]);

		// Create a chain for SEO optimization
		const seoChain = RunnableSequence.from([
			seoOptimizationTemplate,
			model,
			new StringOutputParser(),
		]);

		let outline = "";
		if (includeOutline) {
			outline = await outlineChain.invoke({
				topic,
				wordCount,
				tone,
				keywords: keywords.join(", "),
				targetAudience,
			});
		}

		// Generate initial blog content
		const blogContent = await blogChain.invoke({
			topic,
			style,
			tone,
			keywords: keywords.join(", "),
			wordCount,
			targetAudience,
			layout,
			headingStyle,
		});

		// Optimize content for SEO
		const optimizedContent = await seoChain.invoke({
			content: blogContent,
			keywords: keywords.join(", "),
		});

		// Extract metadata using regex
		const metaDescription =
			optimizedContent.match(/Meta Description: (.*?)\n/)?.[1] || "";
		const suggestedImages =
			optimizedContent.match(
				/Image suggestions:([\s\S]*?)(?=\n\n|$)/
			)?.[1] || "";

		return NextResponse.json({
			success: true,
			data: {
				outline: includeOutline ? outline : null,
				content: optimizedContent,
				metadata: {
					metaDescription,
					suggestedImages: suggestedImages
						.split("\n")
						.filter(Boolean),
					wordCount: optimizedContent.split(" ").length,
					readingTime: Math.ceil(
						optimizedContent.split(" ").length / 200
					), // Assuming 200 words per minute
				},
			},
		});
	} catch (error: any) {
		console.error("Blog generation error:", error);
		return NextResponse.json(
			{
				success: false,
				error: error.message || "Failed to generate blog content",
			},
			{ status: 500 }
		);
	}
}
