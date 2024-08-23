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
      <aside className="flex flex-col w-64 h-screen  py-8 overflow-y-auto  border-r border-border rtl:border-r-0 rtl:border-l">
         <Link
            className="flex items-center self-center h-20"
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
         <div className="flex flex-col justify-between flex-1 mt-6 px-5">

            <nav className="flex-1 -mx-3 space-y-3">
               {routes.map((route) => (
                  <Link
                     key={route.href}
                     href={route.href}
                     className={cn(
                        "text-sm group flex p-4 w-full justify-start font-medium cursor-pointer  hover:bg-primary/10 dark:hover:bg-white/10 rounded-lg transition",
                        pathname === route.href ? " bg-white/10" : ""
                     )}
                  >
                     <div className="flex items-center flex-1">
                        <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                        {route.label}
                     </div>
                  </Link>
               ))}
            </nav>
         </div>

         <CreditCounter apiLimitCount={apiLimitCount} isPro={isPro} />
      </aside>
   );
};
