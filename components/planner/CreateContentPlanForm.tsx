"use client"
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Button } from '../ui/button';

const contentPlanSchema = z.object({
   role: z.string().min(3, 'Please specify your role'),
   purpose: z.array(z.string()).min(1, 'Please select a purpose'),
   contentType: z.array(z.string()).min(1, 'Please select at least one content type'),
   platforms: z.array(z.string()).min(1, 'Please select at least one platform'),
   frequency: z.string().min(1, 'Please specify the posting frequency'),
   length: z.string().min(1, 'Please specify the typical length of posts'),
   targetAudience: z.string().min(3, 'Please describe your target audience'),
   tone: z.string().min(1, 'Please select a tone'),
   goals: z.array(z.string()).min(1, 'Please specify your content goals'),
   competitors: z.string().optional(),
});

type ContentPlanFormData = z.infer<typeof contentPlanSchema>;

interface ContentPlanFormProps {
   initialData?: ContentPlanFormData;
   onSubmit: (data: ContentPlanFormData) => void;
}

export const CreateContentPlanForm: React.FC<ContentPlanFormProps> = ({
   onSubmit,
}) => {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<ContentPlanFormData>({
      resolver: zodResolver(contentPlanSchema),

   });

   return (
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 flex flex-col lg:flex-row gap-8 p-10 ">
         <div className="flex flex-col items-center gap-6 w-full">
            {/* Role */}
            <div className='w-full'>
               <Label htmlFor="role">Your Role</Label>
               <Input id="role" placeholder="Enter your role" {...register('role')} />
               {errors.role && <p className="text-red-500">{errors.role.message}</p>}
            </div>

            {/* Purpose */}
            <div className='w-full'>
               <Label htmlFor="purpose">Purpose of Your Content</Label>
               <Select {...register('purpose')}>
                  <SelectTrigger id="purpose">
                     <SelectValue placeholder="Select purpose" />
                  </SelectTrigger>
                  <SelectContent>
                     <SelectItem value="brand-awareness">Brand Awareness</SelectItem>
                     <SelectItem value="lead-generation">Lead Generation</SelectItem>
                     <SelectItem value="community-engagement">Community Engagement</SelectItem>
                     <SelectItem value="product-launch">Product Launch</SelectItem>
                     <SelectItem value="customer-education">Customer Education</SelectItem>
                  </SelectContent>
               </Select>
               {errors.purpose && <p className="text-red-500">{errors.purpose.message}</p>}
            </div>

            {/* Content Type */}
            <div className='w-full'>
               <Label htmlFor="contentType">Content Type</Label>
               <Select multiple {...register('contentType')}>
                  <SelectTrigger id="contentType">
                     <SelectValue placeholder="Select content type" />
                  </SelectTrigger>
                  <SelectContent>
                     <SelectItem value="post">Post</SelectItem>
                     <SelectItem value="story">Story</SelectItem>
                     <SelectItem value="reel">Reel</SelectItem>
                     <SelectItem value="article">Article</SelectItem>
                     <SelectItem value="video">Video</SelectItem>
                  </SelectContent>
               </Select>
               {errors.contentType && <p className="text-red-500">{errors.contentType.message}</p>}
            </div>

            {/* Platforms */}
            <div className='w-full'>
               <Label htmlFor="platforms">Target Platforms</Label>
               <Select multiple {...register('platforms')}>
                  <SelectTrigger id="platforms">
                     <SelectValue placeholder="Select platforms" />
                  </SelectTrigger>
                  <SelectContent>
                     <SelectItem value="twitter">Twitter</SelectItem>
                     <SelectItem value="linkedin">LinkedIn</SelectItem>
                     <SelectItem value="instagram">Instagram</SelectItem>
                     <SelectItem value="facebook">Facebook</SelectItem>
                     <SelectItem value="youtube">YouTube</SelectItem>
                     <SelectItem value="tiktok">TikTok</SelectItem>
                  </SelectContent>
               </Select>
               {errors.platforms && <p className="text-red-500">{errors.platforms.message}</p>}
            </div>

            {/* Frequency */}
            <div className='w-full'>
               <Label htmlFor="frequency">Posting Frequency</Label>
               <Select {...register('frequency')}>
                  <SelectTrigger id="frequency">
                     <SelectValue placeholder="Select frequency" />
                  </SelectTrigger>
                  <SelectContent>
                     <SelectItem value="daily">Daily</SelectItem>
                     <SelectItem value="weekly">Weekly</SelectItem>
                     <SelectItem value="bi-weekly">Bi-weekly</SelectItem>
                     <SelectItem value="monthly">Monthly</SelectItem>
                  </SelectContent>
               </Select>
               {errors.frequency && <p className="text-red-500">{errors.frequency.message}</p>}
            </div>
         </div>
         <div className="w-full gap-6 flex flex-col items-center ">
            {/* Length */}
            <div className='w-full'>
               <Label htmlFor="length">Length of Posts</Label>
               <Select {...register('length')}>
                  <SelectTrigger id="length">
                     <SelectValue placeholder="Select length" />
                  </SelectTrigger>
                  <SelectContent>
                     <SelectItem value="short">Short (Under 100 words)</SelectItem>
                     <SelectItem value="medium">Medium (100-300 words)</SelectItem>
                     <SelectItem value="long">Long (300+ words)</SelectItem>
                     <SelectItem value="video">Video (30-60 sec)</SelectItem>
                  </SelectContent>
               </Select>
               {errors.length && <p className="text-red-500">{errors.length.message}</p>}
            </div>

            {/* Target Audience */}
            <div className='w-full'>
               <Label htmlFor="targetAudience">Target Audience</Label>
               <Textarea id="targetAudience" placeholder="Describe your target audience" {...register('targetAudience')} />
               {errors.targetAudience && <p className="text-red-500">{errors.targetAudience.message}</p>}
            </div>

            {/* Tone */}
            <div className='w-full'>
               <Label htmlFor="tone">Tone of Content</Label>
               <Select {...register('tone')}>
                  <SelectTrigger id="tone">
                     <SelectValue placeholder="Select tone" />
                  </SelectTrigger>
                  <SelectContent>
                     <SelectItem value="professional">Professional</SelectItem>
                     <SelectItem value="casual">Casual</SelectItem>
                     <SelectItem value="friendly">Friendly</SelectItem>
                     <SelectItem value="educational">Educational</SelectItem>
                     <SelectItem value="humorous">Humorous</SelectItem>
                  </SelectContent>
               </Select>
               {errors.tone && <p className="text-red-500">{errors.tone.message}</p>}
            </div>

            {/* Goals */}
            <div className='w-full'>
               <Label htmlFor="goals">Content Goals</Label>
               <Select multiple {...register('goals')}>
                  <SelectTrigger id="goals">
                     <SelectValue placeholder="Select goals" />
                  </SelectTrigger>
                  <SelectContent>
                     <SelectItem value="increase-engagement">Increase Engagement</SelectItem>
                     <SelectItem value="increase-conversions">Increase Conversions</SelectItem>
                     <SelectItem value="grow-followers">Grow Followers</SelectItem>
                     <SelectItem value="brand-awareness">Brand Awareness</SelectItem>
                  </SelectContent>
               </Select>
               {errors.goals && <p className="text-red-500">{errors.goals.message}</p>}
            </div>

            {/* Competitors */}
            <div className='w-full'>
               <Label htmlFor="competitors">Competitors or Inspirations</Label>
               <Input id="competitors" placeholder="List competitors or inspirational brands" {...register('competitors')} />
            </div>


            <Button type="submit" className='w-full' variant="destructive">Generate Content Plan</Button>


         </div>

      </form>
   );
};
