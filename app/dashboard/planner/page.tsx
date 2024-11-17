"use client"
import "react-big-calendar/lib/css/react-big-calendar.css"
import React, { useState } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import moment from 'moment';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar as DatePickerCalendar } from "@/components/ui/calendar";
import { Slider } from "@/components/ui/slider";
import {
   Dialog,
   DialogContent,
   DialogHeader,
   DialogTitle,
   DialogFooter,
} from "@/components/ui/dialog";
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from "@/components/ui/select";
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Plus, Wand2 } from 'lucide-react';

// Date localizer setup
const locales = {
   'en-US': require('date-fns/locale/en-US'),
};

const localizer = dateFnsLocalizer({
   format,
   parse,
   startOfWeek,
   getDay,
   locales,
});

// Content Types and their colors
const contentTypes = {
   blogPost: { label: 'Blog Post', color: 'bg-blue-100 border-blue-500' },
   socialPost: { label: 'Social Post', color: 'bg-green-100 border-green-500' },
   video: { label: 'Video', color: 'bg-purple-100 border-purple-500' },
   email: { label: 'Email', color: 'bg-orange-100 border-orange-500' }
};

const ContentBlock = ({ content }) => (
   <div className={`h-full border-l-4 p-2 ${contentTypes[content.type].color}`}>
      <div className="flex flex-col gap-1">
         <span className="text-sm font-medium">{content.title}</span>
         <span className="text-xs">{contentTypes[content.type].label}</span>
         <div className="text-xs text-gray-600">
            {content.posts?.length || 0} items
         </div>
      </div>
   </div>
);

const ContentEditModal = ({ isOpen, onClose, content, onSave }) => {
   const [editedContent, setEditedContent] = useState(content);

   const handleSave = () => {
      onSave(editedContent);
      onClose();
   };

   return (
      <Dialog open={isOpen} onOpenChange={onClose}>
         <DialogContent className="max-w-2xl">
            <DialogHeader>
               <DialogTitle>Edit Content Block</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
               <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="title" className="text-right">Title</Label>
                  <Input
                     id="title"
                     value={editedContent?.title || ''}
                     onChange={(e) => setEditedContent(prev => ({ ...prev, title: e.target.value }))}
                     className="col-span-3"
                  />
               </div>
               <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="type" className="text-right">Type</Label>
                  <Select
                     value={editedContent?.type}
                     onValueChange={(value) => setEditedContent(prev => ({ ...prev, type: value }))}
                  >
                     <SelectTrigger className="col-span-3">
                        <SelectValue placeholder="Select content type" />
                     </SelectTrigger>
                     <SelectContent>
                        {Object.entries(contentTypes).map(([key, { label }]) => (
                           <SelectItem key={key} value={key}>{label}</SelectItem>
                        ))}
                     </SelectContent>
                  </Select>
               </div>
               <div className="grid grid-cols-4 items-start gap-4">
                  <Label htmlFor="description" className="text-right">Description</Label>
                  <Textarea
                     id="description"
                     value={editedContent?.description || ''}
                     onChange={(e) => setEditedContent(prev => ({ ...prev, description: e.target.value }))}
                     className="col-span-3"
                  />
               </div>
               {editedContent?.posts && (
                  <div className="grid grid-cols-4 items-start gap-4">
                     <Label className="text-right">Posts</Label>
                     <div className="col-span-3 space-y-2">
                        {editedContent.posts.map((post, index) => (
                           <div key={index} className="flex gap-2">
                              <Input
                                 value={post.title}
                                 onChange={(e) => {
                                    const newPosts = [...editedContent.posts];
                                    newPosts[index] = { ...post, title: e.target.value };
                                    setEditedContent(prev => ({ ...prev, posts: newPosts }));
                                 }}
                              />
                              <Button
                                 variant="outline"
                                 size="icon"
                                 onClick={() => {
                                    const newPosts = editedContent.posts.filter((_, i) => i !== index);
                                    setEditedContent(prev => ({ ...prev, posts: newPosts }));
                                 }}
                              >
                                 ×
                              </Button>
                           </div>
                        ))}
                        <Button
                           variant="outline"
                           size="sm"
                           onClick={() => {
                              const newPosts = [...(editedContent.posts || []), { title: '', content: '' }];
                              setEditedContent(prev => ({ ...prev, posts: newPosts }));
                           }}
                        >
                           <Plus className="h-4 w-4 mr-2" /> Add Post
                        </Button>
                     </div>
                  </div>
               )}
            </div>
            <DialogFooter>
               <Button variant="outline" onClick={onClose}>Cancel</Button>
               <Button onClick={handleSave}>Save changes</Button>
            </DialogFooter>
         </DialogContent>
      </Dialog>
   );
};

const AIGenerateModal = ({ isOpen, onClose, onGenerate }) => {
   const [prompt, setPrompt] = useState('');
   const [dateRange, setDateRange] = useState({ start: null, end: null });

   const handleGenerate = () => {
      // This is where you'd integrate with your AI service
      const sampleContent = [
         {
            title: 'AI Generated Content Week 1',
            type: 'blogPost',
            start: moment(dateRange.start).toDate(),
            end: moment(dateRange.start).add(1, 'days').toDate(),
            posts: [
               { title: 'Post 1', content: 'Content 1' },
               { title: 'Post 2', content: 'Content 2' }
            ]
         },
         // More generated content...
      ];

      onGenerate(sampleContent);
      onClose();
   };

   return (
     <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-2xl">
           <DialogHeader>
              <DialogTitle>Generate Content with AI</DialogTitle>
           </DialogHeader>
           <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-start gap-4">
                 <Label htmlFor="prompt" className="text-right">Prompt</Label>
                 <Textarea
                    id="prompt"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Describe the content you want to generate..."
                    className="col-span-3"
                 />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                 <Label className="text-right">Date Range</Label>
                 <div className="col-span-3">
                    <DatePickerCalendar
                       selected={dateRange.start}
                       onSelect={(date) => setDateRange(prev => ({ ...prev, start: date }))}
                       className="rounded-md border"
                    />
                  </div>
               </div>
            </div>
            <DialogFooter>
               <Button variant="outline" onClick={onClose}>Cancel</Button>
               <Button onClick={handleGenerate}>Generate Content</Button>
            </DialogFooter>
         </DialogContent>
      </Dialog>
   );
};

export default function ContentPlanner() {
   const [view, setView] = useState('week');
   const [date, setDate] = useState(new Date());
   const [zoom, setZoom] = useState([24]);
   const [events, setEvents] = useState([]);
   const [selectedEvent, setSelectedEvent] = useState(null);
   const [isEditModalOpen, setIsEditModalOpen] = useState(false);
   const [isAIModalOpen, setIsAIModalOpen] = useState(false);

   const handleEventClick = (event) => {
      setSelectedEvent(event);
      setIsEditModalOpen(true);
   };

   const handleSaveContent = (updatedContent) => {
      setEvents(prev => prev.map(event =>
         event.id === updatedContent.id ? updatedContent : event
      ));
   };

   const handleGenerateContent = (newContent) => {
      setEvents(prev => [...prev, ...newContent]);
   };

   const components = {
      event: (props) => (
         <div onClick={() => handleEventClick(props.event)}>
            <ContentBlock content={props.event} />
         </div>
      )
   };

   return (
     <div className="flex flex-col h-screen p-4 gap-4">
        {/* Toolbar */}
        <Card>
           <CardContent className="p-4">
              <div className="flex items-center justify-between">
                 <div className="flex items-center gap-4">
                    {/* View switching buttons */}
                    <div className="flex gap-2">
                       <Button
                          variant={view === 'day' ? 'default' : 'outline'}
                          onClick={() => setView('day')}
                       >
                          Day
                       </Button>
                       <Button
                          variant={view === 'week' ? 'default' : 'outline'}
                          onClick={() => setView('week')}
                       >
                          Week
                       </Button>
                       <Button
                          variant={view === 'month' ? 'default' : 'outline'}
                          onClick={() => setView('month')}
                       >
                          Month
                       </Button>
                    </div>

                    {/* Navigation controls */}
                    <div className="flex items-center gap-2">
                       <Button
                          variant="outline"
                          size="icon"
                          onClick={() => setDate(moment(date).subtract(1, view).toDate())}
                       >
                          <ChevronLeft className="h-4 w-4" />
                       </Button>
                       <Button
                          variant="outline"
                          onClick={() => setDate(new Date())}
                       >
                          Today
                       </Button>
                       <Button
                          variant="outline"
                          size="icon"
                          onClick={() => setDate(moment(date).add(1, view).toDate())}
                       >
                          <ChevronRight className="h-4 w-4" />
                       </Button>
                    </div>
                 </div>

                 <div className="flex items-center gap-4">
                    <Button
                       variant="outline"
                       onClick={() => setIsAIModalOpen(true)}
                    >
                       <Wand2 className="h-4 w-4 mr-2" />
                       Generate Content
                    </Button>

                    <div className="w-32">
                       <Slider
                          value={zoom}
                          onValueChange={setZoom}
                          min={16}
                          max={48}
                          step={8}
                       />
                    </div>
                 </div>
              </div>
           </CardContent>
        </Card>

        {/* Calendar */}
        <div className="flex-1 calendar-container" style={{ '--zoom-level': `${zoom[0]}px` }}>
           <Calendar
              localizer={localizer}
              events={events}
              view={view}
              date={date}
              onNavigate={date => setDate(date)}
              onView={view => setView(view)}
              components={components}
              step={10}
              timeslots={6}
              toolbar={false}
           />
        </div>

        {/* Modals */}
        <ContentEditModal
           isOpen={isEditModalOpen}
           onClose={() => setIsEditModalOpen(false)}
           content={selectedEvent}
           onSave={handleSaveContent}
        />

        <AIGenerateModal
           isOpen={isAIModalOpen}
           onClose={() => setIsAIModalOpen(false)}
           onGenerate={handleGenerateContent}
        />

        {/* Styles */}
        <style jsx global>{`
        .calendar-container {
          --time-slot-height: var(--zoom-level);
        }

        .rbc-header {
          color: white;
          font-size: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 36px;
          background: #1a365d;
        }

        .rbc-event {
          padding: 0 !important;
          border: none !important;
          width: 100% !important;
          z-index: 2;
          cursor: pointer;
        }

        .rbc-event:hover {
          opacity: 0.9;
        }

        .rbc-event-label {
          display: none !important;
        }

        .rbc-timeslot-group {
          min-height: var(--time-slot-height);
          background: #f8fafc;
        }

        .rbc-time-slot {
          position: relative;
        }

        .rbc-time-slot::after {
          content: '';
          position: absolute;
          width: 100%;
          border-top: 1px solid #e2e8f0;
        }

        .rbc-allday-cell {
          display: none;
        }

        .rbc-today {
          background-color: #f0fdf4 !important;
        }
      `}</style>
     </div>
  );
}
