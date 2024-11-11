"use client";
import { useState, useEffect } from "react";
import { eachDayOfInterval, startOfMonth, endOfMonth, format } from "date-fns";
import { ContentPlannerHeader } from "@/components/planner/ContentPlannerHeader";
import { ContentDay } from "@/components/planner/ContentDay";
import { ScrollArea } from "@/components/ui/scroll-area";

import axios from "axios";

interface ContentItem {
	id: string;
	title: string;
	description: string;
	platform: string;
	contentType: string;
	date: string;
}

export default function ContentPlanner() {
   const [currentDate, setCurrentDate] = useState(new Date());
   const [contentItems, setContentItems] = useState<ContentItem[]>([]);
   const [platformFilter, setPlatformFilter] = useState<string>("all");
   const [contentTypeFilter, setContentTypeFilter] = useState<string>("all");
   const handleGenerateContentPlan = (values: any) => { console.log(values) };
   useEffect(() => {
      // Fetch content plan from backend
      const fetchContentPlan = async () => {
         try {
            const response = await axios.get("/api/content-plan");
            setContentItems(response.data);
         } catch (error) {
            console.error("Error fetching content plan:", error);
         }
      };
      fetchContentPlan();
   }, []);

	const handleAddContent = (newContent: ContentItem) => {
      // Save new content item to backend
      const saveContentItem = async () => {
         try {
            const response = await axios.post(
               "/api/content-plan",
               newContent
            );
            setContentItems((prev) => [...prev, response.data]);
         } catch (error) {
            console.error("Error saving content item:", error);
         }
      };
      saveContentItem();
	};

	const handleEditContent = (editedContent: ContentItem) => {
      // Update content item in backend
      const updateContentItem = async () => {
         try {
            await axios.put(
               `/api/content-plan/${editedContent.id}`,
               editedContent
            );
            setContentItems((prev) =>
               prev.map((item) =>
                  item.id === editedContent.id ? editedContent : item
               )
            );
         } catch (error) {
            console.error("Error updating content item:", error);
         }
      };
      updateContentItem();
	};

	const handleDeleteContent = (contentId: string) => {
      // Delete content item from backend
      const deleteContentItem = async () => {
         try {
            await axios.delete(`/api/content-plan/${contentId}`);
            setContentItems((prev) =>
               prev.filter((item) => item.id !== contentId)
            );
         } catch (error) {
            console.error("Error deleting content item:", error);
         }
      };
      deleteContentItem();
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
