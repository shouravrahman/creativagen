import NextAuth from "next-auth";
import { authConfig } from "@/auth/config";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prismadb from "@/lib/prismadb.ts";
import { getUserById, updateUserById } from "@/services/user";
import { getTwoFactorConfirmationByUserId } from "@/services/two-factor-confirmation";
import { isExpired } from "@/lib/utils";
import { getAccountByUserId } from "@/services/account";
import { UserRole } from "@prisma/client";

export const {
	handlers: { GET, POST },
	auth,
	signIn,
	signOut,
} = NextAuth({
	adapter: PrismaAdapter(prismadb),
	session: {
		strategy: "jwt",
		maxAge: 60 * 60 * 24, // 1 Day
	},
	pages: {
		signIn: "/login",
		error: "/error",
	},
	events: {
		async linkAccount({ user }) {
			user.id &&
				(await updateUserById(user.id, { emailVerified: new Date() }));
		},
	},
	callbacks: {
		async jwt({ token, user }) {
			if (!token.sub) return token;
			// console.log("from callback", user);

			const existingUser = await getUserById(token.sub);
			// console.log("from existingUser", existingUser);
			if (!existingUser) return token;

			const existingAccount = await getAccountByUserId(existingUser.id);

			token.name = existingUser.name;
			token.email = existingUser.email;
			token.role = existingUser.role;
			token.isTwoFactorEnabled = existingUser.isTwoFactorEnabled;
			token.isOAuth = !!existingAccount;

			return token;
		},
		async session({ token, session }) {
			if (token.sub && session.user) {
				session.user.id = token.sub;
			}

			if (token.role && session.user) {
				session.user.role = token.role as UserRole;
			}

			if (session.user) {
				session.user.name = token.name;
				session.user.email = token.email!;
				session.user.isTwoFactorEnabled = Boolean(
					token.isTwoFactorEnabled
				);
				session.user.isOAuth = Boolean(token.isOAuth);
			}

			return session;
		},
		async signIn({ user, account }) {
			if (account?.provider !== "credentials") return true;

			const existingUser = await getUserById(user.id!);
			// Prevent sign in without email verification
			if (!existingUser?.emailVerified) return false;

			// If user's 2FA checked
			if (existingUser.isTwoFactorEnabled) {
				const existingTwoFactorConfirmation =
					await getTwoFactorConfirmationByUserId(existingUser.id);
				// If two factor confirmation doesn't exist, then prevent to login
				if (!existingTwoFactorConfirmation) return false;
				// If two factor confirmation is expired, then prevent to login
				const hasExpired = isExpired(
					existingTwoFactorConfirmation.expires
				);
				if (hasExpired) return false;
			}

			return true;
		},
	},
	...authConfig,
});
