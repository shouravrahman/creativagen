import {
	CredentialsProvider,
	GithubProvider,
	GoogleProvider,
	LinkedInProvider,
} from "@/auth/providers";
import type { NextAuthConfig } from "next-auth";

export const authConfig = {
	providers: [
		CredentialsProvider,
		GithubProvider,
		GoogleProvider,
		LinkedInProvider,
	],
} satisfies NextAuthConfig;
