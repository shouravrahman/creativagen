import { Draggable } from '@hello-pangea/dnd';
import { SocialPost } from '@/types';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Twitter, Instagram, Facebook, Linkedin, Clock } from 'lucide-react';

interface PostCardProps {
   post: SocialPost;
   index: number;
   onClick: () => void;
}

export function PostCard({ post, index, onClick }: PostCardProps) {
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

   return (
     <Draggable draggableId={post.id} index={index}>
        {(provided, snapshot) => (
           <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              onClick={onClick}
              className={cn(
             "group relative cursor-pointer transition-all",
             snapshot.isDragging && "scale-105"
          )}
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
        )}
     </Draggable>
  );
}
