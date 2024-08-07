"use client";
import FormSection from "@/components/content/form-section.tsx";
import ResultSection from "@/components/content/result-section.tsx";
import { Button } from "@/components/ui/button.tsx";
import { TEMPLATES } from "@/constants.ts";
import { TEMPLATE } from "@/types.ts";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";
interface IContent {
  params: { slug: string };
}
const ContentPage = ({ params }: IContent) => {
  const selectedTemplate: TEMPLATE | undefined = TEMPLATES?.find(
    (item) => item.slug === params.slug
  );
  console.log(selectedTemplate);
  return (
    <div className="p-3">
      <Link href="/dashboard">
        <Button>
          <ArrowLeft />
          Back
        </Button>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-10">
        {/* form section */}
        <FormSection selectedTemplate={selectedTemplate} />

        {/* output section */}
        <ResultSection />
      </div>
    </div>
  );
};

export default ContentPage;
