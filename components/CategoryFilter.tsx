"use client";
import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useTemplate } from "@/context/TemplateContext";

interface CategoryFilterProps {
   categories: string[];
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ categories }) => {
   const { selectedCategory, setSelectedCategory } = useTemplate();

   const containerVariants = {
      hidden: { opacity: 0, y: -20 },
      visible: {
         opacity: 1,
         y: 0,
         transition: {
            duration: 0.2,
            when: "beforeChildren",
            staggerChildren: 0.1
         }
      }
   };

   const badgeVariants = {
      hidden: { opacity: 0, scale: 0.9 },
      visible: {
         opacity: 1,
         scale: 1,
         transition: {
            type: "spring",
            stiffness: 500,
            damping: 25
         }
      }
   };

   return (
      <div className="space-y-2 mt-4">
         <ScrollArea className="w-full whitespace-nowrap rounded-md">
            <motion.div
               className="flex items-center gap-2 p-1"
               variants={containerVariants}
               initial="hidden"
               animate="visible"
            >
               {["All", ...categories].map((category) => (
                  <motion.div
                     key={category}
                     variants={badgeVariants}
                     layout
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                  >
                     <Badge
                        variant={category === selectedCategory ? "default" : "outline"}
                        className={`
                           cursor-pointer select-none py-2 px-3
                           transition-colors duration-200
                           ${category === selectedCategory
                              ? "bg-primary text-foreground shadow-sm"
                              : "bg-card text-card-foreground hover:bg-accent hover:text-accent-foreground"
                           }
                        `}
                        onClick={() => setSelectedCategory(category)}
                     >
                        {category}
                     </Badge>
                  </motion.div>
               ))}
            </motion.div>
            <ScrollBar
               orientation="horizontal"
               className="bg-card/5 hover:bg-card/10 transition-colors"
            />
         </ScrollArea>
      </div>
   );
};

export default CategoryFilter;
