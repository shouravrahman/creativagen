import { ZodSchema } from "zod";

export interface TEMPLATE {
  name: string;
  description: string;
  icon: any;
  category: string;
  slug: string;
  aiPrompt: string;
  href: string;
  formFields: Form[];
  validationSchema: ZodSchema;
}

interface Option {
  label: string;
  value: string;
}
enum fieldEnum {
  input = "input",
  textarea = "textarea",
  select = "select",
  radio = "radiogroup",
}
export interface Form {
  label: string;
  field: fieldEnum;
  name: string;
  required?: boolean;
  type?: string;
  options?: Option[];
}
