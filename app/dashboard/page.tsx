"use client";

import { useState } from "react";
import TemplateList from "@/components/template-list-section";
import SearchSection from "@/components/search-section/Search";
import { TEMPLATES } from "@/constants";

export default function Dashboard() {
	const [searchInput, setSearchInput] = useState<string>("");
	const [content, setContent] = useState<string>("");

	const handleSaveContent = (newContent: string) => {
		setContent(newContent);
	};

	const handleSchedulePost = (content: string, scheduledTime: Date) => {
		fetch("/api/schedule", {
			method: "POST",
			body: JSON.stringify({ content, scheduledTime }),
			headers: { "Content-Type": "application/json" },
		});
	};

	return (
		<div className="">
			<div className="mb-8 px-4">
				<SearchSection
					onSearchInput={(value: string) => setSearchInput(value)}
				/>
			</div>
			<div className="px-4 ">
            <TemplateList searchInput={searchInput} initialTemplates={TEMPLATES} />
			</div>
		</div>
	);
}
