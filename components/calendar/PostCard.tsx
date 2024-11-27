"use client";

import { SocialPost } from '@/types';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Twitter, Instagram, Facebook, Linkedin, Clock } from 'lucide-react';

interface PostCardProps {
   post: SocialPost;
   onClick: () => void;
   dragHandleProps?: any;
}

export function PostCard({ post, onClick, ...dragHandleProps }: PostCardProps) {
   const PlatformIcon = {
      twitter: Twitter,
      instagram: Instagram,
      facebook: Facebook,
      linkedin: Linkedin,
   }[post.platform];

   const platformStyles = {
      twitter: 'bg-sky-100 text-sky-800 hover:bg-sky-200',
      instagram: 'bg-pink-100 text-pink-800 hover:bg-pink-200',
      facebook: 'bg-blue-100 text-blue-800 hover:bg-blue-200',
      linkedin: 'bg-indigo-100 text-indigo-800 hover:bg-indigo-200',
   }[post.platform];

   const scheduledTime = new Date(post.scheduledTime || post.scheduledDate);

   return (
      <div
         onClick={onClick}
         className={cn(
            "group relative mb-2 cursor-pointer transition-all",
            dragHandleProps ? "hover:scale-102" : ""
         )}
         {...dragHandleProps}
      >
         <Badge
            variant="secondary"
            className={cn(
               "w-full flex items-center gap-1.5 py-1.5 px-2",
               platformStyles
            )}
         >
            <PlatformIcon className="h-3 w-3" />
            <span className="truncate flex-1 text-left">{post.title}</span>
            {post.scheduledTime && (
               <Clock className="h-3 w-3 opacity-50" />
            )}
         </Badge>
      </div>
   );
}
