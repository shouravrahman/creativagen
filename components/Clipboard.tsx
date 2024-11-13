import React, { useState, useEffect } from "react";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { CheckIcon } from "lucide-react";

export const Clipboard = ({ result }: { result: string }) => {
	const [copied, setCopied] = useState(false);

	const handleCopy = () => {
		const textArea = document.querySelector("textarea");
		textArea.select();
		document.execCommand("copy");
		setCopied(true);
	};

	useEffect(() => {
		// Auto-focus on the textarea when the component mounts
		const textArea = document.querySelector("textarea");
		if (textArea) textArea.focus();
	}, []);

	return (
		<Card className='space-y-6'>
			<CardHeader>
				<CardTitle>Copy to Clipboard</CardTitle>
			</CardHeader>
			<CardContent>
				<div className='flex flex-col w-full items-start space-y-4'>
					<textarea
						className='w-full h-64 p-2 border rounded-md text-black'
						placeholder={result}
						value={result}
						readOnly // Prevent direct editing
					/>
					<Button variant='outline' onClick={handleCopy}>
						{copied ? "Copied!" : "Copy"}
					</Button>
				</div>
			</CardContent>
			{copied && (
				<CardFooter>
					<div className='flex items-center space-x-2'>
						<CheckIcon className='w-4 h-4 text-green-500' />
						<span className='text-green-500'>Text Copied Successfully!</span>
					</div>
				</CardFooter>
			)}
		</Card>
	);
};
