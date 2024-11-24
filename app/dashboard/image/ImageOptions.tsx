"use client"
import { cn } from '@/lib/utils';
import React from 'react';


export const RESOLUTIONS = [
   '512x512',
   '768x768',
   '1024x1024',
   '1024x1536',
] as const;

export const QUALITIES = [
   'Standard',
   'HD',
   'Ultra HD',
] as const;

export const VARIANTS = [1, 2, 4] as const;

interface ImageOptionsProps {
   selectedResolution: typeof RESOLUTIONS[number];
   selectedQuality: typeof QUALITIES[number];
   selectedVariants: typeof VARIANTS[number];
   onResolutionSelect: (resolution: typeof RESOLUTIONS[number]) => void;
   onQualitySelect: (quality: typeof QUALITIES[number]) => void;
   onVariantsSelect: (variants: typeof VARIANTS[number]) => void;
}

export function ImageOptions({
   selectedResolution,
   selectedQuality,
   selectedVariants,
   onResolutionSelect,
   onQualitySelect,
   onVariantsSelect,
}: ImageOptionsProps) {
   return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         {/* Resolution Selector */}
         <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Resolution</label>
            <div className="grid grid-cols-2 gap-2">
               {RESOLUTIONS.map((resolution) => (
                  <button
                     key={resolution}
                     onClick={() => onResolutionSelect(resolution)}
                     className={cn(
                        "px-3 py-2 text-sm rounded-lg transition-colors",
                        selectedResolution === resolution
                           ? "bg-blue-500 text-white"
                           : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                     )}
                  >
                     {resolution}
                  </button>
               ))}
            </div>
         </div>

         {/* Quality Selector */}
         <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Quality</label>
            <div className="grid grid-cols-1 gap-2">
               {QUALITIES.map((quality) => (
                  <button
                     key={quality}
                     onClick={() => onQualitySelect(quality)}
                     className={cn(
                        "px-3 py-2 text-sm rounded-lg transition-colors",
                        selectedQuality === quality
                           ? "bg-blue-500 text-white"
                           : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                     )}
                  >
                     {quality}
                  </button>
               ))}
            </div>
         </div>

         {/* Variants Selector */}
         <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Variants</label>
            <div className="grid grid-cols-3 gap-2">
               {VARIANTS.map((variant) => (
                  <button
                     key={variant}
                     onClick={() => onVariantsSelect(variant)}
                     className={cn(
                        "px-3 py-2 text-sm rounded-lg transition-colors",
                        selectedVariants === variant
                           ? "bg-blue-500 text-white"
                           : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                     )}
                  >
                     {variant}
                  </button>
               ))}
            </div>
         </div>
      </div>
   );
}
