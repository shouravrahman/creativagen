"use client";

import { useState } from "react";
import CustomEditor from "@/components/content/CustomEditor";
import { DynamicForm } from "@/components/DynamicForm";
import { TEMPLATES } from "@/constants.ts";
import { ArrowLeft, Loader2 } from "lucide-react";
import Link from "next/link";

interface Content {
	params: { slug: string };
}

const ContentPage = ({ params }: Content) => {
	const [generatedContent, setGeneratedContent] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const selectedTemplate = TEMPLATES?.find(
		(item) => item.slug === params.slug
	);

	const generateContent = async (values: Record<string, any>) => {
		setIsLoading(true);
		try {
			const response = await fetch("/api/generate", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					values,
					templateSlug: params.slug,
					aiPrompt: selectedTemplate?.aiPrompt,
				}),
			});

			if (!response.ok) {
				throw new Error("Failed to generate content");
			}

			const data = await response.json();
			setGeneratedContent(data.content);
		} catch (error) {
			console.error("Error generating content:", error);
		} finally {
			setIsLoading(false);
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
					<div className="md:w-[30%]">
						<DynamicForm
							config={{
								name: selectedTemplate?.name,
								description: selectedTemplate?.description,
								formFields: selectedTemplate?.formFields || [],
							}}
							submitFn={generateContent}
						/>
					</div>

					<div className=" mt-6 h-full md:w-[70%]">
						{isLoading ? (
							<div className="flex items-center justify-center h-full">
								<Loader2 className="h-6 w-6 animate-spin" />
							</div>
						) : (
							<CustomEditor content={generatedContent} />
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContentPage;
