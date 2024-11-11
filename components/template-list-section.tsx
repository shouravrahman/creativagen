"use client";

import { useState, useEffect } from "react";

import { useRouter } from "next/navigation";
import { Template } from "@/types";
import TemplateCard from "./TemplateCard";


interface TemplateListProps {
   searchInput: string;
   initialTemplates: Template[];
   onFavoriteToggle?: (templateId: string) => Promise<void>;
}

const TemplateList = ({ searchInput, initialTemplates, onFavoriteToggle }: TemplateListProps) => {
   const [templates, setTemplates] = useState<Template[]>(initialTemplates);
   const router = useRouter();

   useEffect(() => {
      if (searchInput) {
         const filteredData = initialTemplates.filter(
            (template) =>
               template.name.toLowerCase().includes(searchInput.toLowerCase()) ||
               template?.tags.some(tag => tag.toLowerCase().includes(searchInput.toLowerCase()))
         );
         setTemplates(filteredData);
      } else {
         setTemplates(initialTemplates);
      }
   }, [searchInput, initialTemplates]);


   return (
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
         {templates?.map((template, idx) => (

            <TemplateCard template={template} onToggleFavorite={() => { return null }} key={idx} />
         ))}
      </div>
   );
};

export default TemplateList;
