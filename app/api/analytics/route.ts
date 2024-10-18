import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";

export async function GET() {
	try {
		// Fetch total credits used
		const totalCreditsUsed = await prismadb.userApiLimit.aggregate({
			_sum: {
				count: true,
			},
		});

		// Fetch total words generated
		const totalWordsGenerated = await prismadb.generatedContent.aggregate({
			_count: {
				id: true,
			},
		});

		// Fetch total content created
		const totalContentCreated = await prismadb.generatedContent.count();

		// Fetch content categorized by type
		const contentByType = await prismadb.generatedContent.groupBy({
			by: ["templateSlug"], // Assuming templateSlug represents the type of content
			_count: {
				id: true,
			},
		});

		// Fetch time saved (this could be a calculated field based on your logic)
		const timeSaved = await calculateTimeSaved(); // Implement this function based on your logic

		return NextResponse.json({
			totalCreditsUsed: totalCreditsUsed._sum.count || 0,
			totalWordsGenerated: totalWordsGenerated._count.id || 0,
			totalContentCreated,
			contentByType,
			timeSaved,
		});
	} catch (error) {
		console.error("[ANALYTICS_ERROR]", error);
		return new NextResponse("Internal Error", { status: 500 });
	}
}

// Example function to calculate time saved
async function calculateTimeSaved() {
	// Implement your logic to calculate time saved
	return 120; // Placeholder value
}
