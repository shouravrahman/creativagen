"use client"


import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { createSchema } from "@/lib/utils";
import { FormField } from "@/types";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import {
   Form,
   FormControl,
   FormDescription,
   FormField as FormFieldWrapper,
   FormItem,
   FormLabel,
   FormMessage,
} from "@/components/ui/form";
import { Card, CardContent } from "@/components/ui/card";

import { useState } from "react";

interface DynamicFormProps {
   formFields: FormField[];
   onSubmit: (data: Record<string, any>) => void;
   initialEditorContent?: string;
}

const DynamicForm: React.FC<DynamicFormProps> = ({
   formFields,
   onSubmit,
   initialEditorContent = ""
}) => {
   const [editorContent, setEditorContent] = useState(initialEditorContent);


   // const formSchema = z.object(schemaFields);

   const form = useForm({
   // resolver: zodResolver(formSchema),
	});

   const handleSubmit = async (values: any) => {
      await onSubmit(values);
	};


   return (
      <div className="flex  lg:min-w-[40%] gap-6 mt-6  ">
         <Card className="p-6 w-full">
            <Form {...form}>
               <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6 ">
                  {formFields?.sort((a, b) => a.order - b.order).map((field) => (
                     <FormFieldWrapper
                        key={field.name}
                        control={form.control}
                        name={field.name}
                        render={({ field: formField }) => (
                           <FormItem>
                              <FormLabel>{field.label}</FormLabel>
                              <FormControl>
                                 {(() => {
                                    switch (field.type) {
                                       case "text":
                                          return (
                                             <Input
                                                {...formField}
                                                placeholder={field.helpText}
                                                required
                                             />
                                          );
                                       case "textarea":
                                          return (
                                             <Textarea
                                                {...formField}
                                                placeholder={field.helpText}
                                                className="min-h-[100px]"
                                                required
                                             />
                                          );
                                       case "select":
                                          return (
                                             <Select
                                                onValueChange={formField.onChange}
                                                defaultValue={formField.value}
                                                required
                                             >
                                                <SelectTrigger>
                                                   <SelectValue placeholder={field.helpText || "Select an option"} />
                                                </SelectTrigger>
                                                <SelectContent>
                                                   {field.options?.map((option) => (
                                                      <SelectItem
                                                         key={option.value}
                                                         value={option.value}
                                                      >
                                                         {option.label}
                                                      </SelectItem>
                                                   ))}
                                                </SelectContent>
                                             </Select>
                                          );
                                       case "radio":
                                          return (
                                             <RadioGroup
                                                onValueChange={formField.onChange}
                                                defaultValue={formField.value}
                                                className="flex flex-col space-y-1"
                                                required
                                             >
                                                {field.options?.map((option) => (
                                                   <div key={option.value} className="flex items-center space-x-2">
                                                      <RadioGroupItem value={option.value} id={option.value} />
                                                      <label
                                                         htmlFor={option.value}
                                                         className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                      >
                                                         {option.label}
                                                      </label>
                                                   </div>
                                                ))}
                                             </RadioGroup>
                                          );
                                       case "slider":
                                          return (
                                             <div className="space-y-4">
                                                <Slider

                                                   onValueChange={(value) => formField.onChange(value[0])}
                                                   defaultValue={[formField.value]}
                                                   min={field.min || 0}
                                                   max={field.max || 100}
                                                   step={field.step || 1}
                                                   className="w-full"
                                                />
                                                <div className="text-xs text-muted-foreground text-right">
                                                   Value: {formField.value}
                                                </div>
                                             </div>
                                          );
                                       case "number":
                                          return (
                                             <Input
                                                required
                                                type="number"
                                                {...formField}
                                                placeholder={field.helpText}
                                                min={field.min}
                                                max={field.max}
                                                step={field.step}
                                             />
                                          );
                                       default:
                                          return null;
                                    }
                                 })()}
                              </FormControl>
                              {field.helpText && (
                                 <FormDescription>{field.helpText}</FormDescription>
                              )}
                              <FormMessage />
                           </FormItem>
                        )}
                     />
                  ))}
                  <Button type="submit" className="bg-accent text-xl font-semibold w-full">Generate Content</Button>
               </form>
            </Form>
         </Card>
      </div>
   );
};

export default DynamicForm;
