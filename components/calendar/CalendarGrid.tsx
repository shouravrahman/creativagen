"use client";

import { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth } from 'date-fns';
import { Card } from "@/components/ui/card";

import { cn } from '@/lib/utils';
import { DaySchedule, SocialPost } from '@/types';
import { PostCard } from './PostCard';
import { MonthNavigation } from './MonthNavigation';


interface CalendarGridProps {
   schedules: DaySchedule[];
   onDragEnd: (result: any) => void;
   onPostClick: (post: SocialPost) => void;
}

export function CalendarGrid({ schedules, onDragEnd, onPostClick }: CalendarGridProps) {
   const [currentDate, setCurrentDate] = useState(new Date());

   const days = eachDayOfInterval({
      start: startOfMonth(currentDate),
      end: endOfMonth(currentDate),
   });

   return (
      <div className="space-y-6">
         <MonthNavigation
            currentDate={currentDate}
            onMonthChange={setCurrentDate}
         />

         <DragDropContext onDragEnd={onDragEnd}>
            <div className="grid grid-cols-7 gap-4">
               {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                  <div key={day} className="text-center font-semibold py-2">
                     {day}
                  </div>
               ))}

               {days.map((day) => {
                  const daySchedule = schedules.find(
                     (s) => s.date === format(day, 'yyyy-MM-dd')
                  );

                  return (
                     <Droppable key={format(day, 'yyyy-MM-dd')} droppableId={format(day, 'yyyy-MM-dd')}>
                        {(provided, snapshot) => (
                           <Card
                              ref={provided.innerRef}
                              {...provided.droppableProps}
                              className={cn(
                                 "min-h-[120px] p-2",
                                 snapshot.isDraggingOver && "bg-muted",
                                 !isSameMonth(day, currentDate) && "opacity-50"
                              )}
                           >
                              <div className="text-right text-sm mb-2">
                                 {format(day, 'd')}
                              </div>

                              {daySchedule?.posts.map((post, index) => (
                                 <Draggable
                                    key={post.id}
                                    draggableId={post.id}
                                    index={index}
                                 >
                                    {(provided) => (
                                       <PostCard
                                          post={post}
                                          onClick={() => onPostClick(post)}
                                          {...provided.draggableProps}
                                          {...provided.dragHandleProps}
                                       />
                                    )}
                                 </Draggable>
                              ))}
                              {provided.placeholder}
                           </Card>
                        )}
                     </Droppable>
                  );
               })}
            </div>
         </DragDropContext>
      </div>
   );
}
