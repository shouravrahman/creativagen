import prismadb from "@/lib/prismadb.ts";

interface SaveContentParams {
	formValues: Record<string, any>;
	aiResponse: string;
	templateSlug: string;
	userId: string;
}

export async function saveGeneratedContent({
	formValues,
	aiResponse,
	templateSlug,
	userId,
}: SaveContentParams) {
	try {
		const savedContent = await prismadb.generatedContent.create({
			data: {
				formValues,
				aiResponse,
				templateSlug,
				createdBy: userId,
			},
		});
		return savedContent;
	} catch (error) {
		console.error("Error saving generated content:", error);
		throw new Error("Failed to save generated content");
	}
}
