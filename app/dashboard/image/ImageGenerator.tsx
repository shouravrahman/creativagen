"use client"
import React, { useState } from 'react';
import { toast } from 'sonner';
import { ImagePrompt } from './ImagePrompt';
import { StyleSelector, STYLES } from './StyleSelector';
import { MoodSelector, MOODS } from './MoodSelector';
import { ImageOptions, RESOLUTIONS, QUALITIES, VARIANTS } from './ImageOptions';
import { GenerateButton } from './GenerateButton';
import { ImageDisplay } from './ImageDisplay';
import { generateImage } from './services/imageService';


export function ImageGenerator() {
   const [prompt, setPrompt] = useState('');
   const [selectedStyle, setSelectedStyle] = useState<typeof STYLES[number]>('Digital Art');
   const [selectedMood, setSelectedMood] = useState<typeof MOODS[number]>('Vibrant');
   const [selectedResolution, setSelectedResolution] = useState<typeof RESOLUTIONS[number]>('512x512');
   const [selectedQuality, setSelectedQuality] = useState<typeof QUALITIES[number]>('Standard');
   const [selectedVariants, setSelectedVariants] = useState<typeof VARIANTS[number]>(1);
   const [loading, setLoading] = useState(false);
   const [image, setImage] = useState<string | null>(null);
   const [currentProvider, setCurrentProvider] = useState<string>('');

   const handleImageGeneration = async () => {
      if (!prompt) {
         toast.error('Please enter a prompt');
         return;
      }

      setLoading(true);
      try {
         const result = await generateImage({
            prompt,
            style: selectedStyle,
            mood: selectedMood,
            resolution: selectedResolution,
            quality: selectedQuality,
            variants: selectedVariants
         });

         if (result.success && result.imageUrl) {
            setImage(result.imageUrl);
            toast.success('Image generated successfully!');
         } else {
            throw new Error(result.error || 'Failed to generate image');
         }
      } catch (error) {
         toast.error(error instanceof Error ? error.message : 'Failed to generate image');
         setImage(null);
      } finally {
         setLoading(false);
      }
   };

   const downloadImage = () => {
      if (!image) return;
      const link = document.createElement('a');
      link.href = image;
      link.download = 'generated-image.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
   };

   return (
      <div className="w-full max-w-4xl mx-auto p-6 space-y-8">
         <div className="text-center space-y-2">
            <h1 className="text-4xl font-bold text-gray-900">AI Image Generator</h1>
            <p className="text-gray-600">Transform your ideas into stunning visuals</p>
         </div>

         <div className="space-y-6">
            <ImagePrompt prompt={prompt} setPrompt={setPrompt} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <StyleSelector
                  selectedStyle={selectedStyle}
                  onStyleSelect={setSelectedStyle}
               />
               <MoodSelector
                  selectedMood={selectedMood}
                  onMoodSelect={setSelectedMood}
               />
            </div>

            <ImageOptions
               selectedResolution={selectedResolution}
               selectedQuality={selectedQuality}
               selectedVariants={selectedVariants}
               onResolutionSelect={setSelectedResolution}
               onQualitySelect={setSelectedQuality}
               onVariantsSelect={setSelectedVariants}
            />

            <GenerateButton loading={loading} onClick={handleImageGeneration} />

            <ImageDisplay
               image={image}
               loading={loading}
               onDownload={downloadImage}
               variants={selectedVariants}
            />

            {currentProvider && (
               <p className="text-sm text-gray-500 text-center">
                  Generated using {currentProvider}
               </p>
            )}
         </div>
      </div>
   );
}
