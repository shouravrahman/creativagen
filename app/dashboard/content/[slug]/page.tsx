"use client";
import FormSection from "@/components/content/FormSection";
import ResultSection from "@/components/content/result-section.tsx";
import { DynamicForm } from "@/components/DynamicForm";
import { Heading } from "@/components/heading";
import { Button } from "@/components/ui/button.tsx";
import { TEMPLATES } from "@/constants.ts";
import { TEMPLATE } from "@/types.ts";
import { ArrowLeft, BookAIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
interface Content {
   params: { slug: string };
}
const ContentPage = ({ params }: Content) => {
   const selectedTemplate: TEMPLATE = TEMPLATES?.find(
      (item) => item.slug === params.slug
   );
   console.log(selectedTemplate);
   return (
      <div className="p-3">
         <Link href="/dashboard" className="flex items-center ">
            <ArrowLeft className="h-6 w-6 mr-1" />
            <span className="text-lg">Back</span>
         </Link>
         <div className="grid grid-cols-1 mt-10 md:px-10">
            {/* <Heading title={selectedTemplate?.name} description={selectedTemplate?.description} icon={<BookAIcon />} /> */}
            <h1 className="text-2xl font-bold mb-5">{selectedTemplate?.name}</h1>
            <p className="mb-8">{selectedTemplate?.description}</p>
            <DynamicForm config={selectedTemplate} />
            {/* output section */}
            {/* <ResultSection /> */}
         </div>
      </div>
   );
};

export default ContentPage;
