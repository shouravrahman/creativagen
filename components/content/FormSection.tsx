"use client";
import { TEMPLATE } from "@/types.ts";
import React from "react";
import { Heading } from "../heading.tsx";
import { Code } from "lucide-react";
import { FieldError, FieldErrorsImpl, Merge, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input.tsx";
import { Textarea } from "../ui/textarea.tsx";
import { Button } from "../ui/button.tsx";
import { ErrorMessage } from "@hookform/error-message";
import {
   Select,
   SelectContent,
   SelectGroup,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from "../ui/select.tsx";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group.tsx";
import { Switch } from "../ui/switch.tsx";
import { Label } from "../ui/label.tsx";
import CustomSwitch from "../CustomSwitch.tsx";
interface IFormSection {
   selectedTemplate: TEMPLATE;
}

const FormSection = ({ selectedTemplate }: IFormSection) => {
   const form = useForm<z.infer<typeof selectedTemplate.validationSchema>>({
      resolver: zodResolver(selectedTemplate.validationSchema),
   });

   const isLoading = form.formState.isSubmitting;

   const onSubmit = async (
      values: z.infer<typeof selectedTemplate.validationSchema>
   ) => {
      console.log(values);
   };

   return (
      <div className=" shadow-sm rounded">
         {/* <Image src={selectedTemplate?.icon} alt="icon" width={100} height={100} /> */}

         <Heading
            title={selectedTemplate?.name}
            description={selectedTemplate?.description}
            icon={Code}
            iconColor="text-green-700"
            bgColor="bg-green-700/10"
         />

         <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="
                my-8
                rounded-sm
                border border-border py-5 px-1
                md:px-6
                flex
                flex-wrap
                gap-2
                items-center
                justify-around
               w-full
              "
         >
            {selectedTemplate?.formFields?.map((f) => {
               const errors = form.formState.errors;

               switch (f.field) {
                  case "input":
                     return (
                        <div key={f.label} className="w-[40%]  my-8 flex flex-col gap-1">
                           <Label htmlFor={f.name}>{f.label}</Label>
                           <Input
                              className="border border-border focus-visible:ring-0 focus-visible:ring-transparent"
                              disabled={isLoading}
                              placeholder={f.placeholder}
                              {...form.register(f.name)}
                              type={f.type || "text"}
                           />
                           <ErrorMessage
                              errors={errors}
                              name={f.name}
                              render={({ message }) => (
                                 <p className="text-red-600 text-sm mt-1">{message}</p>
                              )}
                           />
                        </div>
                     );
                  case "textarea":
                     return (
                        <div key={f.label} className="w-[40%] my-8 flex flex-col gap-1">
                           <Label className="mb-1" htmlFor={f.name}>
                              {f.label}
                           </Label>
                           <Textarea
                              className="border  border-border outline-1 focus-visible:ring-0 focus-visible:ring-transparent"
                              disabled={isLoading}
                              placeholder={f.placeholder}
                              {...form.register(f.name)}
                           />
                           <ErrorMessage
                              errors={errors}
                              name={f.name}
                              render={({ message }) => (
                                 <p className="text-red-600 text-sm mt-1">{message}</p>
                              )}
                           />
                        </div>
                     );
                  case "select":
                     return (
                        <div
                           key={f.label}
                           className="w-[50%] my-8 relative flex flex-col gap-1"
                        >
                           <Label className="mb-1" htmlFor={f.name}>
                              {f.label}
                           </Label>
                           <select disabled={isLoading} {...form.register(f.name)}>
                              <option value="" key="default">
                                 {f.label || "Select an option"}
                              </option>
                              {f.options?.map((option) => (
                                 <option key={option.value} value={option.value}>
                                    {option.label}
                                 </option>
                              ))}
                           </select>
                           <ErrorMessage
                              errors={errors}
                              name={f.name}
                              render={({ message }) => (
                                 <p className="text-red-600 text-sm mt-1">{message}</p>
                              )}
                           />
                        </div>
                     );
                  case "radiogroup":
                     return (
                        <div className="w-[50%] my-8 pl-1" key={f.label}>
                           <fieldset disabled={isLoading} className="space-y-2 ">
                              <Label className="mb-1" htmlFor={f.name}>
                                 {f.label}
                              </Label>
                              <div className="flex space-x-4">
                                 {f.options?.map((option) => (
                                    <div
                                       key={option.value}
                                       className="flex items-center space-x-2"
                                    >
                                       <input
                                          type="radio"
                                          id={option.label}
                                          value={option.value}
                                          {...form.register(f.name)}
                                          className="form-radio h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
                                       />
                                       <label
                                          htmlFor={option.label}
                                          className="block text-sm font-medium    "
                                       >
                                          {option.label}
                                       </label>
                                    </div>
                                 ))}
                              </div>
                           </fieldset>
                           <ErrorMessage
                              errors={errors}
                              name={f.name}
                              render={({ message }) => (
                                 <p className="text-red-600 text-sm mt-1">{message}</p>
                              )}
                           />
                        </div>
                     );
                  case "switch":
                     return (
                        <div
                           key={f.label}
                           className="w-[50%] text-center px-4 inline-flex  items-center  space-x-2 my-8"
                        >
                           {/* <Switch
                    id={f.name}
                    {...form.register(f.name)}
                    checked={f.value}
                    onChange={ }
                  /> */}
                           <Label className="p-0 m-0" htmlFor={f.name}>
                              {f.label}
                           </Label>

                           <CustomSwitch
                              id={f.name}
                              checked={form.watch(f.name)}
                              onChange={(value) => form.setValue(f.name, value)}
                              register={form.register}
                              name={f.name}
                           />
                           <ErrorMessage
                              errors={errors}
                              name={f.name}
                              render={({ message }) => (
                                 <p className="text-red-600 text-sm mt-1">{message}</p>
                              )}
                           />
                        </div>
                     );
                  default:
                     return null;
               }
            })}

            <Button
               className="col-span-12 lg:col-span-2 w-full"
               type="submit"
               disabled={isLoading}
               size="lg"
               variant="default"
            >
               Generate
            </Button>
         </form>
      </div>
   );
};

export default FormSection;
