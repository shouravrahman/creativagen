import { NextRequest, NextResponse } from "next/server";
import { createTemplate } from "@/services/template";
import { auth } from "@/auth";
import prismadb from "@/lib/prismadb";

export async function POST(req: NextRequest) {
	const session = await auth();
	if (!session?.user || session.user.role !== "Admin") {
		return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
	}

	const { name, description, slug, category, imageUrl, aiPrompt, features } =
		await req.json();

	const newTemplate = await createTemplate({
		name,
		description,
		slug,
		category,
		imageUrl,
		aiPrompt,
		features,
	});

	if (!newTemplate) {
		return NextResponse.json(
			{ error: "Failed to create template" },
			{ status: 500 }
		);
	}

	return NextResponse.json(newTemplate, { status: 201 });
}
export async function GET(req: NextRequest) {
	const session = await auth();
	if (!session?.user || session.user.role !== "Admin") {
		return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
	}

	try {
		const templates = await prismadb.template.findMany();
		return NextResponse.json(templates);
	} catch (error) {
		console.error("Error fetching templates:", error);
		return NextResponse.json(
			{ error: "Failed to fetch templates" },
			{ status: 500 }
		);
	}
}
