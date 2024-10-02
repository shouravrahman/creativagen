export const publicRoutes: string[] = ["/verify", "/"];

export const authRoutes: string[] = [
	"/login",
	"/register",
	"/error",
	"/resend",
	"/reset",
	"/new-password",
	"/two-factor",
];
export const protectedRoutes: string[] = [
	"/dashboard",
	"/dashboard/*",
	"/dashboard/content/*",
];
export const adminRoutes: string[] = ["/admin"];

export const apiAuthPrefix: string = "/api/auth";

export const DEFAULT_LOGIN_REDIRECT: string = "/dashboard";
