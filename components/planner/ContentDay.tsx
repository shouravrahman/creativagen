import React from "react";
import { motion } from "framer-motion";
import { format, isSameMonth, isBefore, startOfDay, isToday } from "date-fns";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ContentForm } from "./ContentForm";

interface ContentItem {
	id: string;
	title: string;
	description: string;
	platform: string;
	contentType: string;
	date: string;
}

interface ContentDayProps {
	date: Date;
	currentDate: Date;
	dayContentItems: ContentItem[];
	handleAddContent: (content: ContentItem) => void;
	handleEditContent: (content: ContentItem) => void;
	handleDeleteContent: (id: string) => void;
}

export const ContentDay: React.FC<ContentDayProps> = ({
	date,
	currentDate,
	dayContentItems,
	handleAddContent,
	handleEditContent,
	handleDeleteContent,
}) => {
	const [isDialogOpen, setIsDialogOpen] = React.useState(false);
	const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);
	const [editingContent, setEditingContent] =
		React.useState<ContentItem | null>(null);

	const dateKey = format(date, "yyyy-MM-dd");
	const isPastDate = isBefore(date, startOfDay(new Date()));

	return (
		<motion.div
			key={dateKey}
			initial={{ opacity: 0, scale: 0.9 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0, scale: 0.9 }}
			transition={{ duration: 0.2 }}
			className={cn(
				"min-h-[300px] p-4 border rounded-lg shadow-sm transition-colors",
				!isSameMonth(date, currentDate) && "bg-muted/50",
				isPastDate && "bg-white/10",
				isToday(date) && "border-accent"
			)}
		>
			<div className="font-medium mb-2 flex justify-between items-center">
				<span
					className={cn("text-lg", isToday(date) && "text-primary")}
				>
					{format(date, "d")}
				</span>
				{!isPastDate && (
					<Dialog
						open={isDialogOpen}
						onOpenChange={setIsDialogOpen}
					>
						<DialogTrigger asChild>
							<Button
								variant="ghost"
								size="sm"
								className="h-8 w-8 p-0"
								onClick={() => {
									setSelectedDate(date);
									setEditingContent(null);
								}}
							>
								<Plus className="h-4 w-4" />
							</Button>
						</DialogTrigger>
						<DialogContent>
							<DialogHeader>
								<DialogTitle>
									{editingContent
										? "Edit Content"
										: "Add New Content"}
								</DialogTitle>
							</DialogHeader>
							<ContentForm
								date={selectedDate!}
								initialContent={editingContent}
								onSubmit={(content) => {
									if (editingContent) {
										handleEditContent(content);
										setIsDialogOpen(false);
									} else {
										handleAddContent(content);
										setIsDialogOpen(false);
									}
								}}
								onDelete={
									editingContent
										? () =>
												handleDeleteContent(
													editingContent.id
												)
										: undefined
								}
							/>
						</DialogContent>
					</Dialog>
				)}
			</div>
			<ScrollArea className="h-[230px]">
				<div className="space-y-2">
					{dayContentItems.map((item) => (
						<div
							key={item.id}
							className="p-4 bg-card shadow-md rounded-lg cursor-pointer hover:shadow-lg transition-shadow"
							onClick={() => {
								setSelectedDate(new Date(item.date));
								setEditingContent(item);
								setIsDialogOpen(true);
							}}
						>
							<div className="flex-col flex items-start justify-between">
								<div className="flex items-center space-x-2 text-accent">
									<span className="text-xs font-semibold ">
										{item.platform}
									</span>
									<span className="text-xs ">
										{item.contentType}
									</span>
								</div>
								<div className="font-semibold text-white text-base">
									{item.title}
								</div>
							</div>
							<div className="text-sm mt-2 text-white/80 line-clamp-2">
								{item.description}
							</div>
							{/* <div className="flex justify-end mt-2">
								<button
									className="text-xs hover:underline"
									onClick={(e) => {
										e.stopPropagation();
									}}
								>
									View Details
								</button>
							</div> */}
						</div>
					))}
				</div>
			</ScrollArea>
		</motion.div>
	);
};
