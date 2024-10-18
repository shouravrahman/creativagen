import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";


import { ModalProvider } from "@/components/modal-provider";
// import { CrispProvider } from "@/components/crisp-provider";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider.tsx";
import { AuthProvider } from "@/providers/AuthProvider";

const nunito = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "CreativaGen | AI Content Generator for Emails, Copywriting & Social Media",
	description:
		"Transform your content creation process with CreativaGen, an AI-powered platform designed to generate high-quality emails, social media posts, and more. Maximize your outreach efforts and save time with our intuitive interface and powerful analytics.",
	keywords:
		"AI content generator, email generator, copywriting tool, social media posts, content marketing, SEO, automated writing, business communication",
	authors: {
		name: "Shourav Rahman",
	},
	openGraph: {
		title: "CreativaGen | AI Content Generator",
		description:
			"Revolutionize your content strategy with CreativaGen, the AI-driven tool for crafting engaging emails, social media posts, and more.",
		url: "https://creativagen.com", // Change to your actual URL
		siteName: "CreativaGen",
		images: [
			{
				url: "https://creativagen.com/images/og-image.png", // Update with your image URL
				width: 1200,
				height: 630,
				alt: "CreativaGen - AI Content Generator",
			},
		],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "CreativaGen | AI Content Generator",
		description:
			"Transform your content creation process with CreativaGen, an AI-powered platform for emails, social media posts, and more.",
		images: ["https://creativagen.com/images/og-image.png"], // Update with your image URL
	},
};

export default async function RootLayout({
   children,
}: {
      children: React.ReactNode;
}) {
   return (
		<html>
			{/* <CrispProvider /> */}
			<body className={nunito.className}>
				<ThemeProvider attribute="class">
					<AuthProvider>
						<ModalProvider />
						{children}
						<Toaster />
					</AuthProvider>
				</ThemeProvider>
			</body>
		</html>
   );
}
