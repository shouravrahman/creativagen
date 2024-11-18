"use client"
import React, { useState } from 'react';

import CalendarComponent from './Calendar';
import ContentEditModal from './ContentEditModal';
import AIGenerateModal from './AIGenerateModal';
import { Content } from '../contentTypes';
const Demoevents: Content[] = [
   {
      id: '1',
      title: 'Blog Post on AI Trends',
      type: 'blogPost',
      start: new Date(2024, 10, 20), // Nov 20, 2024
      end: new Date(2024, 10, 20), // Nov 20, 2024
      posts: [
         {
            title: 'The Rise of AI in 2024',
            content: 'This blog post will explore the major AI trends expected in 2024, including advancements in natural language processing and autonomous systems.'
         }
      ]
   },
   {
      id: '2',
      title: 'Social Media Post for Product Launch',
      type: 'socialPost',
      start: new Date(2024, 10, 22), // Nov 22, 2024
      end: new Date(2024, 10, 22), // Nov 22, 2024
      posts: [
         {
            title: 'Exciting New Product Coming Soon!',
            content: 'Our new product is launching on Nov 22! Stay tuned for more details!'
         }
      ]
   },
   {
      id: '3',
      title: 'Weekly Email Newsletter',
      type: 'email',
      start: new Date(2024, 10, 23), // Nov 23, 2024
      end: new Date(2024, 10, 23), // Nov 23, 2024
      posts: [
         {
            title: 'November Newsletter: Top News and Updates',
            content: 'In this week\'s newsletter, we share the top stories and upcoming events. Don\'t miss out!'
         }
      ]
   },
   {
      id: '4',
      title: 'Video Post on Web Development Tips',
      type: 'video',
      start: new Date(2024, 10, 25), // Nov 25, 2024
      end: new Date(2024, 10, 25), // Nov 25, 2024
      posts: [
         {
            title: 'Top 5 Web Development Tips for 2024',
            content: 'In this video, we dive into the top 5 web development tips to stay ahead in 2024.'
         }
      ]
   }
];
const ContentPlanner: React.FC = () => {
   const [events, setEvents] = useState<Content[]>(Demoevents);
   const [isEditModalOpen, setIsEditModalOpen] = useState(false);
   const [selectedEvent, setSelectedEvent] = useState<Content | null>(null);
   const [isAIModalOpen, setIsAIModalOpen] = useState(false);

   const handleEventClick = (event: Content) => {
      setSelectedEvent(event);
      setIsEditModalOpen(true);
   };

   const handleSaveContent = (updatedContent: Content) => {
      setEvents((prev) => prev.map(event => event.id === updatedContent.id ? updatedContent : event));
   };

   const handleGenerateContent = (newContent: Content[]) => {
      setEvents(prev => [...prev, ...newContent]);
   };

   return (
      <div>
         {/* <button onClick={() => setIsAIModalOpen(true)}>Generate Content</button> */}
         <CalendarComponent events={events} onEventClick={handleEventClick} />
         <ContentEditModal
            isOpen={isEditModalOpen}
            onClose={() => setIsEditModalOpen(false)}
            content={selectedEvent!}
            onSave={handleSaveContent}
         />
         <AIGenerateModal
            isOpen={isAIModalOpen}
            onClose={() => setIsAIModalOpen(false)}
            onGenerate={handleGenerateContent}
         />
      </div>
   );
};

export default ContentPlanner;
