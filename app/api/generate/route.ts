// import { auth } from "@/auth";
// import { incrementApiLimit } from "@/lib/api-limit";
// import prismadb from "@/lib/prismadb";

// import { NextRequest, NextResponse } from "next/server";

// import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
// import { OpenAI } from "@langchain/openai";
// import { ChatGroq } from "@langchain/groq";

// import { RunnableSequence } from "@langchain/core/runnables";

// import { PromptTemplate } from "@langchain/core/prompts";

// const modelMap = {
// 	GROQ: () =>
// 		new ChatGroq({
// 			apiKey: process.env.GROQ_API_KEY,
// 			model: "mixtral-8x7b-32768",
// 		}),
// 	GEMINI: () =>
// 		new ChatGoogleGenerativeAI({
// 			apiKey: process.env.GEMINI_API_KEY,
// 			modelName: "gemini-pro",
// 			maxOutputTokens: 2048,
// 		}),
// };

// export async function POST(req: NextRequest) {
// 	try {
// 		const session = await auth();
// 		if (!session?.user) {
// 			return NextResponse.json(
// 				{ error: "Unauthorized" },
// 				{ status: 401 }
// 			);
// 		}

// 		const { values, settings } = await req.json();

// 		// Create prompt template with variables
// 		const promptTemplate = PromptTemplate.fromTemplate(template.aiPrompt);

// 		// Get the appropriate model based on settings
// 		const model = modelMap[settings.model]();

// 		// Create streaming response
// 		const { stream, handlers } = LangChainStream();

// 		// Create chain
// 		const chain = RunnableSequence.from([promptTemplate, model]);

// 		// Start generation
// 		chain.invoke(
// 			{
// 				...values,
// 			},
// 			{
// 				callbacks: handlers,
// 			}
// 		);

// 		// Save generation to database
// 		await prismadb.generatedContent.create({
// 			data: {
// 				formValues: values,
// 				templateId: templateId,
// 				createdBy: session?.user.id,
// 				temperature: settings.temperature,
// 				maxTokens: settings.maxTokens,
// 			},
// 		});

// 		// Increment API limit
// 		await incrementApiLimit();

// 		// Return streaming response
// 		return new StreamingTextResponse(stream);
// 	} catch (error) {
// 		console.error("Error generating content:", error);
// 		return NextResponse.json(
// 			{ error: "Failed to generate content" },
// 			{ status: 500 }
// 		);
// 	}
// }
