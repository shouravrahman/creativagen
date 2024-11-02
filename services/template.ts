import prismadb from "@/lib/prismadb";
import { z } from "zod";

export const createTemplate = async (payload: {
	name: string;
	description: string;
	slug: string;
	category: string;
	imageUrl: string;
	aiPrompt: string;
	features: string[];
}) => {
	try {
		return await prismadb.template.create({
			data: {
				name: payload.name,
				description: payload.description,
				slug: payload.slug,
				category: payload.category,
				imageUrl: payload.imageUrl,
				aiPrompt: payload.aiPrompt,
				features: payload.features,
			},
		});
	} catch (error) {
		console.error("Error creating template:", error);
		return null;
	}
};
