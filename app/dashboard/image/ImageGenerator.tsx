"use client"
import React, { Suspense, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ImagePrompt } from './ImagePrompt';
import { StyleSelector, STYLES } from './StyleSelector';
import { MoodSelector, MOODS } from './MoodSelector';
import { ImageOptions, RESOLUTIONS, QUALITIES, VARIANTS } from './ImageOptions';
import { GenerateButton } from './GenerateButton';
import { ImageDisplay } from './ImageDisplay';
import { useImageGenerator } from '@/hooks/useImage';
import { Wand2, Image as ImageIcon, Download, Share2, Trash2 } from 'lucide-react';
import {
   Card,
   CardContent,
   CardHeader,
   CardTitle,
   CardDescription
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ImageGenerationParams } from '@/services/imageService';
import { Badge } from '@/components/ui/badge';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { toast } from 'sonner';

// Configuration for the image generator - replace with your actual API keys
const IMAGE_GENERATOR_CONFIG = {
   edenAIKey: process.env.EDEN_AI_API_KEY,
   huggingFaceKey: process.env.HUGGING_FACE_API_KEY,
};

export function ImageGenerator() {
   // State management
   const [prompt, setPrompt] = useState('');
   const [selectedStyle, setSelectedStyle] = useState<typeof STYLES[number]>('Digital Art');
   const [selectedMood, setSelectedMood] = useState<typeof MOODS[number]>('Vibrant');
   const [selectedResolution, setSelectedResolution] = useState<typeof RESOLUTIONS[number]>('512x512');
   const [selectedQuality, setSelectedQuality] = useState<typeof QUALITIES[number]>('Standard');
   const [selectedVariants, setSelectedVariants] = useState<typeof VARIANTS[number]>(1);
   const [generatedImages, setGeneratedImages] = useState<string[]>([]);

   // Initialize the image generator hook with configuration
   const {
      generateImage,
      loading,
      image,
      additionalImages,
      currentProvider,
      downloadImage,
      error
   } = useImageGenerator(IMAGE_GENERATOR_CONFIG);

   const handleImageGeneration = async () => {
      if (!prompt.trim()) {
         toast.error("Please enter a prompt");
         return;
      }

      try {
         const [width, height] = selectedResolution.split('x').map(Number);

         const params: ImageGenerationParams = {
            prompt,
            style: selectedStyle,
            mood: selectedMood,
            resolution: selectedResolution,
            width,
            height,
            quality: selectedQuality.toLowerCase() as "standard" | "high" | "premium",
            variants: selectedVariants
         };

         await generateImage(params);

         // Update generated images history if successful
         if (image) {
            setGeneratedImages(prev => [image, ...prev]);
         }

         // Add additional images to history if any
         if (additionalImages?.length) {
            setGeneratedImages(prev => [...additionalImages, ...prev]);
         }
      } catch (err) {
         toast.error("Failed to generate image");
         console.error("Image generation error:", err);
      }
   };

   async function handleShare(imageUrl: string, filename: string = "generated-image") {
      try {
         const response = await fetch(imageUrl, { mode: "no-cors" });
         const blob = await response.blob();
         const file = new File([blob], `${filename}.png`, { type: blob.type });

         if (navigator.share) {
            await navigator.share({
               files: [file],
               title: "Shared Image",
               text: "Check out this image!",
            });
         } else {
            throw new Error("Web Share API not supported");
         }
      } catch (error) {
         throw new Error("Failed to share image");
      }
   }


   const handleDownload = async () => {
      try {
         await downloadImage(`generated-${Date.now()}`);
      } catch (error) {
         toast.error("Failed to download image");
      }
   };

   const clearHistory = () => {
      setGeneratedImages([]);
      toast.success("History cleared");
   };

   return (
      <div className="min-h-screen bg-background">
         <div className=" mx-auto px-4 py-8">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               className="space-y-8"
            >
               {/* Header */}
               {/* <Card className="border-none shadow-sm">
                  <CardHeader className="">
                     <div className="flex items-center gap-3">
                        <motion.div
                           whileHover={{ rotate: 180 }}
                           transition={{ duration: 0.3 }}
                        >
                           <Wand2 className="w-8 h-8 text-primary" />
                        </motion.div>
                        <div>
                           <CardTitle className="text-3xl">AI Image Generator</CardTitle>
                           <CardDescription>Create optimized images in seconds</CardDescription>
                        </div>
                     </div>
                  </CardHeader>
               </Card> */}

               {/* Main Content */}
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Left Column - Controls */}
                  <Card className="border-none shadow-sm">
                     <CardContent className="p-6 space-y-8">
                        <ImagePrompt
                           prompt={prompt}
                           setPrompt={setPrompt}
                           loading={loading}
                        />

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

                        <div className="flex justify-between items-center">
                           <GenerateButton loading={loading} onClick={handleImageGeneration} />
                           {currentProvider && (
                              <Badge variant="secondary">
                                 Generated by {currentProvider}
                              </Badge>
                           )}
                        </div>
                     </CardContent>
                  </Card>

                  {/* Right Column - Image Display */}
                  <Card className="border-none shadow-sm">
                     <CardContent className="p-6">
                        <Suspense fallback={<ImageSkeleton />}>
                           <AnimatePresence mode="wait">
                              <motion.div
                                 key={image || 'empty'}
                                 initial={{ opacity: 0 }}
                                 animate={{ opacity: 1 }}
                                 exit={{ opacity: 0 }}
                                 transition={{ duration: 0.3 }}
                              >
                                 <ImageDisplay
                                    image={image}
                                    loading={loading}
                                    error={error}
                                 />
                              </motion.div>
                           </AnimatePresence>
                        </Suspense>

                        {image && (
                           <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="flex justify-center gap-4 mt-4"
                           >
                              <Tooltip>
                                 <TooltipTrigger asChild>
                                    <Button
                                       variant="outline"
                                       size="icon"
                                       onClick={handleDownload}
                                    >
                                       <Download className="w-4 h-4" />
                                    </Button>
                                 </TooltipTrigger>
                                 <TooltipContent>Download Image</TooltipContent>
                              </Tooltip>

                              <Tooltip>
                                 <TooltipTrigger asChild>
                                    <Button
                                       variant="outline"
                                       size="icon"
                                       onClick={() => handleShare(image)}
                                    >
                                       <Share2 className="w-4 h-4" />
                                    </Button>
                                 </TooltipTrigger>
                                 <TooltipContent>Share Image</TooltipContent>
                              </Tooltip>
                           </motion.div>
                        )}
                     </CardContent>
                  </Card>
               </div>

               {/* Image History */}
               {generatedImages.length > 0 && (
                  <Card className="border-none shadow-sm">
                     <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle className="text-xl">Generated Images</CardTitle>
                        <Button
                           variant="ghost"
                           size="icon"
                           onClick={clearHistory}
                        >
                           <Trash2 className="w-4 h-4" />
                        </Button>
                     </CardHeader>
                     <CardContent>
                        <ScrollArea className="h-40">
                           <div className="flex gap-4 p-4">
                              {generatedImages.map((img, index) => (
                                 <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    whileHover={{ scale: 1.05 }}
                                    className="relative"
                                 >
                                    <img
                                       src={img}
                                       alt={`Generated ${index + 1}`}
                                       className="w-32 h-32 object-cover rounded-lg"
                                    />
                                 </motion.div>
                              ))}
                           </div>
                        </ScrollArea>
                     </CardContent>
                  </Card>
               )}
            </motion.div>
         </div>
      </div>
   );
}

const ImageSkeleton = () => (
   <div className="space-y-4">
      <Skeleton className="w-full h-[400px] rounded-lg" />
      <div className="flex justify-center gap-4">
         <Skeleton className="w-10 h-10 rounded-full" />
         <Skeleton className="w-10 h-10 rounded-full" />
      </div>
   </div>
);
