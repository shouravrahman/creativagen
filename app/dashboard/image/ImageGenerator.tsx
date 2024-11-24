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
import { Wand2 } from 'lucide-react';


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
      <div className="w-full  mx-auto p-6 space-y-8">
         <div className="flex items-center gap-3 mb-8 p-4 rounded-lg bg-card">
            <Wand2 className="w-8 h-8 text-primary" />
            <div>
               <h1 className="text-3xl font-bold text-card-foreground">AI Image Generator</h1>
               <p className="text-sm text-muted-foreground">Create optimized image in seconds</p>
            </div>
         </div>

         <div className="space-y-6 flex  justify-between gap-6">
            <section className='h-full w-full flex flex-col gap-10'>
               <ImagePrompt prompt={prompt} setPrompt={setPrompt} />
               <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
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
            </section>
            <section className='w-full h-full'>
            <ImageDisplay
               image={image}
               loading={loading}
               onDownload={downloadImage}
               variants={selectedVariants}
            />
            </section>



            {currentProvider && (
               <p className="text-sm text-gray-500 text-center">
                  Generated using {currentProvider}
               </p>
            )}
         </div>
      </div>
   );
}
