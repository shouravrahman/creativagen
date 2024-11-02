import React, { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { Copy, Recycle } from "lucide-react";
import { toast } from "sonner";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

interface EditorProps {
	content: string; // This should be HTML formatted
}

const CustomEditor: React.FC<EditorProps> = ({ content }) => {
	const [newContent, setNewContent] = useState<string>(content); // Initialize with content
	const [isEditable, setIsEditable] = useState<boolean>(false);

	const handleChange = (e: any) => {
		setNewContent(e);
	};

	const modules = {
      toolbar: [
         [{ header: [1, 2, false] }],
         ['bold', 'italic', 'underline', 'strike'],
         [{ list: 'ordered' }, { list: 'bullet' }],
         ['link', 'image', 'video'],
         [{ color: [] }, { background: [] }], // Add color options
         ['clean'], // Remove formatting button
     ],
	};

	const handleCopy = () => {
		navigator.clipboard.writeText(newContent || content);
		toast("Content copied to clipboard!");
	};

	const handleRegenerate = () => {
		setNewContent(""); // Clear the content for regeneration
		setIsEditable(true); // Allow editing after regeneration
	};

	return (
		<div className="w-full rounded-lg">
			<div className="flex">
				<button
					onClick={handleCopy}
					className="flex gap-2 bg-accent mr-2 text-black py-2 px-4 rounded-lg hover:bg-accent/90 transition"
				>
					<span>Copy Content</span>
					<Copy />
				</button>
				<button
					onClick={handleRegenerate}
					className="bg-white text-black hover:bg-white/90 flex gap-2 py-2 px-4 rounded-lg transition"
				>
					<span>Regenerate</span>
					<Recycle />
				</button>
			</div>

			<ReactQuill
				style={{
					width: "100%",
					backgroundColor: "white",
					outline: "none",
					color: "black",
					minHeight: "600px",
					height: "100%",
					borderRadius: "6px",
					border: "none",
					marginTop: "10px",
				}}
				value={isEditable ? newContent : content} // Use HTML content
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
		</div>
	);
};

export default CustomEditor;
