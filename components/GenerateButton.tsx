"use client"
import { blobToBase64 } from "@/lib/blobToBase64";
import { getSvgAsImage } from "@/lib/getSvgAsImage";
import messageToHTML from "@/lib/messageToHTML";
import { useEditor } from "@tldraw/tldraw";
import { CogIcon } from "lucide-react";
import OpenAI from "openai";
import { SyntheticEvent, useState } from "react";
import toast from "react-hot-toast";

type Props = {
	setHtml: (html: string) => void;
};

export default function GenerateButton({ setHtml }: Props) {
	const editor = useEditor();
	const [loading, setLoading] = useState(false);

	async function handleExport(event: SyntheticEvent<HTMLButtonElement>) {
		try {
			setLoading(true);

			event.preventDefault();
			const svg = await editor.getSvg(Array.from(editor.currentPageShapeIds));

			if (!svg) {
				throw new Error("No image selected");
			}

			const png = await getSvgAsImage(svg, {
				type: "png",
				quality: 1,
				scale: 1,
			});
			const dataUrl = await blobToBase64(png!);

			// Send base64 image to API endpoint
			const response = await fetch("/api/generate", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ image: dataUrl }),
			});

			if (!response.ok) {
				const error = await response.json();
				throw new Error(error);
			}

			const data: OpenAI.Chat.Completions.ChatCompletion =
				await response.json();
			const message = data.choices[0].message.content;

			if (!message) {
				throw new Error("No response");
			}

			const html = messageToHTML(message);
			setHtml(html);
			toast.success("Success");
		} catch (error) {
			if (error instanceof Error) {
				toast.error(error.message);
			}
		} finally {
			setLoading(false);
		}
	}

	return (
		<button
			onClick={handleExport}
			className='fixed top-4 left-1/2 transform -translate-x-1/2 shadow-md shadow-blue-800/50 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg z-[1000] text-lg'
			disabled={loading}
		>
			{loading ? (
				<div className='flex justify-center items-center '>
					<div className='animate-spin rounded-full h-4 w-4 border-b-2 border-white' />
				</div>
			) : (
				<span className='inline-flex justify-center items-center'>
					<CogIcon className='w-4 h-4 mr-1' />
					<span>Generate</span>
				</span>
			)}
		</button>
	);
}
