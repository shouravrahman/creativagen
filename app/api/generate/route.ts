import { chatSession } from "@/utils/AIModel";
import { NextRequest, NextResponse } from "next/server";
import { incrementApiLimit } from "@/lib/api-limit";
import { auth } from "@/auth";
import prismadb from "@/lib/prismadb";

export async function POST(req: NextRequest) {
	const session = await auth();
	if (!session?.user) {
		return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
	}

	const { values, templateSlug, aiPrompt } = await req.json();

	try {
		const details = Object.entries(values)
			.map(([key, value]) => `${key}: ${value}`)
			.join("\n");
		const finalPrompt = `${details}, ${aiPrompt}`;

		const result = await chatSession.sendMessage(finalPrompt);
		const responseText = result.response.text();
		const savedContent = await prismadb.generatedContent.create({
			data: {
				formValues: values,
				aiResponse: responseText,
				templateSlug: templateSlug,
				createdBy: session?.user.id as string,
			},
		});

		// Increment the API limit
		await incrementApiLimit();
		console.log("savedContent", savedContent);
		return NextResponse.json({ content: responseText, savedContent });
	} catch (error) {
		console.error("Error generating content:", error);
		return NextResponse.json(
			{ error: "Failed to generate content" },
			{ status: 500 }
		);
	}
}
