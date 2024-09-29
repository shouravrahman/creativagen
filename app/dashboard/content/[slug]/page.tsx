"use client";

import { useState } from "react";
import CustomEditor from "@/components/content/CustomEditor";
import { DynamicForm } from "@/components/DynamicForm";
import { TEMPLATES } from "@/constants.ts";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { chatSession } from "@/utils/AIModel";
import { useSession } from "next-auth/react";
import { saveGeneratedContent } from "@/services/saveGeneratedContent";
import { incrementApiLimit } from "@/lib/api-limit";

interface Content {
	params: { slug: string };
}

const ContentPage = ({ params }: Content) => {
	const session = useSession();
	const [generatedContent, setGeneratedContent] = useState("");
	const selectedTemplate = TEMPLATES?.find(
		(item) => item.slug === params.slug
	);

	const generateContent = async (values: Record<string, any>) => {
		const details = Object.entries(values)
			.map(([key, value]) => `${key}: ${value}`)
			.join("\n");
		const prompt = selectedTemplate?.aiPrompt;
		const finalPrompt = `${details}, ${prompt} format the response in HTML.`;
		const result = await chatSession.sendMessage(finalPrompt);
		const responseText = await result?.response.text();
		setGeneratedContent(responseText);

		// Save the generated content to the database
		if (session?.data?.user) {
			const savedContent = await saveGeneratedContent({
				formValues: values,
				aiResponse: responseText,
				templateSlug: params.slug,
				userId: session?.data?.user.id!,
			});
			await incrementApiLimit();
			console.log("Content saved successfully", savedContent);
		} else {
			console.error("User not authenticated");
		}
	};

	return (
		<div className="w-full">
			<Link
				href="/dashboard"
				className="flex items-center "
			>
				<ArrowLeft className="h-6 w-6 mr-1" />
				<span className="text-lg">Back</span>
			</Link>
			<div className="flex flex-col mt-10 md:px-10">
				<h1 className="text-2xl font-bold mb-5">
					{selectedTemplate?.name}
				</h1>
				<p className="mb-8">{selectedTemplate?.description}</p>

				<div className="flex flex-col md:flex-row gap-10 justify-between md:mt-10">
					<div className="flex-1 h-full">
						<DynamicForm
							config={{
								name: selectedTemplate?.name,
								description: selectedTemplate?.description,
								formFields: selectedTemplate?.formFields || [],
							}}
							submitFn={generateContent}
						/>
					</div>

					<div className="flex-1 mt-6 h-full">
						<CustomEditor content={generatedContent} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContentPage;
