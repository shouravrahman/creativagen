"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";
import IconDropdown from "@/components/IconDropdown.tsx";

const links: {
	href: string;
	label: string;
}[] = [
	{
		href: "/#pricing",
		label: "Pricing",
	},
	{
		href: "/#testimonials",
		label: "Reviews",
	},
	{
		href: "/#faq",
		label: "FAQ",
	},
];

const menu = [{ label: "Profile", href: "/profile" }];

const LandingNavbar = () => {
	const searchParams = useSearchParams();
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const { data: session } = useSession();

	useEffect(() => {
		setIsOpen(false);
	}, [searchParams]);

	return (
		<header className="">
			<nav className="container flex items-center justify-between px-2 py-2 md:px-8 md:py-6 mx-auto">
				<div className="flex flex-1  ">
					<Link
						className="flex items-center gap-2 shrink-0 h-20"
						href="/"
						title={` homepage`}
					>
						<Image
							alt="Logo"
							src="/creature.svg"
							className="max-w-[150px] md:max-w-[200px]" // Adjust max width for responsiveness
							width={200}
							height={100}
						/>
					</Link>
				</div>

				<div className="hidden lg:flex lg:justify-center lg:gap-12 lg:items-center">
					{links.map((link) => (
						<Link
							href={link.href}
							key={link.href}
							className="link link-hover"
							title={link.label}
						>
							{link.label}
						</Link>
					))}
				</div>
				{session?.user ? (
					<div className="lg:flex lg:justify-end lg:flex-1 ">
						<IconDropdown
							menu={menu}
							img={
								session?.user?.image !== null
									? session?.user?.image
									: "/avatar.svg"
							}
						/>
					</div>
				) : (
					<div className="hidden lg:flex lg:justify-end lg:flex-1">
						<Button
							variant={"outline"}
							size={"lg"}
						>
							<Link href={"/login"}>Try now</Link>
						</Button>
					</div>
				)}
				<div className="flex lg:hidden ml-4 lg:ml-0">
					<button
						type="button"
						className="-m-2.5 inline-flex items-center justify-center  rounded-md p-2.5"
						onClick={() => setIsOpen(true)}
					>
						<span className="sr-only">Open main menu</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-8 h-8 text-base"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
							/>
						</svg>
					</button>
				</div>
			</nav>

			<div className={`relative z-200 ${isOpen ? "" : "hidden"}`}>
				<div
					className={`fixed inset-y-0 bg-background right-0 z-10 w-full px-8 py-4 overflow-y-auto sm:max-w-sm sm:ring-1 sm:ring-neutral/10 transform origin-right transition ease-in-out duration-300`}
				>
					<div className="flex items-center justify-between">
						<Link
							className="flex items-center gap-2 shrink-0"
							title={` homepage`}
							href="/"
						>
							<Image
								alt="Logo"
								src="/logo-trs.png"
								className="max-w-[150px] md:max-w-[200px]"
								width={200}
								height={200}
							/>
						</Link>
						<button
							type="button"
							className="-m-2.5 rounded-md p-2.5"
							onClick={() => setIsOpen(false)}
						>
							<span className="sr-only">Close menu</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-6 h-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>
					</div>

					<div className="flow-root mt-6">
						<div className="py-4">
							<div className="flex flex-col gap-y-4 items-start">
								{links.map((link) => (
									<Link
										href={link.href}
										key={link.href}
										className="link link-hover"
										title={link.label}
									>
										{link.label}
									</Link>
								))}
							</div>
						</div>
						<div className="divider"></div>
						<div className="flex flex-col">
							<Button variant={"accent"}>Try now</Button>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default LandingNavbar;
