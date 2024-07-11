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
import { Label } from "../ui/label.tsx";
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
    <div className="p-5 shadow-md border rounded">
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
                my-4
                rounded-lg 
                border py-5 px-1 
                md:px-6 
                focus-within:shadow-sm               
              "
      >
        {selectedTemplate?.formFields?.map((f) => {
          const errors = form.formState.errors;

          switch (f.field) {
            case "input":
              return (
                <div key={f.label} className="my-4">
                  <Input
                    className="border focus-visible:ring-0 focus-visible:ring-transparent"
                    disabled={isLoading}
                    placeholder={f.label}
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
                <div key={f.label} className="my-4">
                  <Textarea
                    className="border outline-1 focus-visible:ring-0 focus-visible:ring-transparent"
                    disabled={isLoading}
                    placeholder={f.label}
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
                <div key={f.label} className="my-4 relative">
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
                <div className="my-4" key={f.label}>
                  <fieldset disabled={isLoading}>
                    <legend className="text-base font-medium">{f.label}</legend>
                    {f.options?.map((option) => (
                      <div
                        key={option.value}
                        className="flex items-center space-x-2"
                      >
                        <input
                          type="radio"
                          id={option.label}
                          value={option.value}
                          {...form.register(f.name)} // Register with react-hook-form
                        />
                        <label htmlFor={option.label}>{option.label}</label>
                      </div>
                    ))}
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
