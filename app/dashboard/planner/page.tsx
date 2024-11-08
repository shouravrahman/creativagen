"use client";

import * as React from "react";
import {
	ChevronLeft,
	ChevronRight,
	Plus,
	Calendar,
	Filter,
} from "lucide-react";
import {
	addMonths,
	format,
	subMonths,
	isSameMonth,
	startOfMonth,
	endOfMonth,
	eachDayOfInterval,
	isBefore,
	startOfDay,
	isToday,
} from "date-fns";
import { motion, AnimatePresence } from "framer-motion";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
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
	const [contentItems, setContentItems] = React.useState<ContentItem[]>([]);
	const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);
	const [editingContent, setEditingContent] =
		React.useState<ContentItem | null>(null);
	const [isDialogOpen, setIsDialogOpen] = React.useState(false);
	const [platformFilter, setPlatformFilter] = React.useState<string>("all");
	const [contentTypeFilter, setContentTypeFilter] =
		React.useState<string>("all");

	const handlePreviousMonth = () => setCurrentDate(subMonths(currentDate, 1));
	const handleNextMonth = () => setCurrentDate(addMonths(currentDate, 1));

	React.useEffect(() => {
		const fetchData = async () => {
			const data: ContentItem[] = [
				{
					id: "1",
					title: "Twitter Post",
					description: "Announcing new feature",
					platform: "twitter",
					contentType: "post",
					date: "2023-06-15",
				},
				{
					id: "2",
					title: "Instagram Story",
					description: "Behind the scenes",
					platform: "instagram",
					contentType: "story",
					date: "2023-06-16",
				},
				{
					id: "3",
					title: "LinkedIn Article",
					description: "Industry insights",
					platform: "linkedin",
					contentType: "article",
					date: "2023-06-17",
				},
			];
			setContentItems(data);
		};
		fetchData();
	}, []);

	const handleAddContent = (newContent: ContentItem) => {
		setContentItems((prev) => [...prev, newContent]);
		setIsDialogOpen(false);
	};

	const handleEditContent = (editedContent: ContentItem) => {
		setContentItems((prev) =>
			prev.map((item) =>
				item.id === editedContent.id ? editedContent : item
			)
		);
		setIsDialogOpen(false);
	};

	const handleDeleteContent = (contentId: string) => {
		setContentItems((prev) => prev.filter((item) => item.id !== contentId));
		setIsDialogOpen(false);
	};

	const filteredContent = contentItems.filter(
		(item) =>
			(platformFilter === "all" || item.platform === platformFilter) &&
			(contentTypeFilter === "all" ||
				item.contentType === contentTypeFilter)
	);

	return (
		<div className="h-screen flex flex-col">
			<header className="flex flex-col sm:flex-row items-center justify-between p-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
				<h1 className="text-3xl font-bold mb-4 sm:mb-0">
					Content Planner
				</h1>
				<div className="flex flex-wrap gap-2 items-center">
					<Select
						value={platformFilter}
						onValueChange={setPlatformFilter}
					>
						<SelectTrigger className="w-[140px]">
							<SelectValue placeholder="Platform" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="all">All Platforms</SelectItem>
							<SelectItem value="twitter">Twitter</SelectItem>
							<SelectItem value="facebook">Facebook</SelectItem>
							<SelectItem value="instagram">Instagram</SelectItem>
							<SelectItem value="linkedin">LinkedIn</SelectItem>
						</SelectContent>
					</Select>
					<Select
						value={contentTypeFilter}
						onValueChange={setContentTypeFilter}
					>
						<SelectTrigger className="w-[140px]">
							<SelectValue placeholder="Content Type" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="all">All Types</SelectItem>
							<SelectItem value="post">Post</SelectItem>
							<SelectItem value="story">Story</SelectItem>
							<SelectItem value="reel">Reel</SelectItem>
							<SelectItem value="article">Article</SelectItem>
						</SelectContent>
					</Select>
					<Button
						variant="outline"
						size="icon"
					>
						<Filter className="h-4 w-4" />
					</Button>
				</div>
			</header>

			<Card className="m-4">
				<CardContent className="p-4">
					<div className="flex flex-col sm:flex-row items-center justify-between gap-4">
						<div className="flex items-center gap-2">
							<Button
								variant="outline"
								size="icon"
								onClick={handlePreviousMonth}
							>
								<ChevronLeft className="h-4 w-4" />
							</Button>
							<Button
								variant="outline"
								size="icon"
								onClick={handleNextMonth}
							>
								<ChevronRight className="h-4 w-4" />
							</Button>
							<h2 className="text-xl font-semibold">
								{format(currentDate, "MMMM yyyy")}
							</h2>
						</div>
						<Button
							variant="outline"
							onClick={() => setCurrentDate(new Date())}
						>
							<Calendar className="mr-2 h-4 w-4" /> Today
						</Button>
					</div>
				</CardContent>
			</Card>

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
					<AnimatePresence>
						{eachDayOfInterval({
							start: startOfMonth(currentDate),
							end: endOfMonth(currentDate),
						}).map((date, index) => {
							const dateKey = format(date, "yyyy-MM-dd");
							const dayContentItems = filteredContent.filter(
								(item) => item.date === dateKey
							);
							const isPastDate = isBefore(
								date,
								startOfDay(new Date())
							);

							return (
								<motion.div
									key={dateKey}
									initial={{ opacity: 0, scale: 0.9 }}
									animate={{ opacity: 1, scale: 1 }}
									exit={{ opacity: 0, scale: 0.9 }}
									transition={{ duration: 0.2 }}
									className={cn(
										"min-h-[300px] p-4 border rounded-lg shadow-sm transition-colors",
										!isSameMonth(date, currentDate) &&
											"bg-muted/50",
										isPastDate && "bg-muted/30",
										isToday(date) && "border-primary"
									)}
								>
									<div className="font-medium mb-2 flex justify-between items-center">
										<span
											className={cn(
												"text-lg",
												isToday(date) && "text-primary"
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
															setSelectedDate(
																date
															);
															setEditingContent(
																null
															);
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
														initialContent={
															editingContent
														}
														onSubmit={(content) => {
															if (
																editingContent
															) {
																handleEditContent(
																	content
																);
															} else {
																handleAddContent(
																	content
																);
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
													className="p-2 bg-primary/10 rounded cursor-pointer hover:bg-primary/20 transition-colors"
													onClick={() => {
														setSelectedDate(
															new Date(item.date)
														);
														setEditingContent(item);
														setIsDialogOpen(true);
													}}
												>
													<div className="font-medium">
														{item.title}
													</div>
													<div className="text-sm text-muted-foreground">
														{item.platform} -{" "}
														{item.contentType}
													</div>
													<div className="text-sm mt-1 line-clamp-2">
														{item.description}
													</div>
												</div>
											))}
										</div>
									</ScrollArea>
								</motion.div>
							);
						})}
					</AnimatePresence>
				</div>
			</ScrollArea>
		</div>
	);
}

interface ContentFormProps {
	date: Date;
	initialContent: ContentItem | null;
	onSubmit: (content: ContentItem) => void;
	onDelete?: () => void;
}

function ContentForm({
	date,
	initialContent,
	onSubmit,
	onDelete,
}: ContentFormProps) {
	const [title, setTitle] = React.useState(initialContent?.title || "");
	const [description, setDescription] = React.useState(
		initialContent?.description || ""
	);
	const [platform, setPlatform] = React.useState(
		initialContent?.platform || ""
	);
	const [contentType, setContentType] = React.useState(
		initialContent?.contentType || ""
	);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onSubmit({
			id: initialContent?.id || Date.now().toString(),
			title,
			description,
			platform,
			contentType,
			date: format(date, "yyyy-MM-dd"),
		});
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="space-y-4"
		>
			<div>
				<Label htmlFor="title">Title</Label>
				<Input
					id="title"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					required
				/>
			</div>
			<div>
				<Label htmlFor="description">Description</Label>
				<Textarea
					id="description"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
					required
				/>
			</div>
			<div>
				<Label htmlFor="platform">Platform</Label>
				<Select
					value={platform}
					onValueChange={setPlatform}
				>
					<SelectTrigger id="platform">
						<SelectValue placeholder="Select platform" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="twitter">Twitter</SelectItem>
						<SelectItem value="facebook">Facebook</SelectItem>
						<SelectItem value="instagram">Instagram</SelectItem>
						<SelectItem value="linkedin">LinkedIn</SelectItem>
					</SelectContent>
				</Select>
			</div>
			<div>
				<Label htmlFor="contentType">Content Type</Label>
				<Select
					value={contentType}
					onValueChange={setContentType}
				>
					<SelectTrigger id="contentType">
						<SelectValue placeholder="Select content type" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="post">Post</SelectItem>
						<SelectItem value="story">Story</SelectItem>
						<SelectItem value="reel">Reel</SelectItem>
						<SelectItem value="article">Article</SelectItem>
					</SelectContent>
				</Select>
			</div>
			<div className="flex justify-between">
				<Button type="submit">
					{initialContent ? "Update" : "Add"} Content
				</Button>
				{onDelete && (
					<Button
						type="button"
						variant="destructive"
						onClick={onDelete}
					>
						Delete
					</Button>
				)}
			</div>
		</form>
	);
}
