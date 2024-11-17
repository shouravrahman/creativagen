"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const CreateTemplate = () => {
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [slug, setSlug] = useState("");
	const [category, setCategory] = useState("");
	const [imageUrl, setImageUrl] = useState("");
	const [aiPrompt, setAiPrompt] = useState("");
	const [features, setFeatures] = useState<string[]>([""]); // Initialize with an empty feature
	const [error, setError] = useState("");
	const [success, setSuccess] = useState("");
	const router = useRouter();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setError("");
		setSuccess("");

		const response = await fetch("/api/admin/template", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name,
				description,
				slug,
				category,
				imageUrl,
				aiPrompt,
				features,
			}),
		});

		if (response.ok) {
			setSuccess("Template created successfully!");
			router.push("/admin/templates"); // Redirect to the templates list or another page
		} else {
			const data = await response.json();
			setError(data.error || "Failed to create template");
		}
	};

	const handleFeatureChange = (index: number, value: string) => {
		const newFeatures = [...features];
		newFeatures[index] = value;
		setFeatures(newFeatures);
	};

	const addFeature = () => {
		setFeatures([...features, ""]); // Add an empty feature input
	};

	return (
		<div className="container mx-auto p-4">
			<h1 className="text-2xl font-bold mb-4">Create New Template</h1>
			<form
				onSubmit={handleSubmit}
				className="space-y-4 text-black"
			>
				<div>
               <label className="block mb-1 text-foreground">
						Template Name
					</label>
					<input
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
						required
						className="border rounded p-2 w-full"
					/>
				</div>
				<div>
					<label className="block mb-1">Description</label>
					<textarea
						value={description}
						onChange={(e) => setDescription(e.target.value)}
						required
						className="border rounded p-2 w-full"
					/>
				</div>
				<div>
               <label className="text-foreground block mb-1">Slug</label>
					<input
						type="text"
						value={slug}
						onChange={(e) => setSlug(e.target.value)}
						required
						className="border rounded p-2 w-full"
					/>
				</div>
				<div>
               <label className="text-foreground block mb-1">Category</label>
					<input
						type="text"
						value={category}
						onChange={(e) => setCategory(e.target.value)}
						required
						className="border rounded p-2 w-full"
					/>
				</div>
				<div>
               <label className="text-foreground block mb-1">Image URL</label>
					<input
						type="text"
						value={imageUrl}
						onChange={(e) => setImageUrl(e.target.value)}
						required
						className="border rounded p-2 w-full"
					/>
				</div>
				<div>
               <label className="text-foreground block mb-1">AI Prompt</label>
					<textarea
						value={aiPrompt}
						onChange={(e) => setAiPrompt(e.target.value)}
						required
						className="border rounded p-2 w-full"
					/>
				</div>
				<div>
               <label className="block mb-1 text-foreground">Features</label>
					{features.map((feature, index) => (
						<div
							key={index}
							className="flex items-center mb-2"
						>
							<input
								type="text"
								value={feature}
								onChange={(e) =>
									handleFeatureChange(index, e.target.value)
								}
								className="border rounded p-2 w-full"
								placeholder={`Feature ${index + 1}`}
							/>
						</div>
					))}
					<button
						type="button"
						onClick={addFeature}
						className="bg-gray-300 text-black py-1 px-2 rounded hover:bg-gray-400 transition"
					>
						Add Feature
					</button>
				</div>
				<button
					type="submit"
               className="bg-blue-500 text-foreground py-2 px-4 rounded hover:bg-blue-600 transition"
				>
					Create Template
				</button>
			</form>
			{error && <p className="text-red-500 mt-4">{error}</p>}
			{success && <p className="text-green-500 mt-4">{success}</p>}
		</div>
	);
};

export default CreateTemplate;
