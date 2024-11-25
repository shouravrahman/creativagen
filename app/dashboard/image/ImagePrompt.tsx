import { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Eraser, Sparkles } from 'lucide-react';

interface ImagePromptProps {
  prompt: string;
  setPrompt: (prompt: string) => void;
   loading: boolean;
}

export function ImagePrompt({ prompt, setPrompt, loading }: ImagePromptProps) {
   const [isFocused, setIsFocused] = useState(false);

   const handleClear = () => {
      setPrompt('');
   };

   const examplePrompts = [
      "A serene mountain landscape at sunset",
      "A cyberpunk city street at night",
      "A magical forest with glowing mushrooms",
   ];

   const handleExampleClick = (example: string) => {
      setPrompt(example);
   };

  return (
     <div className="space-y-4">
        <div className="relative">
           <motion.div
              animate={{ scale: isFocused ? 1.02 : 1 }}
              className="relative"
           >
              <Input
                 placeholder="Describe your image..."
                 value={prompt}
                 onChange={(e) => setPrompt(e.target.value)}
                 onFocus={() => setIsFocused(true)}
                 onBlur={() => setIsFocused(false)}
                 className="pr-20"
                 disabled={loading}
              />
              {prompt && (
                 <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2"
                    onClick={handleClear}
                    disabled={loading}
                 >
                    <Eraser className="w-4 h-4" />
                 </Button>
              )}
           </motion.div>
        </div>

        <div className="flex flex-wrap gap-2">
           {examplePrompts.map((example) => (
              <Button
                 key={example}
                 variant="outline"
                 size="sm"
                 onClick={() => handleExampleClick(example)}
                 disabled={loading}
                 className="text-xs"
              >
                 <Sparkles className="w-3 h-3 mr-1" />
                 {example}
              </Button>
           ))}
        </div>
    </div>
  );
}
