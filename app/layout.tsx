import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import PlausibleProvider from 'next-plausible'
import { ModalProvider } from "@/components/ModalProvider";
// import { CrispProvider } from "@/components/crisp-provider";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { AuthProvider } from "@/providers/AuthProvider";
import { GenerationSettingsProvider } from "@/context/GenerationSettingsContext";
import { ContentProvider } from "@/context/ContentPlannerContext";
import { TooltipProvider } from "@/components/ui/tooltip";
import { TemplateProvider } from "@/context/TemplateContext";
import dynamic from "next/dynamic";
import { PHProvider } from "@/providers/AnalyticsProvider";

const OpenSans = Open_Sans({ subsets: ["latin"] });

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
		url: "https://creativagen.vercel.app",
		siteName: "CreativaGen",
		images: [
			{
				url: "https://creativagen.vercel.app//og-image.png",
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
		images: ["https://creativagen.vercel.app/og-image.png"],
	},
};
const PostHogPageView = dynamic(() => import('../components/PostHogPageView'), {
   ssr: false,
})

export default async function RootLayout({
   children,
}: {
      children: React.ReactNode;
}) {
   return (
		<html>
         <PHProvider>
			<body className={OpenSans.className}>
				<ThemeProvider attribute="class">
					<AuthProvider>
                  <TemplateProvider>
						<ContentProvider>
							<GenerationSettingsProvider>
								<ModalProvider />
                           <TooltipProvider>
                                 <PostHogPageView />
								{children}
                           </TooltipProvider>
								<Toaster />
							</GenerationSettingsProvider>
						</ContentProvider>
                  </TemplateProvider>
					</AuthProvider>
				</ThemeProvider>
			</body>
         </PHProvider>
		</html>
   );
}
