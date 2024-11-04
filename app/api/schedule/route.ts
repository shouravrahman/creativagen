import { NextRequest, NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";
import { currentUser } from "@/lib/auth";

export async function POST(req: NextRequest) {
	const { content, scheduledTime } = await req.json();
	const user = await currentUser();
	try {
		const scheduledPost = await prismadb.scheduledPost.create({
			data: {
				content,
				scheduledAt: new Date(scheduledTime),
				userId: user?.id as string,
			},
		});
		return NextResponse.json(scheduledPost);
	} catch (error) {
		console.error("Error scheduling post:", error);
		return NextResponse.json(
			{ error: "Failed to schedule post" },
			{ status: 500 }
		);
	}
}
