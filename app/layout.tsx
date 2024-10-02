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
   title: "CreativaGen",
   description: "AI Platform",
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
