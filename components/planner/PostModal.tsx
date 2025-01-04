"use client"
import { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import {
   Dialog,
   DialogContent,
   DialogHeader,
   DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import { ImagePlus, Twitter, Instagram, Facebook, Linkedin, Loader2, X } from 'lucide-react';
import { Platform, SocialPost } from '@/types';
import { PLATFORM_CONSTRAINTS } from '@/constants';
import { uploadToCloudinary } from '@/lib/cloudinary';
import { usePostStore } from '@/store/usePostStore';
import { Alert, AlertDescription } from '../ui/alert';

interface PostModalProps {
   post?: SocialPost;
   isOpen: boolean;
   onClose: () => void;
   onSave: (post: SocialPost) => void;
}




export function PostModal({ post, isOpen, onClose, onSave }: PostModalProps) {

   const [errors, setErrors] = useState<Record<string, string>>({});
   const [uploading, setUploading] = useState(false);
   const [uploadProgress, setUploadProgress] = useState<Record<string, number>>({});
   const [currentPost, setCurrentPost] = useState<Partial<SocialPost>>({
      title: '',
      content: '',
      platform: 'twitter',
      scheduledDate: new Date().toISOString().split('T')[0],
      scheduledTime: '09:00',
      hashtags: [],
      mediaUrls: [],
   });
   const validateForm = () => {
      const newErrors: Record<string, string> = {};
      const constraints = PLATFORM_CONSTRAINTS[currentPost.platform as Platform];

      if (!currentPost.title) {
         newErrors.title = 'Title is required';
      }

      if (!currentPost.content) {
         newErrors.content = 'Content is required';
      } else if (currentPost.content.length > constraints.maxLength) {
         newErrors.content = `Content exceeds maximum length of ${constraints.maxLength} characters`;
      }

      if (currentPost.mediaUrls && currentPost.mediaUrls.length > constraints.maxImages) {
         newErrors.media = `Maximum of ${constraints.maxImages} media files allowed`;
      }

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
   };
   const platformIcons = {
      twitter: <Twitter className="h-4 w-4" />,
      instagram: <Instagram className="h-4 w-4" />,
      facebook: <Facebook className="h-4 w-4" />,
      linkedin: <Linkedin className="h-4 w-4" />,
   };

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      if (validateForm()) {
         await onSave(currentPost as SocialPost);
         onClose();
      }
   };

   return (
      <Dialog open={isOpen} onOpenChange={onClose}>
         <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
               <DialogTitle>{post ? 'Edit Post' : 'Create New Post'}</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
               {/* Platform Selection */}
               <div className="space-y-2">
                  <Label htmlFor="platform">Platform</Label>
                  <Select
                     value={currentPost.platform}
                     onValueChange={(value: Platform) => {
                        setCurrentPost({ ...currentPost, platform: value });

                     }}
                  >
                     <SelectTrigger>
                        <SelectValue>
                           {currentPost.platform && (
                              <div className="flex items-center gap-2">
                                 {platformIcons[currentPost.platform as Platform]}
                                 <span className="capitalize">{currentPost.platform}</span>
                              </div>
                           )}
                        </SelectValue>
                     </SelectTrigger>
                     <SelectContent>
                        {Object.entries(platformIcons).map(([platform, icon]) => (
                           <SelectItem key={platform} value={platform}>
                              <div className="flex items-center gap-2">
                                 {icon}
                                 <span className="capitalize">{platform}</span>
                              </div>
                           </SelectItem>
                        ))}
                     </SelectContent>
                  </Select>
               </div>

               {/* Title */}
               <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                     id="title"
                     value={currentPost.title}
                     onChange={(e) => setCurrentPost({ ...currentPost, title: e.target.value })}
                     className={errors.title ? "border-red-500" : ""}
                  />
                  {errors.title && (
                     <p className="text-sm text-red-500">{errors.title}</p>
                  )}
               </div>

               {/* Scheduling */}
               <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                     <Label htmlFor="scheduledDate">Date</Label>
                     <Input
                        id="scheduledDate"
                        type="date"
                        value={currentPost.scheduledDate}
                        onChange={(e) => setCurrentPost({ ...currentPost, scheduledDate: e.target.value })}
                     />
                  </div>
                  <div className="space-y-2">
                     <Label htmlFor="scheduledTime">Time</Label>
                     <Input
                        id="scheduledTime"
                        type="time"
                        value={currentPost.scheduledTime}
                        onChange={(e) => setCurrentPost({ ...currentPost, scheduledTime: e.target.value })}
                     />
                  </div>
               </div>

               {/* Content */}
               <div className="space-y-2">
                  <Label htmlFor="content">Content</Label>
                  <Textarea
                     id="content"
                     value={currentPost.content}
                     onChange={(e) => setCurrentPost({ ...currentPost, content: e.target.value })}
                     rows={4}
                     className={errors.content ? "border-red-500" : ""}
                  />
                  <div className="flex justify-between text-sm">
                     <span className={currentPost.content.length > PLATFORM_CONSTRAINTS[currentPost.platform as Platform].maxLength ? "text-red-500" : "text-gray-500"}>
                        {currentPost.content.length} / {PLATFORM_CONSTRAINTS[currentPost.platform as Platform].maxLength}
                     </span>
                     {errors.content && (
                        <span className="text-red-500">{errors.content}</span>
                     )}
                  </div>
               </div>

               {/* Media Upload */}
               <div className="space-y-2">
                  <Label>Media</Label>
                  <div
                     // {...getRootProps()}
                     className="border-2 border-dashed rounded-lg p-4 text-center cursor-pointer hover:border-primary"
                  >
                     {/* <input /> */}
                     <ImagePlus className="mx-auto h-8 w-8 text-gray-400" />
                     <p className="mt-2">Drag & drop or click to upload media</p>
                     <p className="text-sm text-gray-500">
                        Supported formats: {PLATFORM_CONSTRAINTS[currentPost.platform as Platform].supportedFormats.join(', ')}
                     </p>
                  </div>
                  {uploading && (
                     <div className="flex items-center justify-center gap-2">
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span>Uploading...</span>
                     </div>
                  )}
                  {currentPost.mediaUrls && currentPost.mediaUrls.length > 0 && (
                     <div className="grid grid-cols-4 gap-2">
                        {currentPost.mediaUrls.map((url, index) => (
                           <div key={index} className="relative">
                              <img
                                 src={url}
                                 alt={`Upload ${index + 1}`}
                                 className="w-full h-24 object-cover rounded"
                              />
                              <button
                                 type="button"
                                 onClick={() => {
                                    const newUrls = [...currentPost.mediaUrls!];
                                    newUrls.splice(index, 1);
                                    setCurrentPost({ ...currentPost, mediaUrls: newUrls });
                                 }}
                                 className="absolute top-1 right-1 p-1 bg-red-500 rounded-full text-white"
                              >
                                 <X className="h-3 w-3" />
                              </button>
                           </div>
                        ))}
                     </div>
                  )}
               </div>

               {/* Hashtags */}
               <div className="space-y-2">
                  <Label htmlFor="hashtags">Hashtags</Label>
                  <Input
                     id="hashtags"
                     placeholder="Enter hashtags separated by spaces"
                     value={currentPost.hashtags?.join(' ')}
                     onChange={(e) => setCurrentPost({
                        ...currentPost,
                        hashtags: e.target.value.split(' ').filter(tag => tag.startsWith('#') || tag.startsWith('$')),
                     })}
                  />
               </div>

               {/* Error Alert */}
               {errors.submit && (
                  <Alert variant="destructive">
                     <AlertDescription>{errors.submit}</AlertDescription>
                  </Alert>
               )}

               {/* Actions */}
               <div className="flex justify-end space-x-2">
                  <Button variant="outline" onClick={onClose}>Cancel</Button>
                  <Button type="submit">Save</Button>
               </div>
            </form>
         </DialogContent>
      </Dialog>
   );
}
