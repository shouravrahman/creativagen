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

import { Appointment } from "@/models/Appointment";
import { ContentPlan } from "@prisma/client";
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

export const filterAppointments = (
	appt: Appointment,
	index: number,
	dateRange: DateRange,
	viewMode: string
): boolean => {
	const apptDate = new Date(appt.start);
	if (
		!dateRange.from ||
		!dateRange.to ||
		!isWithinInterval(apptDate, {
			start: dateRange.from,
			end: dateRange.to,
		})
	) {
		return false;
	}
	return isAppointmentInSlot(apptDate, index, viewMode, dateRange);
};
// Helper function to determine if an appointment should be displayed in a specific slot
const isAppointmentInSlot = (
	apptDate: Date,
	index: number,
	viewMode: string,
	dateRange: DateRange
): boolean => {
	if (!dateRange.from) return false;

	switch (viewMode) {
		case "day":
			return (
				apptDate.getHours() === index &&
				isSameDay(apptDate, dateRange.from)
			);
		case "week":
			return (
				apptDate.getDay() -
					(6 -
						differenceInDays(
							new Date(dateRange.to!),
							new Date(dateRange.from)
						)) ===
					index && isSameWeek(apptDate, dateRange.from)
			);
		case "month":
			return (
				getWeekOfMonth(apptDate) === index &&
				isSameMonth(apptDate, dateRange.from)
			);
		case "year":
			return apptDate.getMonth() === index;
		default:
			return false;
	}
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

export function signJwt(payload: Record<string, unknown>, options?: SignOptions) {
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
