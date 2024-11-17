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
import { Card } from "../ui/card";

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
	const isCurrentMonth = isSameMonth(date, currentDate);

	return (
		<motion.div
			key={dateKey}
			initial={{ opacity: 0, scale: 0.9 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0, scale: 0.9 }}
			transition={{ duration: 0.2 }}
			className={cn(
				"min-h-[300px] p-4 border rounded-lg shadow-sm transition-colors ",
				!isCurrentMonth && "bg-muted/50",
				isPastDate && "bg-white/10",
				isToday(date) && "border-4 border-accent"
			)}
		>
			<div
				className={cn(
					"font-medium mb-2 flex justify-between items-center ",
					isToday(date) && "text-accent"
				)}
			>
				<span
					className={cn(
						"text-lg font-bold",
						isToday(date) && "text-accent",
						!isCurrentMonth && "text-muted"
					)}
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
								<Plus className="h-4 w-4 text-accent" />
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
			<ScrollArea className="h-[230px] sm:h-[280px] lg:h-[360px] w-full">
				<div className="space-y-2 ">
					{dayContentItems.map((item) => (
						<Card
							key={item.id}
							className={cn(
								"p-4 bg-card shadow-md rounded-lg cursor-pointer hover:shadow-lg transition-shadow",
								item.platform === "twitter" &&
									"border-[3px] border-[#1DA1F2]",
								item.platform === "facebook" &&
									"border-[3px] border-[#4267B2]",
								item.platform === "instagram" &&
									"border-[3px] border-[#E1306C]",
								item.platform === "linkedin" &&
									"border-[3px] border-[#0072B1]"
							)}
							onClick={() => {
								setSelectedDate(new Date(item.date));
								setEditingContent(item);
								setIsDialogOpen(true);
							}}
						>
							<div className="flex flex-col items-start justify-between">
								<div className="flex items-center space-x-2 mb-1 text-accent">
									<span
										className={cn(
											"text-xs font-semibold",
											item.platform === "twitter" &&
												"text-[#1DA1F2]",
											item.platform === "facebook" &&
												"text-[#4267B2]",
											item.platform === "instagram" &&
												"text-[#E1306C]",
											item.platform === "linkedin" &&
												"text-[#0072B1]"
										)}
									>
										{item.platform}
									</span>
									<span
										className={cn(
											"text-xs",
											item.contentType === "post" &&
												"bg-[#1DA1F2]/20 text-[#1DA1F2] px-2 py-1 rounded",
											item.contentType === "story" &&
												"bg-[#E1306C]/20 text-[#E1306C] px-2 py-1 rounded",
											item.contentType === "reel" &&
												"bg-[#8a3ab9]/20 text-[#8a3ab9] px-2 py-1 rounded",
											item.contentType === "article" &&
												"bg-[#0072B1]/20 text-[#0072B1] px-2 py-1 rounded"
										)}
									>
										{item.contentType}
									</span>
								</div>
                        <div className="mt-2 font-semibold text-foreground text-sm">
									{item.title}
								</div>
							</div>
                     <div className="text-xs mt-1 text-foreground/80 line-clamp-2">
								{item.description}
							</div>
						</Card>
					))}
				</div>
			</ScrollArea>
		</motion.div>
	);
};
