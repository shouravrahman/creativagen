"use client";

import Banner from "@/components/banner";
import ImageUpload from "@/components/image-upload";
import Messages from "@/components/messages";
import PromptForm from "@/components/prompt-form";
import prepareImageFileForUpload from "@/lib/prepare-image-file-for-upload";
import { useState } from "react";

export type InitialMessage = {
  prompt: string;
  image: string;
};

export type Messages = {
  prompt?: string;
  image?: string;
}[];

export default function Chat() {
  const [messages, setMessages] = useState<Messages>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [initialPrompt, setInitialPrompt] = useState("");
  const [error, setError] = useState("");

  const setInitialMessage = (message: InitialMessage) => {
    setInitialPrompt(message.prompt);
    setMessages([message]);
  };

  const handleImageDropped = async (droppedImage: any) => {
    const image = await prepareImageFileForUpload(droppedImage);
    setMessages((prev) => [...prev, { image }]);
  };

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.persist();
    const form = e.target as HTMLFormElement;
    const prompt = form.prompt.value;
    const lastImage = messages.findLast((message) => message.image)?.image;

    setIsGenerating(true);
    setInitialPrompt("");
    setError("");
    setMessages((prev) => [...prev, { prompt }]);

    try {
      const response = await fetch("/api/predictions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt, image: lastImage }),
      });
      if (!response.ok) {
        throw new Error("Failed to generate image");
      }
      const prediction = await response.json();
      setMessages((prev) => [...prev, { image: prediction }]);
      setIsGenerating(false);
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      setError((error as Error).message);
      setIsGenerating(false);
    }
  };

  return (
    <main className="pt-12 pb-36">
      <Banner setInitialMessage={setInitialMessage} />
      <div className="w-full px-4 max-w-2xl mx-auto">
        {messages.length === 0 && (
          <ImageUpload handleImageDropped={handleImageDropped} />
        )}
        {error && (
          <p className="py-4 text-center text-red-500 font-semibold">{error}</p>
        )}
        <Messages messages={messages} isGenerating={isGenerating} />
        <PromptForm
          initialPrompt={initialPrompt}
          disabled={isGenerating}
          onSubmit={handleSubmit}
        />
      </div>
    </main>
  );
}
