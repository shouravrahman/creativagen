import { DynamicForm, FormConfig } from "@/components/DynamicForm"


const blogGeneratorConfig: FormConfig = {
   name: "AI Blog Writer Tool",
   description: "Generate high-quality, SEO-optimized blogs on various topics. Enhance your web presence with content that engages and informs your audience.",
   formFields: [
      {
         label: "Blog Title",
         field: "title",
         name: "title",
         required: true,
         placeholder: "Enter the title of your blog",
         type: "text"
      },
      {
         label: "Blog Topic",
         field: "topic",
         name: "topic",
         required: true,
         placeholder: "Enter the main topic of your blog",
         type: "text"
      },
      {
         label: "Content Length",
         field: "length",
         name: "length",
         required: true,
         placeholder: "Specify the desired length of the blog (e.g., 500-1000 words)",
         type: "text"
      },
      {
         label: "Target Keywords",
         field: "keywords",
         name: "keywords",
         required: false,
         placeholder: "Enter keywords for SEO optimization (comma-separated)",
         type: "text"
      },
      {
         label: "Writing Tone",
         field: "tone",
         name: "tone",
         required: false,
         options: [
            { label: "Professional", value: "professional" },
            { label: "Casual", value: "casual" },
            { label: "Enthusiastic", value: "enthusiastic" },
            { label: "Informative", value: "informative" }
         ],
         type: "select"
      },
      {
         label: "Include Images",
         field: "includeImages",
         name: "includeImages",
         required: false,
         value: false,
         type: "switch"
      },
      {
         label: "Additional Notes",
         field: "notes",
         name: "notes",
         required: false,
         placeholder: "Any additional information or specific instructions",
         type: "textarea"
      }
   ],
};


export default function BlogGeneratorPage() {
   return (
      <div className="container mx-auto py-10">
         <h1 className="text-2xl font-bold mb-5">{blogGeneratorConfig.name}</h1>
         <p className="mb-8">{blogGeneratorConfig.description}</p>
         <DynamicForm config={blogGeneratorConfig} />
      </div>
   )
}
