import React, { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

interface EditorProps {
	content: string;
}

const CustomEditor: React.FC<EditorProps> = ({ content }) => {
	const [newContent, setNewContent] = useState<string>("");

	const handleChange = (e: any) => {
		setNewContent(e);
	};
	const modules = {
		toolbar: [
			[{ header: "1" }, { header: "2" }, { font: [] }],
			[{ size: [] }],
			["bold", "italic", "underline", "strike", "blockquote"],
			[{ list: "ordered" }, { list: "bullet" }],
			["link", "image", "video"],
			["clean"],
		],
	};

	return (
		<div className="w-full">
			<ReactQuill
				style={{
					width: "100%",
					backgroundColor: "white",
					outline: "none",
					color: "black",
					minHeight: "500px",
				}}
				value={content}
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
				// theme="bubble"
				placeholder="your content will appear here..."
			/>
		</div>
	);
};

export default CustomEditor;
