"use client"
import { useFormContext } from "react-hook-form"
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { v4 as uuidv4 } from 'uuid';

interface FieldConfig {
   label: string;
   field: string;
   name: string;
   required: boolean;
   placeholder?: string;
   options?: { label: string; value: string }[];
   type?: string;
   value?: boolean;
}

export function DynamicFormField({ config }: { config: FieldConfig }) {

   const form = useFormContext()

   return (
		<FormField
			control={form.control}
			name={config.name}
			render={({ field }) => (
				<FormItem
					className={
						config.type === "switch"
							? "flex items-center text-center space-y-0"
							: undefined
					}
				>
					<FormLabel
						className={
							config.type === "switch" ? "pb-0" : undefined
						}
					>
						{config.label}
					</FormLabel>
					{config.type === "text" && (
						<FormControl>
							<Input
								{...field}
								type={config.type || "text"}
								placeholder={config.placeholder}
								required={config.required}
							/>
						</FormControl>
					)}
					{config.type === "textarea" && (
						<FormControl>
							<Textarea
								{...field}
								placeholder={config.placeholder}
								required={config.required}
							/>
						</FormControl>
					)}
					{config.type === "select" && (
						<FormControl>
							<Select
								onValueChange={field.onChange}
								defaultValue={field.value}
							>
								<SelectTrigger>
									<SelectValue
										placeholder={config.placeholder}
									/>
								</SelectTrigger>
								<SelectContent>
									{config.options?.map((option) => (
										<SelectItem
											key={option.value}
											value={option.value}
										>
											{option.label}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
						</FormControl>
					)}
					{config.type === "switch" && (
						<FormControl className="ml-3">
							<Switch
								checked={field.value}
								onCheckedChange={field.onChange}
							/>
						</FormControl>
					)}
					{config.type === "radio" && (
						<FormControl>
							<RadioGroup
								onValueChange={field.onChange}
								defaultValue={field.value}
								className="flex flex-col space-y-1"
							>
								{config.options?.map((option) => (
									<div
										key={uuidv4()}
										className="flex items-center space-x-2"
									>
										<RadioGroupItem
											value={option.value}
											id={option.value}
										/>
										<Label htmlFor={option.value}>
											{option.label}
										</Label>
									</div>
								))}
							</RadioGroup>
						</FormControl>
					)}
					{/* {config.placeholder && <FormDescription>{config.placeholder}</FormDescription>} */}

					<FormMessage />
				</FormItem>
			)}
		/>
   );
}
