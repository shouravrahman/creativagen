"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const font = Montserrat({ weight: "600", subsets: ["latin"] });

export const LandingNavbar = () => {
	const { isSignedIn } = useAuth();

	return (
		<nav className='px-8 bg-transparent flex items-center justify-between'>
			<Link href='/' className='flex items-center'>
				<div className='relative h-28 w-44 pt-3 mr-4'>
					<Image
						alt='Logo'
						src='/logo-trs.png'
						layout='fill' // Set the layout to fill for responsiveness
						objectFit='contain' // Choose the object fit based on your design requirements
					/>
				</div>
			</Link>
			<div className='flex items-center gap-x-2'>
				<Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
					<Button variant='outline' className='rounded-full'>
						Get Started
					</Button>
				</Link>
			</div>
		</nav>
	);
};
