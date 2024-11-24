import React from 'react';

interface ImagePromptProps {
  prompt: string;
  setPrompt: (prompt: string) => void;
}

export function ImagePrompt({ prompt, setPrompt }: ImagePromptProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        Describe your image
      </label>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="w-full h-24 px-4 py-2 text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        placeholder="A serene lake at sunset with mountains in the background..."
      />
    </div>
  );
}