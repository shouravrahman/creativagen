"use client";

import Link from "next/link";
import Image from "next/image";

import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { FreeCounter } from "@/components/free-counter";
import { routes } from "@/constants";

export const Sidebar = ({
  apiLimitCount = 0,
  isPro = false,
}: {
  apiLimitCount: number;
  isPro: boolean;
}) => {
  const pathname = usePathname();

  return (
    <div className="space-y-4 py-4 flex flex-col h-screen bg-sidebar text-sidebar-text">
      <div className="px-3 py-2 flex-1">
        <Link href="/" className="flex items-center pl-3 mb-14">
          <Image
            height={200}
            width={200}
            className="object-cover"
            src="/logo-trs.png"
            alt="Company name"
          />
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer  hover:bg-primary/10 dark:hover:bg-white/10 rounded-lg transition",
                pathname === route.href ? " bg-white/10" : ""
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <FreeCounter apiLimitCount={apiLimitCount} isPro={isPro} />
    </div>
  );
};
