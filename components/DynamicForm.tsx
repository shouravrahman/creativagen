import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormField, Template } from "@/types";
import { createValidationSchema } from "@/lib/utils";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
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
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon, Hammer } from "lucide-react";
import { Label } from "./ui/label";
import CommonFormOptions from "./CommonFormOptions";

interface DynamicFormProps {
	formFields: FormField[];
	onSubmit: (data: Record<string, any>) => void;
	initialEditorContent?: string;
}

const DynamicForm: React.FC<DynamicFormProps> = ({
	formFields,
	onSubmit,
	initialEditorContent = "",
}) => {
	const [editorContent, setEditorContent] = useState(initialEditorContent);

	// Generate the validation schema based on form fields
	const formSchema = createValidationSchema(formFields);

   const defaultValues = {
      ...formFields.reduce(
         (acc, field) => ({
            ...acc,
            [field.name]:
               field.default !== undefined
                  ? field.default
                  : field.type === "checkbox"
                     ? []
                     : field.type === "date"
                        ? null
                        : "",
         }),
         {}
      ),


   };

	const form = useForm({
		resolver: zodResolver(formSchema),
		defaultValues,
	});

	const handleSubmit = async (values: any) => {
		await onSubmit(values);
	};

	return (
		<div className="flex lg:min-w-[40%] gap-6 mt-6">
			<Card className="p-6 w-full">
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(handleSubmit)}
						className="space-y-6"
					>
						{formFields
							?.sort((a, b) => a.order - b.order)
							.map((field) => (
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
																	placeholder={
																		field.helpText
																	}
																	required={
																		field.required
																	}
																/>
															);

														case "textarea":
															return (
																<Textarea
																	{...formField}
																	placeholder={
																		field.helpText
																	}
																	className="min-h-[100px]"
																	required={
																		field.required
																	}
																/>
															);

														case "select":
															return (
																<Select
																	onValueChange={
																		formField.onChange
																	}
																	defaultValue={
																		formField.value
																	}
																	required={
																		field.required
																	}
																>
																	<SelectTrigger>
																		<SelectValue
																			placeholder={
																				field.helpText ||
																				"Select an option"
																			}
																		/>
																	</SelectTrigger>
																	<SelectContent>
																		{field.options?.map(
																			(
																				option
																			) => (
																				<SelectItem
																					key={
																						option.value
																					}
																					value={
																						option.value
																					}
																				>
																					{
																						option.label
																					}
																				</SelectItem>
																			)
																		)}
																	</SelectContent>
																</Select>
															);

														case "multiselect":
															return (
																<Select
																	onValueChange={
																		formField.onChange
																	}
																	defaultValue={
																		formField.value
																	}
																	required={
																		field.required
																	}
																	multiple
																>
																	<SelectTrigger>
																		<SelectValue
																			placeholder={
																				field.helpText ||
																				"Select options"
																			}
																		/>
																	</SelectTrigger>
																	<SelectContent>
																		{field.options?.map(
																			(
																				option
																			) => (
																				<SelectItem
																					key={
																						option.value
																					}
																					value={
																						option.value
																					}
																				>
																					{
																						option.label
																					}
																				</SelectItem>
																			)
																		)}
																	</SelectContent>
																</Select>
															);

														case "radio":
															return (
																<RadioGroup
																	onValueChange={
																		formField.onChange
																	}
																	defaultValue={
																		formField.value
																	}
																	className="flex flex-col space-y-1"
																	required={
																		field.required
																	}
																>
																	{field.options?.map(
																		(
																			option
																		) => (
																			<div
																				key={
																					option.value
																				}
																				className="flex items-center space-x-2"
																			>
																				<RadioGroupItem
																					value={
																						option.value
																					}
																					id={
																						option.value
																					}
																				/>
																				<label
																					htmlFor={
																						option.value
																					}
																					className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
																				>
																					{
																						option.label
																					}
																				</label>
																			</div>
																		)
																	)}
																</RadioGroup>
															);

														case "checkbox":
															return field.options ? (
																<div className="flex flex-col space-y-2">
																	{field.options.map(
																		(
																			option
																		) => (
																			<div
																				key={
																					option.value
																				}
																				className="flex items-center space-x-2"
																			>
																				<Checkbox
																					className="mt-2"
																					id={
																						option.value
																					}
																					defaultChecked={
																						false
																					}
																					checked={formField.value?.includes(
																						option.value
																					)}
																					onCheckedChange={(
																						checked
																					) => {
																						const currentValue =
																							formField.value ||
																							[];
																						if (
																							checked
																						) {
																							formField.onChange(
																								[
																									...currentValue,
																									option.value,
																								]
																							);
																						} else {
																							formField.onChange(
																								currentValue.filter(
																									(
																										value: string
																									) =>
																										value !==
																										option.value
																								)
																							);
																						}
																					}}
																				/>
																				<Label
																					htmlFor={
																						option.value
																					}
																					className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
																				>
																					{
																						option.label
																					}
																				</Label>
																			</div>
																		)
																	)}
																</div>
															) : (
																<Checkbox
																	checked={
																		formField.value
																	}
																	onCheckedChange={
																		formField.onChange
																	}
																/>
															);

														case "slider":
															return (
																<div className="space-y-4">
																	<Slider
																		onValueChange={(
																			value
																		) =>
																			formField.onChange(
																				value[0]
																			)
																		}
																		defaultValue={[
																			formField.value,
																		]}
																		min={
																			field.min ||
																			0
																		}
																		max={
																			field.max ||
																			100
																		}
																		step={
																			field.step ||
																			1
																		}
																		className="w-full"
																	/>
																	<div className="text-xs text-muted-foreground text-right">
																		Value:{" "}
																		{
																			formField.value
																		}
																	</div>
																</div>
															);

														case "number":
															return (
																<Input
																	type="number"
																	{...formField}
																	placeholder={
																		field.helpText
																	}
																	min={
																		field.min
																	}
																	max={
																		field.max
																	}
																	step={
																		field.step
																	}
																	required={
																		field.required
																	}
																/>
															);

														case "date":
															return (
																<Popover>
																	<PopoverTrigger
																		asChild
																	>
																		<Button
																			variant="outline"
																			className={cn(
																				"w-full justify-start text-left font-normal",
																				!formField.value &&
																					"text-muted-foreground"
																			)}
																		>
																			<CalendarIcon className="mr-2 h-4 w-4" />
																			{formField.value ? (
																				format(
																					formField.value,
																					"PPP"
																				)
																			) : (
																				<span>
																					{field.helpText ||
																						"Pick a date"}
																				</span>
																			)}
																		</Button>
																	</PopoverTrigger>
																	<PopoverContent className="w-auto p-0">
																		<Calendar
																			mode="single"
																			selected={
																				formField.value
																			}
																			onSelect={
																				formField.onChange
																			}
																			initialFocus
																		/>
																	</PopoverContent>
																</Popover>
															);

														default:
															return null;
													}
												})()}
											</FormControl>
											{/* {field.helpText && (
                           <FormDescription>{field.helpText}</FormDescription>
                        )} */}
											<FormMessage />
										</FormItem>
									)}
								/>
							))}
                  <CommonFormOptions form={form} />
						<Button
							type="submit"
                     variant={"destructive"}
                     className="w-full text-lg"
						>
							Generate Content
                     <Hammer fill="white" className="w-9 h-9" />
						</Button>
					</form>
				</Form>
			</Card>
		</div>
	);
};

export default DynamicForm;
