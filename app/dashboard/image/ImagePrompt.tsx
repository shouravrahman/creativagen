import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import React from 'react';

interface ImagePromptProps {
  prompt: string;
  setPrompt: (prompt: string) => void;
}

export function ImagePrompt({ prompt, setPrompt }: ImagePromptProps) {
  return (
    <div className="space-y-2">
        <Label >
        Describe your image
        </Label>
        <Textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
           className="w-full h-24 focus:ring-1 ring-primary "
        placeholder="A serene lake at sunset with mountains in the background..."
      />
    </div>
  );
}
