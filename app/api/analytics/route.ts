import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";
const AVERAGE_WRITING_SPEED = 40;
export async function GET() {
	try {
		const totalCreditsUsed = await prismadb.userApiLimit.aggregate({
			_sum: {
				count: true,
			},
		});
		const generatedContents = await prismadb.generatedContent.findMany({
			select: {
				aiResponse: true,
			},
		});

		const totalWordsGenerated = generatedContents.reduce(
			(total, content) => {
				return (
					total +
					(content.aiResponse
						? content.aiResponse.split(/\s+/).length
						: 0)
				);
			},
			0
		);

		// Fetch total content created
		const totalContentCreated = await prismadb.generatedContent.count();

		// Fetch content categorized by type
		const contentByType = await prismadb.generatedContent.groupBy({
			by: ["templateSlug"], // Assuming templateSlug represents the type of content
			_count: {
				id: true,
			},
		});

		const timeSaved = totalWordsGenerated / AVERAGE_WRITING_SPEED;

		return NextResponse.json({
			totalCreditsUsed: totalCreditsUsed._sum.count || 0,
			totalWordsGenerated: totalWordsGenerated || 0,
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
