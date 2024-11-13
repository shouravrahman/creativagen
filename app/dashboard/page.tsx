"use client";


import TemplateList from "@/components/TemplateList";
import SearchInput from "@/components/search-section/Search";
import CategoryFilter from "@/components/CategoryFilter";

import { useTemplate } from "@/context/TemplateContext";

export default function Dashboard() {
   const { templates, searchText, selectedCategory, setSearchText, setSelectedCategory } = useTemplate();
   // const [content, setContent] = useState<string>("");

   // const handleSaveContent = (newContent: string) => {
   //    setContent(newContent);
   // };

   // const handleSchedulePost = async (content: string, scheduledTime: Date) => {
   //    try {
   //       await fetch("/api/schedule", {
   //          method: "POST",
   //          body: JSON.stringify({ content, scheduledTime }),
   //          headers: { "Content-Type": "application/json" },
   //       });
   //    } catch (error) {
   //       console.error("Error scheduling post:", error);
   //    }
   // };

   return (
      <div>
         <div className="mb-8 px-4">
            <CategoryFilter
               categories={[...new Set(templates.map((t) => t.category))]}

            />

         </div>
         <div className="px-4">
            <TemplateList />
         </div>
      </div>
   );
}
