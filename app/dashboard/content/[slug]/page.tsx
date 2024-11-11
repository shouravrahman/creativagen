"use client";

import { useState } from "react";


import { ArrowLeft, Settings2, Sparkles } from "lucide-react";
import Link from "next/link";
import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from "@/components/ui/select";
import {
   Sheet,
   SheetContent,
   SheetDescription,
   SheetHeader,
   SheetTitle,
   SheetTrigger,
} from "@/components/ui/sheet";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { TEMPLATES } from "@/constants";
import { usePathname } from "next/navigation";
import DynamicForm from "@/components/DynamicForm";
import EnhancedEditor from "@/components/content/CustomEditor";
import { Badge } from "@/components/ui/badge";

interface GenerationSettings {
   model?: any;
   temperature: number;
   maxTokens: number;
}

const TemplatePage = () => {
   const [generatedContent, setGeneratedContent] = useState("");
   const [isLoading, setIsLoading] = useState(false);
   const [settings, setSettings] = useState<GenerationSettings>({
      // model: template?.aiModel,
      temperature: 0.7,
      maxTokens: 2000,
   });

   const path = usePathname()
   const slug = path.split("/dashboard/content/").join("")
   console.log(path, slug)
   // console.log(params.getAll("q"))
   const template = TEMPLATES.find((t) => t.slug === slug)
   console.log(template)
   const generateContent = async (values: Record<string, any>) => {
      setIsLoading(true);
      console.log(values)
      // try {
      //    const response = await fetch("/api/generate", {
      //       method: "POST",
      //       headers: {
      //          "Content-Type": "application/json",
      //       },
      //       body: JSON.stringify({
      //          values,
      //          templateId: template?.id,
      //          settings,
      //       }),
      //    });

      //    if (!response.ok) {
      //       throw new Error("Failed to generate content");
      //    }

      //    const data = await response.json();
      //    setGeneratedContent(data.content);
      // } catch (error) {
      //    console.error("Error generating content:", error);
      // } finally {
      //    setIsLoading(false);
      // }
   };

   return (



      <div className="w-full max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="py-6 space-y-6">
            {/* Back Button */}
            <Link
               href="/dashboard"
               className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
            >
               <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
               <span className="text-sm font-medium">Back to Dashboard</span>
            </Link>

            {/* Title and Settings Section */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-6">
               <div className="space-y-1">
                  <div className="flex items-center gap-3">
                     <div className="p-2 bg-primary/10 rounded-lg">
                        <Sparkles className="w-6 h-6 text-primary" />
                     </div>
                     <h1 className="text-2xl font-semibold tracking-tight">{template?.name}</h1>
                     <Sheet>
                  <SheetTrigger asChild>
                     <Button variant="outline" size="icon">
                        <Settings2 className="h-4 w-4" />
                     </Button>
                  </SheetTrigger>
                  <SheetContent>
                     <SheetHeader>
                        <SheetTitle>AI Generation Settings</SheetTitle>
                        <SheetDescription>
                           Customize how the AI generates your content
                        </SheetDescription>
                     </SheetHeader>
                     <div className="space-y-6 py-4">
                        <div className="space-y-2">
                           <label className="text-sm font-medium">AI Model</label>
                           <Select
                              value={settings.model}
                              onValueChange={(value: string) =>
                                 setSettings({ ...settings, model: value })
                              }
                           >
                              <SelectTrigger>
                                 <SelectValue placeholder="Select AI Model" />
                              </SelectTrigger>
                              <SelectContent>
                                 {Object.values({
                                    GPT4: "GPT4",
                                    GROQ: "GROQ",
                                    GEMINI: "GEMINI",
                                    CLAUDE: "CLAUDE"
                                 }).map((model) => (
                                    <SelectItem key={model} value={model}>
                                       {model}
                                    </SelectItem>
                                 ))}
                              </SelectContent>
                           </Select>
                        </div>
                        <div className="space-y-2">
                           <label className="text-sm font-medium">
                              Temperature: {settings.temperature}
                           </label>
                           <Slider
                              value={[settings.temperature]}
                              min={0}
                              max={1}
                              step={0.1}
                              onValueChange={([value]) =>
                                 setSettings({ ...settings, temperature: value })
                              }
                           />
                        </div>
                        <div className="space-y-2">
                           <label className="text-sm font-medium">Max Tokens</label>
                           <Input
                              type="number"
                              value={settings.maxTokens}
                              onChange={(e) =>
                                 setSettings({
                                    ...settings,
                                    maxTokens: parseInt(e.target.value),
                                 })
                              }
                              min={1}
                              max={4000}
                           />
                        </div>
                     </div>
                  </SheetContent>
               </Sheet>
            </div>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl">
                     {template?.description}
                  </p>
               </div>
            </div>
            <div className="flex flex-col justify-around md:flex-row gap-6  ">

               <DynamicForm
                  formFields={template?.formFields!}
                  onSubmit={generateContent}
               />


               <div className=" h-full w-full mt-6">
                  <EnhancedEditor
                     content={generatedContent}
                  //   templateId={template.id}
                  />

               </div>
            </div>
         </div>
      </div>
   );
};

export default TemplatePage;
