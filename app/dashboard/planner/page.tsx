"use client";
import { useState } from "react";
import { eachDayOfInterval, startOfMonth, endOfMonth, format } from "date-fns";
import { ContentPlannerHeader } from "@/components/planner/ContentPlannerHeader";
import { ContentDay } from "@/components/planner/ContentDay";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ContentProvider, useContent } from "@/context/ContentPlannerContext";
import { useFilters } from "@/hooks/useFilters";

// const generateContentPlan = (formData: any) => {
// 	// This is where you'd implement your content generation logic
// 	const startDate = new Date();
// 	const generatedContent = [];

// 	// Example: Generate content for the next 30 days
// 	for (let i = 0; i < 30; i++) {
// 		const date = new Date(startDate);
// 		date.setDate(date.getDate() + i);

// 		// Generate content based on frequency
// 		if (
// 			formData.frequency === "daily" ||
// 			(formData.frequency === "weekly" && i % 7 === 0) ||
// 			(formData.frequency === "bi-weekly" && i % 14 === 0) ||
// 			(formData.frequency === "monthly" && i === 0)
// 		) {
// 			// Rotate through platforms and content types
// 			const platformIndex = i % formData.platforms.length;
// 			const contentTypeIndex = i % formData.contentType.length;

// 			generatedContent.push({
// 				id: `generated-${Date.now()}-${i}`,
// 				title: `${formData.platforms[platformIndex]} ${formData.contentType[contentTypeIndex]}`,
// 				description: `Generated content for ${formData.targetAudience} with ${formData.tone} tone`,
// 				platform: formData.platforms[platformIndex],
// 				contentType: formData.contentType[contentTypeIndex],
// 				date: format(date, "yyyy-MM-dd"),
// 			});
// 		}
// 	}

// 	return generatedContent;
// };

export default function ContentPlanner() {
	const [currentDate, setCurrentDate] = useState(new Date());
	const { contentItems, addContent, editContent, deleteContent } =
		useContent();
	const {
		platformFilter,
		setPlatformFilter,
		contentTypeFilter,
		setContentTypeFilter,
		filterContent,
	} = useFilters();

	const handleGenerateContentPlan = (formData: any) => {
		// const generatedContent = generateContentPlan(formData);
		// setAllContent(generatedContent);
	};

	const filteredContent = filterContent(contentItems);

	return (
		<div className="h-screen flex flex-col">
			<ContentPlannerHeader
				currentDate={currentDate}
				setCurrentDate={setCurrentDate}
				platformFilter={platformFilter}
				setPlatformFilter={setPlatformFilter}
				contentTypeFilter={contentTypeFilter}
				setContentTypeFilter={setContentTypeFilter}
				handleGenerateContentPlan={handleGenerateContentPlan}
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
								handleAddContent={addContent}
								handleEditContent={editContent}
								handleDeleteContent={deleteContent}
							/>
						);
					})}
				</div>
			</ScrollArea>
		</div>
	);
};
