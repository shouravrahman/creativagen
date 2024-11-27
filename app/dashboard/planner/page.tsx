"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";

import { PlusCircle } from 'lucide-react';
import { DaySchedule, SocialPost } from '@/types';
import { CalendarGrid } from '@/components/calendar/CalendarGrid';
import { PostModal } from '@/components/planner/PostModal';

export default function PlannerPage() {
   const [schedules, setSchedules] = useState<DaySchedule[]>([]);
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [selectedPost, setSelectedPost] = useState<SocialPost | undefined>();

   const handleDragEnd = (result: any) => {
      if (!result.destination) return;

      const sourceDate = result.source.droppableId;
      const destDate = result.destination.droppableId;

      const newSchedules = [...schedules];
      const sourceSchedule = newSchedules.find(s => s.date === sourceDate);
      const destSchedule = newSchedules.find(s => s.date === destDate);

      if (!sourceSchedule) return;

      const [movedPost] = sourceSchedule.posts.splice(result.source.index, 1);
      movedPost.scheduledDate = destDate;

      if (!destSchedule) {
         newSchedules.push({
            date: destDate,
            posts: [movedPost],
         });
      } else {
         destSchedule.posts.splice(result.destination.index, 0, movedPost);
      }

      setSchedules(newSchedules.filter(s => s.posts.length > 0));
   };

   const handlePostClick = (post: SocialPost) => {
      setSelectedPost(post);
      setIsModalOpen(true);
   };

   const handleSavePost = (post: SocialPost) => {
      if (selectedPost) {
         // Edit existing post
         const newSchedules = schedules.map(schedule => ({
            ...schedule,
            posts: schedule.posts.map(p =>
               p.id === selectedPost.id ? { ...post, id: selectedPost.id } : p
            ),
         }));
         setSchedules(newSchedules);
      } else {
         // Create new post
         const newPost: SocialPost = {
            ...post,
            id: Math.random().toString(36).substr(2, 9),
            status: 'scheduled',
         };

        const existingSchedule = schedules.find(s => s.date === newPost.scheduledDate);
        if (existingSchedule) {
           existingSchedule.posts.push(newPost);
           setSchedules([...schedules]);
        } else {
           setSchedules([...schedules, {
              date: newPost.scheduledDate,
              posts: [newPost],
           }]);
        }
     }
  };

   return (
      <div className="px-4 mx-auto py-8">
        <div className="flex justify-between items-center mb-8">
           <h1 className="text-3xl font-bold">Social Media Planner</h1>
           <Button onClick={() => {
              setSelectedPost(undefined);
              setIsModalOpen(true);
           }}>
              <PlusCircle className="mr-2 h-4 w-4" />
              New Post
           </Button>
        </div>

        <CalendarGrid
           schedules={schedules}
           onDragEnd={handleDragEnd}
           onPostClick={handlePostClick}
        />

        <PostModal
           post={selectedPost}
           isOpen={isModalOpen}
           onClose={() => {
              setIsModalOpen(false);
              setSelectedPost(undefined);
           }}
           onSave={handleSavePost}
        />
     </div>
  );
}
