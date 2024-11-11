import { auth } from "@/auth";
import { incrementApiLimit } from "@/lib/api-limit";
import prismadb from "@/lib/prismadb";

import { NextRequest, NextResponse } from "next/server";
import { LangChainStream, StreamingTextResponse } from "ai";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { OpenAI } from "@langchain/openai";
import { ChatGroq } from "@langchain/groq";

import { RunnableSequence } from "@langchain/core/runnables";

import { PromptTemplate } from "@langchain/core/prompts";

const modelMap = {
	GPT4: () =>
		new OpenAI({
			modelName: "gpt-4",
			temperature: 0.7,
			streaming: true,
		}),
	GROQ: () =>
		new ChatGroq({
			apiKey: process.env.GROQ_API_KEY,
			model: "mixtral-8x7b-32768",
		}),
	GEMINI: () =>
		new ChatGoogleGenerativeAI({
			apiKey: process.env.GEMINI_API_KEY,
			modelName: "gemini-pro",
			maxOutputTokens: 2048,
		}),
};

export async function POST(req: NextRequest) {
	try {
		const session = await auth();
		if (!session?.user) {
			return NextResponse.json(
				{ error: "Unauthorized" },
				{ status: 401 }
			);
		}

		const { values, templateId, settings } = await req.json();

		// Fetch template from database
		const template = await prismadb.template.findUnique({
			where: { id: templateId },
			include: { formFields: true },
		});

		if (!template) {
			return NextResponse.json(
				{ error: "Template not found" },
				{ status: 404 }
			);
		}

		// Create prompt template with variables
		const promptTemplate = PromptTemplate.fromTemplate(template.aiPrompt);

		// Get the appropriate model based on settings
		const model = modelMap[settings.model]();

		// Create streaming response
		const { stream, handlers } = LangChainStream();

		// Create chain
		const chain = RunnableSequence.from([promptTemplate, model]);

		// Start generation
		chain.invoke(
			{
				...values,
			},
			{
				callbacks: handlers,
			}
		);

		// Save generation to database
		await prismadb.generatedContent.create({
			data: {
				formValues: values,
				templateId: templateId,
				createdBy: session?.user.id,
				temperature: settings.temperature,
				maxTokens: settings.maxTokens,
			},
		});

		// Increment API limit
		await incrementApiLimit();

		// Return streaming response
		return new StreamingTextResponse(stream);
	} catch (error) {
		console.error("Error generating content:", error);
		return NextResponse.json(
			{ error: "Failed to generate content" },
			{ status: 500 }
		);
	}
}
