import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import prismadb from "@/lib/prismadb";

export async function GET(req: NextRequest) {
	const session = await auth();
	if (!session?.user) {
		return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
	}

	try {
		const history = await prismadb.generatedContent.findMany({
			where: {
				createdBy: session.user.id,
			},
			orderBy: {
				createdAt: "desc",
			},
		});

		return NextResponse.json({
			success: true,
			data: history,
		});
	} catch (error) {
		console.error("Error fetching content history:", error);
		return NextResponse.json(
			{ error: "Failed to fetch content history" },
			{ status: 500 }
		);
	}
}
