import { twMerge } from "tailwind-merge";
import { sign, verify, type SignOptions, type Secret } from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { Response, ResponseWithMessage } from "@/types/index.ts";
import { type ClassValue, clsx } from "clsx";
import {
	eachDayOfInterval,
	eachHourOfInterval,
	eachMonthOfInterval,
	eachWeekOfInterval,
	endOfDay,
	endOfMonth,
	endOfYear,
	format,
	differenceInDays,
	getWeekOfMonth,
	isSameDay,
	isSameMonth,
	isSameWeek,
	isWithinInterval,
	startOfDay,
	startOfMonth,
	startOfYear,
} from "date-fns";
import { DateRange } from "react-day-picker";

import { ContentPlan } from "@prisma/client";
import { FormField } from "@/types";
import { z } from "zod";
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
export function absoluteUrl(relativeUrl: string) {
	return `${process.env.NEXT_PUBLIC_APP_URL}${relativeUrl}`;
}

export async function hashPassword(password: string) {
	return await bcrypt.hash(password, await bcrypt.genSalt());
}
export const calculateNewDates = (
	viewMode: string,
	index: number,
	currentIndex: number,
	dateRange: DateRange
) => {
	let start = new Date(dateRange.from as Date);
	let end = new Date(dateRange.to as Date);
	const delta = (currentIndex - index) * -1;
	switch (viewMode) {
		case "day":
			start.setHours(start.getHours() + delta);
			end.setHours(end.getHours() + delta);
			break;
		case "week":
			start.setDate(start.getDate() + delta);
			end.setDate(end.getDate() + delta);
			break;
		case "month":
			start.setDate(start.getDate() + delta);
			end.setDate(end.getDate() + delta);
			break;
		case "year":
			start = new Date(dateRange.from as Date);
			start.setMonth(index);
			end = new Date(start);
			end.setMonth(start.getMonth() + 1);
			break;
	}
	return { start, end };
};


export const getLabelsForView = (
	viewMode: "day" | "week" | "month" | "year",
	dateRange: { start: Date; end: Date }
): string[] => {
	switch (viewMode) {
		case "day":
			// Generate hourly labels for each day in the range
			return eachHourOfInterval({
				start: startOfDay(dateRange.start),
				end: endOfDay(dateRange.end),
			}).map((hour) => format(hour, "HH:mm"));
		case "week":
			// Weekly labels based on the week number within the year
			return eachDayOfInterval({
				start: dateRange.start,
				end: dateRange.end,
			}).map((day) => `${format(day, "ccc ")} the ${format(day, "do")}`);
		case "month":
			// Monthly labels showing the full month name and year
			return eachWeekOfInterval({
				start: startOfMonth(dateRange.start),
				end: endOfMonth(dateRange.end),
			}).map(
				(week) => `${format(week, "wo")} week of ${format(week, "MMM")}`
			);
		case "year":
			// Yearly labels showing month names only
			return eachMonthOfInterval({
				start: startOfYear(dateRange.start),
				end: endOfYear(dateRange.end),
			}).map((month) => format(month, "MMM"));
		default:
			return [];
	}
};

export function filterContentPlans(
	plan: ContentPlan,
	columnIndex: number,
	dateRange: DateRange,
	viewMode: "day" | "week" | "month" | "year"
): boolean {
	const planStart = new Date(plan.startDate).getTime();
	const planEnd = new Date(plan.endDate).getTime();
	const rangeStart = dateRange.from?.getTime() ?? 0;
	const rangeEnd = dateRange.to?.getTime() ?? 0;

	// Check if the content plan falls within the current date range
	return planStart >= rangeStart && planEnd <= rangeEnd;
}
/**
 * Function to check whether the given value is expired or not.
 * @param expires The date that want to check
 * @return true if the value is expired, false otherwise
 */
export function isExpired(expires: Date): boolean {
	return new Date(expires) < new Date();
}

/**
 * Function to set token expiration.
 * @param exp Duration of token expiration, default is 3600 milliseconds or 1 hour
 * @return Generates datetime for the token expiration
 */
export function setTokenExpiration(exp: number = 60 * 60) {
	return new Date(new Date().getTime() + 1000 * exp);
}

/**
 * Function to generate jwt.
 * @param payload The payload want to generate
 * @param options The sign options
 * @return The token generated
 */

export function signJwt(
	payload: Record<string, unknown>,
	options?: SignOptions
) {
	return sign(payload, process.env.JWT_SECRET as Secret, {
		...options,
		algorithm: "HS256",
	});
}

export const verifyJwtToken = <T extends object>(token: string) => {
	try {
		const decoded = verify(token, process.env.JWT_SECRET as Secret);
		return {
			valid: true,
			decoded: decoded as T,
		};
	} catch (error) {
		return {
			valid: false,
			decoded: null,
		};
	}
};

// Overload for response status in server action
export function response(response: ResponseWithMessage): Response;
export function response<T extends Record<string, unknown>>(
	response: Response<T>
): Response<T>;
export function response<T extends object>(response: T): T {
	return response;
}



export const createValidationSchema = (fields: FormField[]) => {
	const schemaFields: Record<string, z.ZodTypeAny> = {};

	fields.forEach((field) => {
		let fieldSchema: z.ZodTypeAny;

		switch (field.type) {
			case "text":
				fieldSchema = z.string().min(1, "This field is required");
				break;

			case "textarea":
				fieldSchema = z.string().min(1, "This field is required");
				break;

			case "select":
				if (field.options) {
					const validValues = field.options.map(
						(opt) => opt.value
					) as [string, ...string[]];
					fieldSchema = z.enum(validValues, {
						required_error: "Please select an option",
						invalid_type_error: "Please select a valid option",
					});
				} else {
					fieldSchema = z.string().min(1, "This field is required");
				}
				break;

			case "multiselect":
				if (field.options) {
					const validValues = field.options.map(
						(opt) => opt.value
					) as [string, ...string[]];
					fieldSchema = z
						.array(
							z.enum(validValues, {
								invalid_type_error:
									"Please select valid options",
							})
						)
						.min(1, "Please select at least one option");
				} else {
					fieldSchema = z
						.array(z.string())
						.min(1, "Please select at least one option");
				}
				break;

			case "radio":
				if (field.options) {
					const validValues = field.options.map(
						(opt) => opt.value
					) as [string, ...string[]];
					fieldSchema = z.enum(validValues, {
						required_error: "Please select an option",
						invalid_type_error: "Please select a valid option",
					});
				} else {
					fieldSchema = z.string().min(1, "This field is required");
				}
				break;

			case "checkbox":
				if (field.options) {
					// Multiple checkboxes
					const validValues = field.options.map(
						(opt) => opt.value
					) as [string, ...string[]];
					fieldSchema = z
						.array(z.enum(validValues))
						.min(1, "Please select at least one option");
				} else {
					// Single checkbox
					fieldSchema = z.boolean({
						required_error: "This field is required",
						invalid_type_error: "This field must be a boolean",
					});

					if (field.required) {
						fieldSchema = fieldSchema.refine(
							(val) => val === true,
							{
								message: "This field must be checked",
							}
						);
					}
				}
				break;

			case "slider":
				{
					let numberSchema = z.number({
						required_error: "This field is required",
						invalid_type_error: "Please enter a valid number",
					});

					if (typeof field.min === "number") {
						numberSchema = numberSchema.gte(
							field.min,
							`Value must be at least ${field.min}`
						);
					}

					if (typeof field.max === "number") {
						numberSchema = numberSchema.lte(
							field.max,
							`Value must be at most ${field.max}`
						);
					}

					if (field.step && typeof field.step === "number") {
						const multipleOf = field.step;
						numberSchema = numberSchema.multipleOf(
							multipleOf,
							`Value must be a multiple of ${multipleOf}`
						);
					}

					fieldSchema = numberSchema;
				}
				break;

			case "number":
				{
					let numberSchema = z.coerce.number({
						required_error: "This field is required",
						invalid_type_error: "Please enter a valid number",
					});

					if (typeof field.min === "number") {
						numberSchema = numberSchema.gte(
							field.min,
							`Value must be at least ${field.min}`
						);
					}

					if (typeof field.max === "number") {
						numberSchema = numberSchema.lte(
							field.max,
							`Value must be at most ${field.max}`
						);
					}

					if (field.step && typeof field.step === "number") {
						const multipleOf = field.step;
						numberSchema = numberSchema.multipleOf(
							multipleOf,
							`Value must be a multiple of ${multipleOf}`
						);
					}

					fieldSchema = numberSchema;
				}
				break;

			case "date":
				fieldSchema = z.date({
					required_error: "Please select a date",
					invalid_type_error: "Please enter a valid date",
				});
				break;

			default:
				fieldSchema = z.string();
		}

		// Apply custom validation if provided
		if (field.validation) {
			if (
				typeof fieldSchema === "object" &&
				fieldSchema instanceof z.ZodString
			) {
				Object.entries(field.validation).forEach(([key, value]) => {
					switch (key) {
						case "min":
							if (typeof value === "number") {
								fieldSchema = (fieldSchema as z.ZodString).min(
									value,
									`Minimum ${value} characters required`
								);
							}
							break;
						case "max":
							if (typeof value === "number") {
								fieldSchema = (fieldSchema as z.ZodString).max(
									value,
									`Maximum ${value} characters allowed`
								);
							}
							break;
						case "pattern":
							if (value instanceof RegExp) {
								fieldSchema = (
									fieldSchema as z.ZodString
								).regex(value, "Invalid format");
							}
							break;
					}
				});
			}
		}

		// Make field optional if not required
		if (!field.required) {
			fieldSchema = fieldSchema.optional();
		}

		schemaFields[field.name] = fieldSchema;
	});

	return z.object(schemaFields);
};
