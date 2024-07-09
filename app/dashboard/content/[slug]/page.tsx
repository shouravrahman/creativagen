import FormSection from "@/components/content/form-section.tsx";
import ResultSection from "@/components/content/result-section.tsx";
import { TEMPLATES } from "@/constants.ts";
import { TEMPLATE } from "@/types.ts";
import React from "react";
interface IContent {
  params: { slug: string };
}
const ContentPage = ({ params }: IContent) => {
  const selectedTemplate: TEMPLATE | undefined = TEMPLATES?.find(
    (item) => item.slug === params.slug
  );
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-10">
      {/* form section */}
      <FormSection selectedTemplate={selectedTemplate} />

      {/* output section */}
      <ResultSection />
    </div>
  );
};

export default ContentPage;
