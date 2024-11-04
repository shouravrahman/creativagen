import React, { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { Calendar, Copy, Recycle, RefreshCw, Save } from "lucide-react"; // Import additional icons
import { toast } from "sonner";
import DatePicker from "react-datepicker"; // Import DatePicker
import "react-datepicker/dist/react-datepicker.css"; // Import CSS for DatePicker
import { Button } from "../ui/button";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

interface EditorProps {
	content: string; // This should be HTML formatted
	onSave?: (content: string) => void; // Callback to save content
	onSchedule?: (content: string, scheduledTime: Date) => void; // Callback to schedule content
}

const CustomEditor: React.FC<EditorProps> = ({
	content,
	onSave,
	onSchedule,
}) => {
	const [newContent, setNewContent] = useState<string>(content);
	const [isEditable, setIsEditable] = useState<boolean>(false);
	const [scheduledTime, setScheduledTime] = useState<Date | null>(null); // State for scheduled time

	const handleChange = (e: any) => {
		setNewContent(e);
	};

	// const handleSave = () => {
	// 	onSave(newContent); // Call the save function passed as a prop
	// 	toast("Content saved!");
	// };

	// const handleSchedule = () => {
	// 	if (scheduledTime) {
	// 		onSchedule(newContent, scheduledTime); // Call the schedule function passed as a prop
	// 		toast("Content scheduled!");
	// 	} else {
	// 		toast("Please select a date and time to schedule.");
	// 	}
	// };

	// const handleRegenerate = () => {
	// 	// Logic to regenerate content (placeholder)
	// 	setNewContent("Regenerated content goes here..."); // Example placeholder
	// 	toast("Content regenerated!");
	// };

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
						// onClick={handleRegenerate}
						variant="ghost"
						className="flex items-center gap-2"
					>
						<RefreshCw size={16} />
						<span>Regenerate</span>
					</Button>
					<Button
						// onClick={handleSave}
						variant="ghost"
						className="flex items-center gap-2"
					>
						<Save size={16} />
						<span>Save</span>
					</Button>
					<Button
						// onClick={handleSchedule}
						variant="ghost"
						className="flex items-center gap-2"
					>
						<Calendar size={16} />
						<span>Schedule</span>
					</Button>
					<Button
						onClick={() => setIsEditable(!isEditable)}
						variant="ghost"
						className="flex items-center gap-2"
					>
						<Recycle size={16} />
						<span>{isEditable ? "Finish Editing" : "Edit"}</span>
					</Button>
				</div>
			</div>

			<ReactQuill
				style={{
					width: "100%",
					backgroundColor: "white",
					outline: "none",
					color: "black",
					minHeight: "400px",
					height: "100%",
					borderRadius: "6px",
					border: "1px solid #e2e8f0",
					marginTop: "10px",
				}}
				value={isEditable ? newContent : content}
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
				placeholder="Your content will appear here..."
			/>

			{/* Date Picker for scheduling */}
			<DatePicker
				selected={scheduledTime}
				onChange={(date) => setScheduledTime(date)}
				showTimeSelect
				dateFormat="Pp"
				className="mt-4 w-full p-2 border text-center placeholder:text-black  border-border rounded-lg"
				placeholderText="Select date and time"
			/>
		</div>
	);
};

export default CustomEditor;
