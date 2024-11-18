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
import { useGenerationSettings } from "@/context/GenerationSettingsContext";
import { ModelTypeEnum } from "@/types";
import { toast } from "sonner";


const TemplatePage = () => {
   const [generatedContent, setGeneratedContent] = useState("");
   const [isLoading, setIsLoading] = useState(false);

   const { settings, setSettings } = useGenerationSettings();

   const path = usePathname();
   const slug = path.split("/dashboard/content/").join("");
   // console.log(path, slug);

   const template = TEMPLATES.find((t) => t.slug === slug);
   // console.log(template);

   const generateContent = async (values: Record<string, any>) => {
      setIsLoading(true);
      console.log(values, settings, template?.aiPrompt, template?.id);
      try {
         const response = await fetch("/api/generate", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify({
               values,
               aiPrompt: template?.aiPrompt,
               settings,
               slug: template?.slug
            }),
         });

         if (!response.ok) {
            throw new Error("Failed to generate content");
         }
         if (response.status === 429) {
            toast.error("Rate Limit Exceeed", {
               description: "You can query up to 2 templates per minute"
            })
         }

         const data = await response.json();
         // console.log("dt", data)
         setGeneratedContent(data.formattedContent);
      } catch (error) {
         console.error("Error generating content:", error);
      } finally {
         setIsLoading(false);
      }
   };

   return (
      <div className="w-full max-w-9xl mx-auto px-3 sm:px-6 lg:px-8">
         <div className="py-6 space-y-6">
            {/* Back Button */}
            <Link
               href="/dashboard"
               className="inline-flex items-center gap-2 my-2 text-muted-foreground hover:text-primary transition-colors group"
            >
               <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1 text-accent" />
               <span className="text-sm font-medium">Back to Dashboard</span>
            </Link>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-200 pb-6">
               <div className="space-y-1 w-full">
                  <div className="flex items-center gap-3">
                     {/* Icon with subtle background styling */}
                     <div className="p-2 bg-primary/10 rounded-lg shadow-md">
                        <Sparkles className="w-6 h-6 text-primary" />
                     </div>
                     {/* Template Title */}
                     <h1 className="text-2xl font-semibold tracking-tight">{template?.name}</h1>

                     {/* Settings Button (Sheet Trigger) */}
                     <Sheet>
                        <SheetTrigger asChild>
                           <Button variant="destructive" size="icon" className="ml-auto sm:ml-0">
                              <Settings2 className="h-6 fill-white w-6  hover:text-accent transition-colors" />
                           </Button>
                        </SheetTrigger>
                        <SheetContent className="p-6 shadow-lg rounded-lg">
                           <SheetHeader>
                              <SheetTitle className="text-lg font-semibold text-primary">
                                 AI Generation Settings
                              </SheetTitle>
                              <SheetDescription className="text-sm text-muted-foreground mt-1">
                                 Customize how the AI generates your content
                              </SheetDescription>
                           </SheetHeader>

                           <div className="space-y-6 py-4">
                              {/* Model Selection */}
                              <div className="space-y-2">
                                 <label className="text-sm font-medium text-gray-700">AI Model</label>
                                 <Select
                                    value={settings.model}
                                    onValueChange={(value: string) =>
                                       setSettings({ ...settings, model: value as ModelTypeEnum })
                                    }
                                 >
                                    <SelectTrigger className="border-gray-300 hover:border-primary focus:ring-2 focus:ring-primary transition">
                                       <SelectValue placeholder="Select AI Model" />
                                    </SelectTrigger>
                                    <SelectContent>
                                       {["GROQ", "GEMINI", "OPENAI"].map((model) => (
                                          <SelectItem key={model} value={model}>
                                             {model}
                                          </SelectItem>
                                       ))}
                                    </SelectContent>
                                 </Select>
                              </div>

                              {/* Temperature Slider */}
                              <div className="space-y-2">
                                 <label className="text-sm font-medium text-gray-700">
                                    Temperature: <span className="font-semibold">{settings.temperature}</span>
                                 </label>
                                 <Slider
                                    value={[settings.temperature]}
                                    min={0}
                                    max={1}
                                    step={0.1}
                                    onValueChange={([value]) =>
                                       setSettings({ ...settings, temperature: value })
                                    }
                                    className="focus:ring-primary transition-transform"
                                 />
                              </div>

                              {/* Max Tokens Input */}
                              <div className="space-y-2">
                                 <label className="text-sm font-medium text-gray-700">Max Tokens</label>
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
                                    className="border-gray-300 hover:border-primary focus:ring-2 focus:ring-primary transition"
                                 />
                              </div>
                           </div>
                        </SheetContent>
                     </Sheet>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl mt-2">
                     {template?.description}
                  </p>
               </div>
            </div>

            {/* Dynamic Form and Editor */}
            <div className="flex flex-col justify-around lg:flex-row gap-6">
               <DynamicForm formFields={template?.formFields!} onSubmit={generateContent} />
               <div className=" h-full w-full mt-6">
                  <EnhancedEditor content={generatedContent} isLoading={isLoading} />
               </div>
            </div>
         </div>
      </div>
   );
};

export default TemplatePage;
