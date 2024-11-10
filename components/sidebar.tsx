"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { CreditCounter } from "@/components/CreditCounter";
import {
   Menu,
   X,
   ChevronRight,
   ExternalLink
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { routes } from "@/constants";
import { AnimatePresence, motion } from "framer-motion";

interface SidebarProps {
   apiLimitCount: number;
   isPro: boolean;
   isAdmin?: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({
   apiLimitCount = 0,
   isPro = false,
   isAdmin = false,
}) => {
   const pathname = usePathname();
   const [isOpen, setIsOpen] = useState(false);

   const toggleSidebar = () => {
      setIsOpen(!isOpen);
   };

   return (
      <>
         <Button
            variant="ghost"
            size="icon"
           className="sm:hidden fixed top-4 left-4 z-50 bg-background/80 backdrop-blur-sm"
           onClick={toggleSidebar}
        >
           {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>

        <AnimatePresence mode="wait">
           {(isOpen || typeof window !== "undefined" && window.innerWidth >= 768) && (
              <motion.aside
                 initial={{ x: -100, opacity: 0 }}
                 animate={{ x: 0, opacity: 1 }}
                 exit={{ x: -100, opacity: 0 }}
                 transition={{ duration: 0.2 }}
                 className={cn(
               "flex flex-col bg-sidebar/50 backdrop-blur-md h-full py-6",
               "border-r border-border/10",
               "w-72 px-4",
               "fixed md:relative z-40",
               isOpen ? "block" : "hidden md:flex"
            )}
              >
                 {/* Logo Section */}
                 <Link
                    className="flex items-center justify-center h-16 mb-6 relative group"
                    href="/"
                    title="homepage"
                 >
                    <div className="absolute inset-0 bg-primary/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-200" />
                    <Image
                       alt="Logo"
                       src="/creature.svg"
                       width={160}
                       height={80}
                       className="relative z-10"
                    />
                 </Link>

                 {/* Navigation Section */}
                 <div className="flex-1 px-2">
                    <nav className="space-y-1.5">
                       {routes.map((route) => (
                          <Link
                             key={route.href}
                             href={route.href}
                             className={cn(
                       "flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200",
                       "hover:bg-primary/10 active:scale-98",
                       "group relative",
                       pathname === route.href
                          ? "bg-primary/15 text-primary shadow-sm"
                          : "text-foreground/70 hover:text-foreground"
                    )}
                   >
                      <route.icon
                         className={cn(
                         "h-5 w-5 transition-colors",
                         route.color,
                         pathname === route.href
                            ? "text-primary"
                            : "text-foreground/50 group-hover:text-foreground/70"
                      )}
                      />
                      <span className="flex-1">{route.label}</span>
                      <ChevronRight
                         className={cn(
                            "w-4 h-4 opacity-0 -translate-x-2 transition-all duration-200",
                            "text-primary/70",
                            "group-hover:opacity-100 group-hover:translate-x-0",
                            pathname === route.href && "opacity-100 translate-x-0"
                         )}
                      />
                   </Link>
                ))}

                       {/* Admin Section */}
                       {isAdmin && (
                          <div className="mt-6 pt-6 border-t border-border/10">
                             <p className="px-4 mb-3 text-xs font-semibold text-foreground/50">
                                ADMIN
                             </p>
                             <Link
                                href="/admin/template/create"
                                className={cn(
                         "flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200",
                         "hover:bg-blue-500/10 active:scale-98",
                         pathname === "/admin/template/create"
                            ? "bg-blue-500/15 text-blue-500"
                            : "text-foreground/70 hover:text-foreground"
                      )}
                             >
                                <span className="flex items-center justify-center w-5 h-5 rounded-md bg-blue-500/10 text-blue-500">
                                   +
                                </span>
                                <span className="flex-1">Create Template</span>
                                <ExternalLink className="w-4 h-4 opacity-50" />
                             </Link>

                             <Link
                                href="/admin/template/list"
                                className={cn(
                         "flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200",
                         "hover:bg-blue-500/10 active:scale-98",
                         pathname === "/admin/template/list"
                            ? "bg-blue-500/15 text-blue-500"
                            : "text-foreground/70 hover:text-foreground"
                      )}
                             >
                                <span className="flex items-center justify-center w-5 h-5 rounded-md bg-blue-500/10 text-blue-500">
                                   📄
                                </span>
                                <span className="flex-1">Templates List</span>
                                <ExternalLink className="w-4 h-4 opacity-50" />
                             </Link>
                          </div>
                       )}
                    </nav>
                 </div>

                 {/* Credits Counter Section */}
                 <div className="mt-6 px-2">
                    <CreditCounter
                       apiLimitCount={apiLimitCount}
                       isPro={isPro}
                    />
                 </div>
              </motion.aside>
           )}
        </AnimatePresence>
     </>
  );
};
