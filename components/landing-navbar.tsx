import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs/server";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import ThemeSwitch from "./ThemeSwitch.tsx";

const font = Montserrat({ weight: "600", subsets: ["latin"] });

export const LandingNavbar = async () => {
  const user = await currentUser();

  return (
    <nav className="px-8 bg-transparent flex items-center justify-between">
      <Link href="/" className="flex items-center">
        <div className="relative h-28 w-44 pt-3 mr-4">
          <Image
            alt="Logo"
            src="/logo-trs.png"
            className="object-fill"
            width={200}
            height={100}
          />
        </div>
      </Link>
      <div className="flex items-center gap-x-2">
        <ThemeSwitch />
        <Link href={user ? "/dashboard" : "/sign-up"}>
          <Button variant="outline" className="rounded-full">
            Get Started
          </Button>
        </Link>
      </div>
    </nav>
  );
};
