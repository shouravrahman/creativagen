"use client";

import GenerateButton from "@/components/GenerateButton";
import PreviewModal from "@/components/PreviewModal";
import dynamic from "next/dynamic";
import { useState } from "react";

const Tldraw = dynamic(
	() => import("@tldraw/tldraw").then((value) => value.Tldraw),
	{
		ssr: false,
	}
);

export default function Draw() {
	const [html, setHtml] = useState<null | string>(`<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello World App</title>
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body class="bg-gray-800 flex items-center justify-center h-screen">
    <div class="bg-gray-700 p-8 rounded-lg shadow-lg text-white">
      <h1 class="text-3xl font-bold mb-4 text-center">Hello World</h1>
      <div class="flex justify-center">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
          Click me
        </button>
      </div>
    </div>
  </body>
  </html>`);

	return (
		<>
			{html && <PreviewModal html={html} setHtml={setHtml} />}

			<main className='w-screen h-screen relative'>
				<Tldraw persistenceKey='tldraw'>
					<GenerateButton setHtml={setHtml} />
				</Tldraw>
			</main>
		</>
	);
}
