import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import React from 'react';


export const STYLES = [
   'Realistic',
   'Anime',
   'Digital Art',
   'Oil Painting',
   'Watercolor',
   'Sketch',
   'Comic',
   '3D Render',
] as const;

interface StyleSelectorProps {
   selectedStyle: typeof STYLES[number];
   onStyleSelect: (style: typeof STYLES[number]) => void;
}

export function StyleSelector({ selectedStyle, onStyleSelect }: StyleSelectorProps) {
   return (
      <div className="space-y-2">
         <Label >Style</Label>
         <div className="grid grid-cols-2 gap-2">
            {STYLES.map((style) => (
               <button
                  key={style}
                  onClick={() => onStyleSelect(style)}
                  className={cn(
                     "px-4 py-2 text-sm rounded-lg transition-colors",
                     selectedStyle === style
                        ? "bg-primary text-foreground"
                        : "bg-card"
                  )}
               >
                  {style}
               </button>
            ))}
         </div>
      </div>
   );
}
