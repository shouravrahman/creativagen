import type { Metadata } from "next";
import { Inter, Nunito_Sans, Titillium_Web, Quicksand } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import { ToasterProvider } from "@/components/toaster-provider";
import { ModalProvider } from "@/components/modal-provider";
import { CrispProvider } from "@/components/crisp-provider";

import "./globals.css";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider.tsx";

const inter = Inter({ subsets: ["latin"] });
const nunito = Nunito_Sans({ subsets: ["latin"] });
const quciksand = Quicksand({ subsets: ["latin"], weight: ["400", "600"] });
const titlium = Titillium_Web({ subsets: ["latin"], weight: "400" });

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
    <html suppressHydrationWarning>
      <CrispProvider />
      <ClerkProvider>
        <body className={`bg-background ${quciksand.className} `}>
          <ThemeProvider attribute="class">
            <ToasterProvider />
            <ModalProvider />
            {children}
          </ThemeProvider>
        </body>
      </ClerkProvider>
    </html>
  );
}
