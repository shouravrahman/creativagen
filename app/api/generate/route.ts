// import { google } from "@ai-sdk/google";

// import { streamText } from "ai";

export const runtime = "edge";
export const maxDuration = 30;

// export async function POST(req: Request) {
// 	const { prompt } = await req.json();

// 	const result = await streamText({
// 		model: google("models/gemini-1.5-pro-latest"),
// 		prompt,
// 	});

// 	return result.toDataStreamResponse();
// }
import { NextApiRequest, NextApiResponse } from "next";
import { PromptTemplate } from "@langchain/core/prompts";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { chatSession } from "@/utils/AIModel";

// API Route to generate content
export async function POST(req: NextApiRequest, res: NextApiResponse) {
	const { aiPrompt, details } = req.body;

	try {
		// Prepare the dynamic prompt using the aiPrompt passed from the client
		const promptTemplate = new PromptTemplate({
			template: `{aiPrompt}\n\nDetails:\n{details}\n\nPlease format the response in markdown.`,
			inputVariables: ["aiPrompt", "details"],
		});

		// Format the final prompt with user details
		const prompt = await promptTemplate.format({
			aiPrompt: aiPrompt,
			details: Object.entries(details)
				.map(([key, value]) => `${key}: ${value}`)
				.join("\n"),
		});
		const result = await chatSession.sendMessage(prompt);
		return Response.json(result);
	} catch (error) {
		console.error("Error generating content:", error);
		return Response.json({ error: "Failed to generate content" });
	}
}

// Helper function to format content
const formatContent = (content: string) => {
	return content
		.replace(/\n{2,}/g, "</p><p>") // Convert double line breaks to paragraphs
		.replace(/\n/g, "<br>") // Convert single line breaks to <br>
		.replace(/#{1,6}\s?([^\n]+)/g, (match, p1) => {
			const level = match.trim().startsWith("######")
				? 6
				: match.trim().startsWith("#####")
				? 5
				: match.trim().startsWith("####")
				? 4
				: match.trim().startsWith("###")
				? 3
				: match.trim().startsWith("##")
				? 2
				: 1;
			return `<h${level}>${p1.trim()}</h${level}>`;
		})
		.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>") // Convert **bold** to <strong>
		.replace(/\*(.+?)\*/g, "<em>$1</em>"); // Convert *italic* to <em>
};
