import { useState } from 'react';
import { DragDropContext, Droppable, DroppableProvided, DroppableStateSnapshot } from '@hello-pangea/dnd';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth } from 'date-fns';
import { Card } from '@/components/ui/card';
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
             const dateStr = format(day, 'yyyy-MM-dd');
             const daySchedule = schedules.find((s) => s.date === dateStr);

             return (
               <Droppable key={dateStr} droppableId={dateStr}>
                  {(provided: DroppableProvided, snapshot: DroppableStateSnapshot) => (
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
                        <div className="space-y-2">
                           {daySchedule?.posts.map((post, index) => (
                         <PostCard
                            key={post.id}
                            post={post}
                            index={index}
                            onClick={() => onPostClick(post)}
                         />
                      ))}
                        </div>
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
