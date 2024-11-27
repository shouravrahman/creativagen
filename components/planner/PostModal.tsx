"use client";

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import { Twitter, Instagram, Facebook, Linkedin } from 'lucide-react';
import { Platform, SocialPost } from '@/types';

interface PostModalProps {
   post?: SocialPost;
   isOpen: boolean;
   onClose: () => void;
   onSave: (post: SocialPost) => void;
}

export function PostModal({ post, isOpen, onClose, onSave }: PostModalProps) {
   const [formData, setFormData] = useState<Partial<SocialPost>>(post || {
      title: '',
      content: '',
      platform: 'twitter',
      scheduledDate: new Date().toISOString().split('T')[0],
      scheduledTime: '09:00',
      hashtags: [],
      mediaUrls: [],
   });

   const platformIcons = {
      twitter: <Twitter className="h-4 w-4" />,
      instagram: <Instagram className="h-4 w-4" />,
      facebook: <Facebook className="h-4 w-4" />,
      linkedin: <Linkedin className="h-4 w-4" />,
   };

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (formData.title && formData.content && formData.platform) {
         onSave(formData as SocialPost);
         onClose();
      }
   };

   return (
      <Dialog open={isOpen} onOpenChange={onClose}>
         <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
               <DialogTitle>{post ? 'Edit Post' : 'Create New Post'}</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
               <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                     id="title"
                     value={formData.title}
                     onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  />
               </div>

               <div className="space-y-2">
                  <Label htmlFor="platform">Platform</Label>
                  <Select
                     value={formData.platform}
                     onValueChange={(value: Platform) => setFormData({ ...formData, platform: value })}
                  >
                     <SelectTrigger>
                        <SelectValue placeholder="Select platform">
                           {formData.platform && (
                              <div className="flex items-center gap-2">
                                 {platformIcons[formData.platform]}
                                 <span className="capitalize">{formData.platform}</span>
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

               <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                     <Label htmlFor="scheduledDate">Date</Label>
                     <Input
                        id="scheduledDate"
                        type="date"
                        value={formData.scheduledDate}
                        onChange={(e) => setFormData({ ...formData, scheduledDate: e.target.value })}
                     />
                  </div>
                  <div className="space-y-2">
                     <Label htmlFor="scheduledTime">Time</Label>
                     <Input
                        id="scheduledTime"
                        type="time"
                        value={formData.scheduledTime}
                        onChange={(e) => setFormData({ ...formData, scheduledTime: e.target.value })}
                     />
                  </div>
               </div>

               <div className="space-y-2">
                  <Label htmlFor="content">Content</Label>
                  <Textarea
                     id="content"
                     value={formData.content}
                     onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                     rows={4}
                  />
               </div>

               <div className="space-y-2">
                  <Label htmlFor="hashtags">Hashtags (comma-separated)</Label>
                  <Input
                     id="hashtags"
                     value={formData.hashtags?.join(', ')}
                     onChange={(e) => setFormData({ ...formData, hashtags: e.target.value.split(',').map(tag => tag.trim()) })}
                  />
               </div>

               <div className="space-y-2">
                  <Label htmlFor="mediaUrls">Media URLs (comma-separated)</Label>
                  <Input
                     id="mediaUrls"
                     value={formData.mediaUrls?.join(', ')}
                     onChange={(e) => setFormData({ ...formData, mediaUrls: e.target.value.split(',').map(url => url.trim()) })}
                  />
               </div>

               <div className="flex justify-end space-x-2">
                  <Button variant="outline" onClick={onClose}>Cancel</Button>
                  <Button type="submit">Save</Button>
               </div>
            </form>
         </DialogContent>
      </Dialog>
   );
}
