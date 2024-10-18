import { authConfig } from "@/auth/config";
import NextAuth from "next-auth";
import {
	DEFAULT_LOGIN_REDIRECT,
	apiAuthPrefix,
	authRoutes,
	protectedRoutes,
	publicRoutes,
	adminRoutes,
} from "@/routes";


export const { auth } = NextAuth(authConfig);

export default auth((req) => {
	const { nextUrl } = req;
	const isLoggedIn = !!req.auth;
	console.log("isLoggedIn", isLoggedIn);

	const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
	const isPublicRoutes = publicRoutes.includes(nextUrl.pathname);
	const isAuthRoutes = authRoutes.includes(nextUrl.pathname);

	if (isApiAuthRoute) {
		return null;
	}

	if (isAuthRoutes) {
		if (isLoggedIn) {
			return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
		}
		return null;
	}
	if (protectedRoutes.includes(nextUrl.pathname)) {
		if (!isLoggedIn) {
			return Response.redirect(new URL("/login", nextUrl));
		}
	}
	if (adminRoutes.includes(nextUrl.pathname)) {
		if (!isLoggedIn) {
			return Response.redirect(new URL("/login", nextUrl));
		}
		if (req.auth?.user.role !== "Admin") {
			return Response.redirect(new URL("/", nextUrl));
		}
	}
	if (!isLoggedIn && !isPublicRoutes) {
		return Response.redirect(new URL("/login", nextUrl));
	}

	return null;
});

// Optionally, don't invoke Middleware on some paths
// Read more: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
