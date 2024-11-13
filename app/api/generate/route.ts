import { auth } from "@/auth";
import { incrementApiLimit } from "@/lib/api-limit";
import prismadb from "@/lib/prismadb";
import { NextRequest, NextResponse } from "next/server";
import { marked } from "marked"; // For converting markdown to HTML

// Import Langchain integrations
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { OpenAI } from "@langchain/openai";
import { ChatGroq } from "@langchain/groq";
import { PromptTemplate } from "@langchain/core/prompts";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { GenerationSettings } from "@/types";

// Helper to convert markdown to HTML with proper formatting for React Quill
const formatForQuill = (markdown: string): string => {
	// First, ensure proper line breaks for list items
	let formattedMd = markdown
		.replace(/^(\d+\.|\*|-)\s/gm, "\n$1 ") // Add newline before list items
		.replace(/\n{3,}/g, "\n\n"); // Remove excessive newlines

	// Convert to HTML using marked
	let html = marked(formattedMd);

	// Post-process HTML for React Quill compatibility
	return (
		html
			.replace(/<ul>/g, "<p></p><ul>")
			.replace(/<ol>/g, "<p></p><ol>")
			.replace(/<\/ul>/g, "</ul><p></p>")
			.replace(/<\/ol>/g, "</ol><p></p>")
			// Fix double paragraphs
			.replace(/<p><p>/g, "<p>")
			.replace(/<\/p><\/p>/g, "</p>")
			// Ensure proper line breaks
			.replace(/\n/g, "<br/>")
	);
};

// Enhanced prompt to ensure consistent formatting
const enhancePromptForFormatting = (template: string): string => {
	return `${template}\n\nPlease format the response with proper structure:
- Use standard numbering for numbered lists (1., 2., etc.)
- Use bullet points (*) for unordered lists
- Use clear headings where appropriate
- Add line breaks between sections for clarity`;
};

const getModelInstance = (model: string, settings: GenerationSettings) => {
	const baseSettings = {
		temperature: settings.temperature,
		maxTokens: settings.maxTokens,
	};

	const modelConfigs = {
		GEMINI: {
			...baseSettings,
			apiKey: process.env.GOOGLE_API_KEY,
			modelName: "gemini-1.5-pro",
		},
		OPENAI: {
			...baseSettings,
			apiKey: process.env.OPENAI_KEY,
			modelName: "gpt-4",
		},
		GROQ: {
			...baseSettings,
			apiKey: process.env.GROQ_API_KEY,
			modelName: "mixtral-8x7b-32768",
		},
	};

	if (!(model in modelConfigs)) {
		throw new Error(`Unsupported model: ${model}`);
	}

	const ModelClass = {
		GEMINI: ChatGoogleGenerativeAI,
		OPENAI: OpenAI,
		GROQ: ChatGroq,
	}[model];

	return new ModelClass(
		modelConfigs[model as keyof typeof modelConfigs]
	).pipe(new StringOutputParser());
};

const extractPlaceholders = (template: string): string[] => {
	const regex = /\{(.*?)\}/g;
	const matches = [...template.matchAll(regex)];
	return matches.map((match) => match[1]);
};

const validatePromptValues = (
	inputVariables: string[],
	values: Record<string, any>
): void => {
	const missingVariables = inputVariables.filter(
		(variable) => !(variable in values) || !values[variable]
	);

	if (missingVariables.length > 0) {
		throw new Error(
			`Missing required variables: ${missingVariables.join(", ")}`
		);
	}
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

		const { values, settings, aiPrompt, slug } = await req.json();

		if (!aiPrompt) {
			return NextResponse.json(
				{ error: "Prompt template is required" },
				{ status: 400 }
			);
		}

		try {
			// Extract and validate variables
			const inputVariables = extractPlaceholders(aiPrompt);
			validatePromptValues(inputVariables, values);

			// Create prompt template with enhanced formatting instructions
			const promptTemplate = new PromptTemplate({
				template: enhancePromptForFormatting(aiPrompt),
				inputVariables: inputVariables,
			});

			// Map values to extracted variables
			const promptValues = inputVariables.reduce((acc, key) => {
				acc[key] = values[key];
				return acc;
			}, {} as Record<string, string>);

			// Format the prompt
			const formattedPrompt = await promptTemplate.format(promptValues);

			// Initialize model and generate content
			const model = getModelInstance(settings.model, settings);
			const markdownResponse = await model.invoke(formattedPrompt);
			console.log(markdownResponse);

			// Convert markdown to HTML for React Quill
			const htmlResponse = formatForQuill(markdownResponse);
			console.log(htmlResponse);

			// Save to database
			// const savedContent = await prismadb.generatedContent.create({
			// 	data: {
			// 		formValues: values,
			// 		createdBy: session?.user.id!,
			// 		temperature: settings.temperature,
			// 		maxTokens: settings.maxTokens,
			// 		templateSlug: slug,
			// 		aiResponse: htmlResponse.toString(),
			// 	},
			// });

			// Increment API limit
			await incrementApiLimit();

			return NextResponse.json({
				success: true,
				// content: savedContent,
				formattedContent: htmlResponse, // Send formatted HTML directly
			});
		} catch (error) {
			if (error instanceof Error) {
				return NextResponse.json(
					{ error: error.message },
					{ status: 400 }
				);
			}
			throw error;
		}
	} catch (error) {
		console.error("Error generating content:", error);
		return NextResponse.json(
			{ error: "Failed to generate content" },
			{ status: 500 }
		);
	}
}
