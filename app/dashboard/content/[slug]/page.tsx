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
      <div className="w-full">
         <div className="flex items-center justify-between mb-2">
            <Link href="/dashboard" className="flex items-center">
               <ArrowLeft className="h-6 w-6 mr-1" />
               <span className="text-lg">Back</span>
            </Link>
         </div>

         <div className="flex flex-col mt-10 md:px-10">
            <div className="flex items-center self-start gap-4 justify-center">
               <div className="flex flex-col">
                  <Sparkles className="w-8 h-8 text-accent animate-pulse" />{template?.name}
                  {/* <Image width={10} height={10} src={template?.} alt="" className="text-white" /> */}

                  <p className="mb-8 text-sm ">{template?.description}</p>
               </div>

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
      </div >
   );
};

export default TemplatePage;
