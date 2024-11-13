"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useTemplate } from "@/context/TemplateContext";
import TemplateCard from "./TemplateCard";
import { Template } from "@/types";

const TemplateList = () => {
   const { templates } = useTemplate();

   const containerVariants = {
      hidden: { opacity: 0 },
      show: {
         opacity: 1,
         transition: {
            staggerChildren: 0.1
         }
      }
   };

   const itemVariants = {
      hidden: {
         opacity: 0,
         y: 20
      },
      show: {
         opacity: 1,
         y: 0,
         transition: {
            type: "spring",
            stiffness: 300,
            damping: 24
         }
      },
      exit: {
         opacity: 0,
         y: -20,
         transition: {
            duration: 0.2
         }
      }
   };

   return (
      <motion.div
         variants={containerVariants}
         initial="hidden"
         animate="show"
         className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
         <AnimatePresence mode="wait">
            {templates.length > 0 ? (
               templates.map((template: Template) => (
                  <motion.div
                     key={template.id}
                     variants={itemVariants}
                     layout
                     layoutId={template.id}
                  >
                     <TemplateCard template={template} />
                  </motion.div>
               ))
            ) : (
               <motion.p
                  variants={itemVariants}
                  className="text-center col-span-full"
               >
                  No templates found
               </motion.p>
            )}
         </AnimatePresence>
      </motion.div>
   );
};

export default TemplateList;
