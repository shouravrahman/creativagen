"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { DynamicFormField } from "./FormField"
import { randomUUID } from "crypto"
import { v4 as uuidv4 } from 'uuid';
import { FormConfig } from "@/types"


export function DynamicForm({ config }: { config: FormConfig }) {

   // Dynamically generate Zod schema based on form fields
   const schemaFields = config.formFields.reduce((acc, field) => {
      let fieldSchema;
      switch (field.field) {
         case 'input':
            fieldSchema = field.type === 'number' ? z.number() : z.string();
            break;
         case 'textarea':
            fieldSchema = z.string();
            break;
         case 'select':
         case 'radiogroup':
            fieldSchema = z.enum(field.options!.map(o => o.value) as [string, ...string[]]);
            break;
         case 'switch':
            fieldSchema = z.boolean();
            break;
         default:
            fieldSchema = z.string();
      }
      if (!field.required) {
         fieldSchema = fieldSchema.optional();
      }
      acc[field.name] = fieldSchema;
      return acc;
   }, {} as Record<string, z.ZodTypeAny>);

   const formSchema = z.object(schemaFields);

   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: config.formFields.reduce((acc, field) => {
         acc[field.name] = field.value !== undefined ? field.value : '';
         return acc;
      }, {} as Record<string, any>),
   });

   function onSubmit(values: z.infer<typeof formSchema>) {
      console.log(values);
   }

   return (
      <Form {...form}>
         <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               {config.formFields.map((fieldConfig) => (
                  <DynamicFormField key={uuidv4()} config={fieldConfig} />
               ))}
            </div>
            <Button type="submit" variant={"accent"} className="w-full text-lg">Generate</Button>
         </form>
      </Form>
   )
}
