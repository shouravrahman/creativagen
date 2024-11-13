"use client"
import React from 'react';
import { FormField as FormFieldWrapper, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";
import { InfoIcon } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { UseFormReturn } from 'react-hook-form';

const CommonFormOptions = ({ form }: { form: UseFormReturn<any> }) => {
   return (
      <Card className="p-6 space-y-6">
         <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Generation Options</h3>
         </div>
         <Separator />

         <div className="space-y-4">
            <FormFieldWrapper
               control={form.control}
               name="includeWebSearch"
               render={({ field }) => (
                  <FormItem className="flex justify-between items-center">
                     <div className="space-y-0.5">
                        <FormLabel className="text-base">
                           Web Search
                           <Tooltip>
                              <TooltipTrigger>
                                 <InfoIcon className="w-4 h-4 inline-block ml-2" />
                              </TooltipTrigger>
                              <TooltipContent>
                                 Include relevant information from web searches
                              </TooltipContent>
                           </Tooltip>
                        </FormLabel>
                     </div>
                     <FormControl>
                        <Switch
                           checked={field.value}
                           onCheckedChange={field.onChange}
                        />
                     </FormControl>
                  </FormItem>
               )}
            />

            <FormFieldWrapper
               control={form.control}
               name="includeLinks"
               render={({ field }) => (
                  <FormItem className="flex justify-between items-center">
                     <div className="space-y-0.5">
                        <FormLabel className="text-base">
                           Include References
                           <Tooltip>
                              <TooltipTrigger>
                                 <InfoIcon className="w-4 h-4 inline-block ml-2" />
                              </TooltipTrigger>
                              <TooltipContent>
                                 Add source links and references to the generated content
                              </TooltipContent>
                           </Tooltip>
                        </FormLabel>
                     </div>
                     <FormControl>
                        <Switch
                           checked={field.value}
                           onCheckedChange={field.onChange}
                        />
                     </FormControl>
                  </FormItem>
               )}
            />

            <FormFieldWrapper
               control={form.control}
               name="useFormalTone"
               render={({ field }) => (
                  <FormItem className="flex justify-between items-center">
                     <div className="space-y-0.5">
                        <FormLabel className="text-base">
                           Formal Tone
                           <Tooltip>
                              <TooltipTrigger>
                                 <InfoIcon className="w-4 h-4 inline-block ml-2" />
                              </TooltipTrigger>
                              <TooltipContent>
                                 Use formal language and professional tone
                              </TooltipContent>
                           </Tooltip>
                        </FormLabel>
                     </div>
                     <FormControl>
                        <Switch
                           checked={field.value}
                           onCheckedChange={field.onChange}
                        />
                     </FormControl>
                  </FormItem>
               )}
            />

            <FormFieldWrapper
               control={form.control}
               name="generateMultipleVariants"
               render={({ field }) => (
                  <FormItem className="flex justify-between items-center">
                     <div className="space-y-0.5">
                        <FormLabel className="text-base">
                           Multiple Variants
                           <Tooltip>
                              <TooltipTrigger>
                                 <InfoIcon className="w-4 h-4 inline-block ml-2" />
                              </TooltipTrigger>
                              <TooltipContent>
                                 Generate multiple versions of the content
                              </TooltipContent>
                           </Tooltip>
                        </FormLabel>
                     </div>
                     <FormControl>
                        <Switch
                           checked={field.value}
                           onCheckedChange={field.onChange}
                        />
                     </FormControl>
                  </FormItem>
               )}
            />
         </div>
      </Card>
   );
};

export default CommonFormOptions;
