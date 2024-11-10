"use client";

import * as React from "react";
import { eachDayOfInterval, startOfMonth, endOfMonth, format } from "date-fns";
import { ContentPlannerHeader } from "@/components/planner/ContentPlannerHeader";
import { ContentDay } from "@/components/planner/ContentDay";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ContentItem {
	id: string;
	title: string;
	description: string;
	platform: string;
	contentType: string;
	date: string;
}

export default function ContentPlanner() {
	const [currentDate, setCurrentDate] = React.useState(new Date());
	// const [contentItems, setContentItems] = React.useState<ContentItem[]>([]);
	const [contentItems, setContentItems] = React.useState<ContentItem[]>([
		{
			id: "1",
			title: "Launch Campaign",
			description: "Launch the new product campaign on social media.",
			platform: "twitter",
			contentType: "post",
			date: format(new Date(), "yyyy-MM-dd"),
		},
		{
			id: "2",
			title: "Blog Post",
			description: "Write a blog post about the latest industry trends.",
			platform: "linkedin",
			contentType: "article",
			date: format(new Date(), "yyyy-MM-dd"),
		},
	]);
	const [platformFilter, setPlatformFilter] = React.useState<string>("all");
	const [contentTypeFilter, setContentTypeFilter] =
		React.useState<string>("all");

	const handleAddContent = (newContent: ContentItem) => {
		setContentItems((prev) => [...prev, newContent]);
	};

	const handleEditContent = (editedContent: ContentItem) => {
		setContentItems((prev) =>
			prev.map((item) =>
				item.id === editedContent.id ? editedContent : item
			)
		);
	};

	const handleDeleteContent = (contentId: string) => {
		setContentItems((prev) => prev.filter((item) => item.id !== contentId));
	};

	const filteredContent = contentItems.filter(
		(item) =>
			(platformFilter === "all" || item.platform === platformFilter) &&
			(contentTypeFilter === "all" ||
				item.contentType === contentTypeFilter)
	);
	return (
		<div className="h-screen flex flex-col">
			<ContentPlannerHeader
				currentDate={currentDate}
				setCurrentDate={setCurrentDate}
				platformFilter={platformFilter}
				setPlatformFilter={setPlatformFilter}
				contentTypeFilter={contentTypeFilter}
				setContentTypeFilter={setContentTypeFilter}
			/>
			<ScrollArea className="flex-grow px-4 pb-4">
				<div className="grid grid-cols-7 gap-4">
					{["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
						(day) => (
							<div
								key={day}
								className="text-sm font-medium text-center py-2"
							>
								{day}
							</div>
						)
					)}
					{eachDayOfInterval({
						start: startOfMonth(currentDate),
						end: endOfMonth(currentDate),
					}).map((date) => {
						const dayContentItems = filteredContent.filter(
							(item) => item.date === format(date, "yyyy-MM-dd")
						);
						return (
							<ContentDay
								key={date.toString()}
								date={date}
								currentDate={currentDate}
								dayContentItems={dayContentItems}
								handleAddContent={handleAddContent}
								handleEditContent={handleEditContent}
								handleDeleteContent={handleDeleteContent}
							/>
						);
					})}
				</div>
			</ScrollArea>
		</div>
	);
}
