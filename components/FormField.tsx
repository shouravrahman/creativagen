// DynamicFormField.tsx
"use client"

import { useFormContext } from "react-hook-form";
import {
   FormControl,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { FormField as TypeFom } from "@/types";


interface DynamicFormFieldProps {
   field: TypeFom;
}

export function DynamicFormField({ field }: DynamicFormFieldProps) {
   const form = useFormContext();

   return (
      <FormField
         control={form.control}
         name={field.name}
         render={({ field: formField }) => (
            <FormItem className={field.type === "switch" ? "flex items-center space-y-0" : undefined}>
               <FormLabel className={field.type === "switch" ? "mb-0 mr-2" : undefined}>
                  {field.label}
               </FormLabel>
              <FormControl>
                 {field.type === "text" && (
                    <Input
                       {...formField}
                       placeholder={field.placeholder}
                       required={field.required}
                    />
                 )}

                 {field.type === "number" && (
                    <Input
                       {...formField}
                       type="number"
                       placeholder={field.placeholder}
                       required={field.required}
                       onChange={(e) => formField.onChange(Number(e.target.value))}
                    />
                 )}

                 {field.type === "textarea" && (
                    <Textarea
                       {...formField}
                       placeholder={field.placeholder}
                       required={field.required}
                    />
                 )}

                 {field.type === "select" && field.options && (
                    <Select
                       onValueChange={formField.onChange}
                       defaultValue={formField.value}
                    >
                       <SelectTrigger>
                          <SelectValue placeholder={field.placeholder} />
                       </SelectTrigger>
                       <SelectContent>
                          {field.options.map((option) => (
                             <SelectItem key={option.value} value={option.value}>
                                {option.label}
                             </SelectItem>
                          ))}
                       </SelectContent>
                    </Select>
                 )}

                 {field.type === "switch" && (
                    <Switch
                       checked={formField.value}
                       onCheckedChange={formField.onChange}
                    />
                 )}

                 {field.type === "radio" && field.options && (
                    <RadioGroup
                       onValueChange={formField.onChange}
                       defaultValue={formField.value}
                       className="flex flex-col space-y-1"
                    >
                       {field.options.map((option) => (
                          <div key={option.value} className="flex items-center space-x-2">
                             <RadioGroupItem value={option.value} id={option.value} />
                             <Label htmlFor={option.value}>{option.label}</Label>
                          </div>
                       ))}
                    </RadioGroup>
                 )}
              </FormControl>
               <FormMessage />
            </FormItem>
         )}
      />
   );
}
