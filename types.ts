import { ZodSchema } from "zod";
import { IconType } from "react-icons";

// Define a general field interface
interface BaseField {
	label: string;
	name: string;
	field: string;
	required: boolean;
	placeholder?: string;
}

// Text input field interface
interface TextField extends BaseField {
	type: "text";
}

// Textarea field interface
interface TextareaField extends BaseField {
	type: "textarea";
}

// Select field interface
interface SelectField extends BaseField {
	type: "select";
	options: Array<{ label: string; value: string }>;
}

// Switch field interface
interface SwitchField extends BaseField {
	type: "switch";
	value?: boolean;
}

// Union type to cover all possible field configurations
type FieldConfig = TextField | TextareaField | SelectField | SwitchField;

// Main configuration interface
export interface TEMPLATE {
	name: string;
	description: string;
	icon?: any; // assuming you're using an icon library like react-icons
	href?: string;
	color?: string;
	bgColor?: string;
	slug: string;
	category?: string;
	aiPrompt?: string;
	formFields: FieldConfig[]; // array of form field configurations
	validationSchema: ZodSchema<any>; // using Zod for validation
}
export interface FormConfig {
	name?: string;
	description?: string;
	formFields: {
		label: string;
		field: string;
		name: string;
		required: boolean;
		placeholder?: string;
		options?: { label: string; value: string }[];
		type?: string;
		value?: boolean;
	}[];
}
interface Option {
	label: string;
	value: string;
}
