"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Template {
	id: string;
	name: string;
	description: string;
	slug: string;
	category: string;
	imageUrl: string;
	aiPrompt: string;
	features: string[];
}

const TemplatesList = () => {
	const [templates, setTemplates] = useState<Template[]>([]);
	const [error, setError] = useState("");
	const router = useRouter();

	useEffect(() => {
		const fetchTemplates = async () => {
			try {
				const response = await fetch("/api/admin/template");
				if (!response.ok) {
					throw new Error("Failed to fetch templates");
				}
				const data = await response.json();
				setTemplates(data);
			} catch (error: any) {
				setError(error.message);
			}
		};

		fetchTemplates();
	}, []);

	const handleEdit = (slug: string) => {
		router.push(`/admin/edit-template/${slug}`); // Redirect to edit template page
	};

	return (
		<div className="container mx-auto p-4">
			<h1 className="text-2xl font-bold mb-4">Templates List</h1>
			{error && <p className="text-red-500">{error}</p>}
			<table className="min-w-full border-collapse border border-gray-300">
				<thead>
					<tr>
						<th className="border border-gray-300 p-2">Name</th>
						<th className="border border-gray-300 p-2">
							Description
						</th>
						<th className="border border-gray-300 p-2">Category</th>
						<th className="border border-gray-300 p-2">Actions</th>
					</tr>
				</thead>
				<tbody>
					{templates.map((template) => (
						<tr key={template.id}>
							<td className="border border-gray-300 p-2">
								{template.name}
							</td>
							<td className="border border-gray-300 p-2">
								{template.description}
							</td>
							<td className="border border-gray-300 p-2">
								{template.category}
							</td>
							<td className="border border-gray-300 p-2">
								<button
									onClick={() => handleEdit(template.slug)}
									className="bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600 transition"
								>
									Edit
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default TemplatesList;
