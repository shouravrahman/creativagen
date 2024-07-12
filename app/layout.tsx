import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import { ToasterProvider } from "@/components/toaster-provider";
import { ModalProvider } from "@/components/modal-provider";
import { CrispProvider } from "@/components/crisp-provider";

import "./globals.css";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider.tsx";

const font = Inter({ subsets: ["latin"] });

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
        <body
          className={`dark:bg-background bg-primary-foreground ${font.className} `}
        >
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
