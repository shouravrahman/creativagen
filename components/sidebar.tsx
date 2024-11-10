"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { CreditCounter } from "@/components/CreditCounter";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { routes } from "@/constants";

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
				className="sm:hidden fixed top-4 left-4 z-50"
				onClick={toggleSidebar}
			>
				<Menu />
			</Button>
			<aside
				className={cn(
					"flex flex-col bg-sidebar h-full py-8 overflow-y-auto border-r border-border/20",
					"w-64",
					"fixed md:relative z-40",
					isOpen ? "block" : "hidden md:flex"
				)}
			>
				<Link
					className="flex items-center self-center h-20"
					href="/"
					title="homepage"
				>
					<Image
						alt="Logo"
						src="/creature.svg"
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
									"text-sm group flex p-4 w-full justify-start font-medium cursor-pointer hover:bg-primary/10 dark:hover:bg-white/10 rounded-lg transition",
									pathname === route.href ? "bg-white/10" : ""
								)}
							>
								<div className="flex items-center flex-1">
									<route.icon
										className={cn(
											"h-5 w-5 mr-3",
											route.color
										)}
									/>
									{route.label}
								</div>
							</Link>
						))}

						{isAdmin && (
							<>
								<Link
									href="/admin/template/create"
									className={cn(
										"text-sm group flex p-4 w-full justify-start font-medium cursor-pointer hover:bg-primary/10 dark:hover:bg-white/10 rounded-lg transition",
										pathname === "/admin/template/create"
											? "bg-white/10"
											: ""
									)}
								>
									<div className="flex items-center flex-1">
										<span className="h-5 w-5 mr-3 text-blue-500">
											+
										</span>
										Create Template
									</div>
								</Link>
								<Link
									href="/admin/template/list"
									className={cn(
										"text-sm group flex p-4 w-full justify-start font-medium cursor-pointer hover:bg-primary/10 dark:hover:bg-white/10 rounded-lg transition",
										pathname === "/admin/template/list"
											? "bg-white/10"
											: ""
									)}
								>
									<div className="flex items-center flex-1">
										<span className="h-5 w-5 mr-3 text-blue-500">
											📄
										</span>
										Templates List
									</div>
								</Link>
							</>
						)}
					</nav>
				</div>

				<CreditCounter
					apiLimitCount={apiLimitCount}
					isPro={isPro}
				/>
			</aside>
		</>
	);
};
