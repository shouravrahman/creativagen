import React from "react";
import { Button } from "@/components/ui/button";
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
import { format } from "date-fns";

interface ContentItem {
	id: string;
	title: string;
	description: string;
	platform: string;
	contentType: string;
	date: string;
}

interface ContentFormProps {
	date: Date;
	initialContent: ContentItem | null;
	onSubmit: (content: ContentItem) => void;
	onDelete?: () => void;
}

export const ContentForm: React.FC<ContentFormProps> = ({
	date,
	initialContent,
	onSubmit,
	onDelete,
}) => {
	const [title, setTitle] = React.useState(initialContent?.title || "");
	const [description, setDescription] = React.useState(
		initialContent?.description || ""
	);
	const [platform, setPlatform] = React.useState(
		initialContent?.platform || "twitter"
	);
	const [contentType, setContentType] = React.useState(
		initialContent?.contentType || "post"
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
};
