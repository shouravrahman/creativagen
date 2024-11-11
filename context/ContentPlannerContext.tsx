// ContentPlannerContext.tsx
import React, { createContext, ReactNode, useState, useEffect } from 'react';
import axios from 'axios';

interface ContentItem {
   id: string;
   title: string;
   description: string;
   platform: string;
   contentType: string;
   date: string;
   hashtags?: string[];
   mentions?: string[];
   images?: string[];
   videos?: string[];
   callToAction?: string;
   utmSource?: string;
   utmMedium?: string;
   utmCampaign?: string;
}

interface ContentPlannerContextType {
   contentItems: ContentItem[];
   platformFilter: string;
   contentTypeFilter: string;
   currentDate: Date;
   addContentItem: (newContent: ContentItem) => void;
   updateContentItem: (updatedContent: ContentItem) => void;
   deleteContentItem: (id: string) => void;
   setPlatformFilter: (filter: string) => void;
   setContentTypeFilter: (filter: string) => void;
   setCurrentDate: (date: Date) => void;
}

export const ContentPlannerContext = createContext<ContentPlannerContextType | null>(null);

export const ContentPlannerProvider = ({ children }: { children: ReactNode }) => {
   const [contentItems, setContentItems] = useState<ContentItem[]>([]);
   const [platformFilter, setPlatformFilter] = useState<string>('all');
   const [contentTypeFilter, setContentTypeFilter] = useState<string>('all');
   const [currentDate, setCurrentDate] = useState<Date>(new Date());

   useEffect(() => {
      const fetchContentPlan = async () => {
         try {
            const response = await axios.get('/api/content-plan');
            setContentItems(response.data);
         } catch (error) {
            console.error('Error fetching content plan:', error);
         }
      };
      fetchContentPlan();
   }, []);

   const addContentItem = async (newContent: ContentItem) => {
      try {
         const response = await axios.post('/api/content-plan', newContent);
         setContentItems((prev) => [...prev, response.data]);
      } catch (error) {
         console.error('Error saving content item:', error);
      }
   };

   const updateContentItem = async (updatedContent: ContentItem) => {
      try {
         await axios.put(`/api/content-plan/${updatedContent.id}`, updatedContent);
         setContentItems((prev) =>
            prev.map((item) => (item.id === updatedContent.id ? updatedContent : item))
         );
      } catch (error) {
         console.error('Error updating content item:', error);
      }
   };

   const deleteContentItem = async (id: string) => {
      try {
         await axios.delete(`/api/content-plan/${id}`);
         setContentItems((prev) => prev.filter((item) => item.id !== id));
      } catch (error) {
         console.error('Error deleting content item:', error);
      }
   };

   return (
      <ContentPlannerContext.Provider
         value={{
            contentItems,
            platformFilter,
            contentTypeFilter,
            currentDate,
            addContentItem,
            updateContentItem,
            deleteContentItem,
            setPlatformFilter,
            setContentTypeFilter,
            setCurrentDate,
         }}
      >
         {children}
      </ContentPlannerContext.Provider>
   );
};
