import React from 'react';
import { Download, ImageIcon } from 'lucide-react';

interface ImageDisplayProps {
   image: string | null;
   loading: boolean;
   onDownload: () => void;
   variants: number;
}

export function ImageDisplay({ image, loading, onDownload, variants }: ImageDisplayProps) {
   if (loading) {
      return null;
   }

   if (!image) {
      return (
         <div className="border-2 border-dashed  border-gray-300 rounded-lg p-12 text-center">
            <ImageIcon className="w-12 h-12 mx-auto " />
            <p className="mt-2 text-sm text-muted">
               Your generated image will appear here
            </p>
         </div>
      );
   }

   // For multiple variants, split the container into a grid
   const gridCols = variants === 4 ? 'grid-cols-2' : variants === 2 ? 'grid-cols-2' : 'grid-cols-1';

   return (
      <div className={`grid ${gridCols} gap-4`}>
         {Array.from({ length: variants }).map((_, index) => (
            <div key={index} className="relative group">
               <img
                  src={image}
                  alt={`Generated variant ${index + 1}`}
                  className="w-full h-auto rounded-lg shadow-lg"
               />
               <button
                  onClick={onDownload}
                  className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
               >
                  <Download className="w-5 h-5 text-gray-700" />
               </button>
            </div>
         ))}
      </div>
   );
}
