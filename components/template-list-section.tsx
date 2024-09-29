"use client";
import { useState, useEffect } from "react";
import { TEMPLATES } from "@/constants";
import ToolCard from "./ToolCard";

const TemplateList = ({ searchInput }: { searchInput: string }) => {
	const [list, setList] = useState(TEMPLATES);

	useEffect(() => {
		if (searchInput) {
			const filteredData = TEMPLATES.filter((item) =>
				item.name.toLowerCase().includes(searchInput.toLowerCase())
			);
			setList(filteredData);
		} else {
			setList(TEMPLATES);
		}
	}, [searchInput]);

	const toggleFavorite = (slug: string) => {
		setList((prevList) =>
			prevList.map((tool) =>
				tool.slug === slug
					? { ...tool, isFavorite: !tool.isFavorite }
					: tool
			)
		);
	};

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
			{list.map((tool) => (
				<ToolCard
					key={tool.slug}
					tool={tool}
					onToggleFavorite={() => toggleFavorite(tool.slug)}
				/>
			))}
		</div>
	);
};

export default TemplateList;
