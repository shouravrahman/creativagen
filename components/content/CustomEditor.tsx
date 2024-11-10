import React, { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { Calendar, Copy, RefreshCw, Save } from "lucide-react";
import { toast } from "sonner";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from "../ui/button";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

interface EditorProps {
	content: string;
	onSave?: (content: string) => void;
	onSchedule?: (content: string, scheduledTime: Date) => void;
}

const CustomEditor: React.FC<EditorProps> = ({
	content,
	onSave,
	onSchedule,
}) => {
	const [newContent, setNewContent] = useState<string>(content);
	const [scheduledTime, setScheduledTime] = useState<Date | null>(null);
	const [loading, setLoading] = useState<boolean>(false);

	const handleChange = (e: any) => {
		setNewContent(e);
	};

	const handleSave = async () => {
		if (onSave) {
			await onSave(newContent);
			toast("Content saved!");
		}
	};

	const handleRegenerate = async () => {
		setLoading(true);
		toast("Regenerating content...");
		try {
			const response = await fetch("/api/generate", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					/* your request body */
				}),
			});
			const data = await response.json();
			setNewContent(data.content);
			toast("Content regenerated!");
		} catch (error) {
			console.error("Error regenerating content:", error);
			toast.error("Failed to regenerate content.");
		} finally {
			setLoading(false);
		}
	};

	const handleCopyToClipboard = () => {
		navigator.clipboard
			.writeText(newContent)
			.then(() => {
				toast("Content copied to clipboard!");
			})
			.catch((err) => {
				console.error("Failed to copy: ", err);
				toast.error("Failed to copy content.");
			});
	};

	const modules = {
		toolbar: [
			[{ header: [1, 2, false] }],
			["bold", "italic", "underline", "strike"],
			[{ list: "ordered" }, { list: "bullet" }],
			["link", "image", "video"],
			[{ color: [] }, { background: [] }],
			["clean"],
		],
	};

	return (
		<div className="w-full rounded-lg p-4 bg-white shadow-md">
			<div className="flex flex-wrap justify-between mb-4">
				<div className="flex gap-2">
					<Button
						onClick={handleRegenerate}
						variant={"destructive"}
						className="flex items-center gap-2"
					>
						<RefreshCw size={16} />
						<span>Regenerate</span>
					</Button>
					<Button
						onClick={handleSave}
						variant={"destructive"}
						className="flex items-center gap-2"
					>
						<Save size={16} />
						<span>Save</span>
					</Button>
					{/* <Button
						// onClick={handleSchedule} // Uncomment if scheduling is needed
						variant={"destructive"}
						className="flex items-center gap-2"
					>
						<Calendar size={16} />
						<span>Schedule</span>
					</Button> */}
					<Button
						onClick={handleCopyToClipboard}
						variant={"destructive"}
						className="flex items-center gap-2"
					>
						<Copy size={16} />
						<span>Copy to Clipboard</span>
					</Button>
				</div>
			</div>
			<div className="h-full">
				<ReactQuill
					className="placeholder:text-2xl"
					style={{
						width: "100%",
						backgroundColor: "white",
						outline: "none",
						color: "black",
						minHeight: "500px",
						height: "100%",
						borderRadius: "6px",
						border: "1px solid #e2e8f0",
						marginTop: "10px",
					}}
					value={newContent}
					modules={modules}
					formats={[
						"header",
						"font",
						"size",
						"bold",
						"italic",
						"underline",
						"strike",
						"blockquote",
						"list",
						"bullet",
						"link",
						"image",
						"video",
					]}
					onChange={handleChange}
					placeholder={
						loading
							? "Generating content..."
							: "Your content will appear here..."
					}
				/>
			</div>

			{loading && (
				<div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-50">
					<p>Generating content...</p>
				</div>
			)}

			{/* <DatePicker
				selected={scheduledTime}
				onChange={(date) => setScheduledTime(date)}
				showTimeSelect
				dateFormat="Pp"
				className="mt-4 w-full p-2 border text-center placeholder:text-black border-border rounded-lg"
				placeholderText="Select date and time"
			/> */}
		</div>
	);
};

export default CustomEditor;
