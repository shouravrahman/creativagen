"use client";
import React, { createContext, ReactNode, useContext, useState, useEffect } from "react";
import { Template } from "@/types";
import { TEMPLATES } from "@/constants";

interface TemplateContextType {
   templates: Template[];
   searchText: string;
   selectedCategory: string;
   setSearchText: React.Dispatch<React.SetStateAction<string>>;
   setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}

const TemplateContext = createContext<TemplateContextType | undefined>(undefined);

export const TemplateProvider = ({ children }: { children: ReactNode }) => {
   const [searchText, setSearchText] = useState<string>("");
   const [selectedCategory, setSelectedCategory] = useState<string>("All");
   const [templates, setTemplates] = useState<Template[]>(TEMPLATES);

   // Filter templates based on search text and selected category
   useEffect(() => {
      let filteredTemplates = [...TEMPLATES];

      // Apply search filter
      if (searchText) {
         filteredTemplates = filteredTemplates.filter((template) => {
            const searchLower = searchText.toLowerCase();
            return (
               template.name.toLowerCase().includes(searchLower) ||
               template.tags.some(tag => tag.toLowerCase().includes(searchLower))
            );
         });
      }

      // Apply category filter
      if (selectedCategory && selectedCategory !== "All") {
         filteredTemplates = filteredTemplates.filter((template) =>
            template.category === selectedCategory
         );
      }

      setTemplates(filteredTemplates);
   }, [searchText, selectedCategory]);

   const contextValue = {
      templates,
      searchText,
      selectedCategory,
      setSearchText,
      setSelectedCategory,
   };

   return (
      <TemplateContext.Provider value={contextValue}>
         {children}
      </TemplateContext.Provider>
   );
};

export const useTemplate = (): TemplateContextType => {
   const context = useContext(TemplateContext);
   if (!context) {
      throw new Error("useTemplate must be used within a TemplateProvider");
   }
   return context;
};
