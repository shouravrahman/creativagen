"use client";
import React, { useState } from "react";

import { toast } from "sonner";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const KeywordResearch = () => {
	const [keyword, setKeyword] = useState("");
	const [location, setLocation] = useState("");
	const [language, setLanguage] = useState("");
	const [searchVolume, setSearchVolume] = useState("");
	const [competition, setCompetition] = useState("");
	const [results, setResults] = useState<any[]>([]);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		// Construct the prompt for AI
		const prompt = `
            Generate keyword suggestions based on the following criteria:
            - Primary Keyword: ${keyword}
            - Location: ${location}
            - Language: ${language}
            - Search Volume: ${searchVolume}
            - Competition Level: ${competition}
            - Provide at least 10 keyword suggestions with search volume and competition metrics.
        `;

		try {
			const response = await fetch("/api/keyword-research", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ prompt }),
			});

			const data = await response.json();
			setResults(data.keywords);
			toast.success("Keyword suggestions generated successfully!");
		} catch (error) {
			console.error("Error fetching keyword suggestions:", error);
			toast.error("Failed to generate keyword suggestions.");
		}
	};

	return (
		<div className="p-6">
			<h1 className="text-2xl font-bold mb-4">Keyword Research Tool</h1>
			<form
				onSubmit={handleSubmit}
				className="space-y-4"
			>
				<Input
					type="text"
					placeholder="Enter primary keyword"
					value={keyword}
					onChange={(e) => setKeyword(e.target.value)}
					required
				/>
				<Input
					type="text"
					placeholder="Location (e.g., USA, UK)"
					value={location}
					onChange={(e) => setLocation(e.target.value)}
				/>
				<Input
					type="text"
					placeholder="Language (e.g., English, Spanish)"
					value={language}
					onChange={(e) => setLanguage(e.target.value)}
				/>
				<Input
					type="number"
					placeholder="Search Volume (optional)"
					value={searchVolume}
					onChange={(e) => setSearchVolume(e.target.value)}
				/>
				<Input
					type="text"
					placeholder="Competition Level (e.g., low, medium, high)"
					value={competition}
					onChange={(e) => setCompetition(e.target.value)}
				/>
				<Button type="submit">Generate Keywords</Button>
			</form>

			{results.length > 0 && (
				<div className="mt-6">
					<h2 className="text-xl font-semibold">
						Keyword Suggestions
					</h2>
					<ul className="list-disc pl-5">
						{results.map((result, index) => (
							<li key={index}>
								{result.keyword} - Volume: {result.volume},
								Competition: {result.competition}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
};

export default KeywordResearch;
