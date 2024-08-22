"use client";

import Link from "next/link";
import Image from "next/image";

import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { CreditCounter } from "@/components/CreditCounter";
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
      <nav className="space-y-4 py-4 sm:flex flex-col justify-between h-screen bg-sidebar text-sidebar-text">
         <header className="px-3 py-2 ">
            <Link
               className="flex items-center gap-2 shrink-0 h-20"
               href="/"
               title={` homepage`}
            >

               <Image
                  alt="Logo"
                  src="/creature.svg"
                  className=""
                  width={200}
                  height={100}
               />

            </Link>
            <div className="mt-16 flex flex-col gap-2">
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
         </header>

         <CreditCounter apiLimitCount={apiLimitCount} isPro={isPro} />
      </nav>
   );
};
