import { auth } from "@/auth";
import { GeneratedContent } from "@/components/history/HistoryTable";
import prismadb from "@/lib/prismadb";

export async function fetchHistory(): Promise<GeneratedContent[]> {
	const session = await auth();
	if (!session?.user) {
		throw new Error("Unauthorized");
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

		return history;
	} catch (error) {
		console.error("Error fetching history:", error);
		return [];
	}
}
