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
const menu = [
   { label: "Profile", href: '/profile' }
]

// A header with a logo on the left, links in the center (like Pricing, etc...), and a CTA (like Get Started or Login) on the right.
// The header is responsive, and on mobile, the links are hidden behind a burger button.
const LandingNavbar = () => {
   const searchParams = useSearchParams();
   const [isOpen, setIsOpen] = useState<boolean>(false);
   const { data: session } = useSession()
   // setIsOpen(false) when the route changes (i.e: when the user clicks on a link on mobile)
   useEffect(() => {
      setIsOpen(false);
   }, [searchParams]);

   return (
      <header className="">
         <nav
            className="container flex items-center justify-between px-2 py-2 md:px-8 md:py-6 mx-auto"
            aria-label="Global"
         >
            {/* Your logo/name on large screens */}
            <div className="flex lg:flex-1">
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
            </div>
            {/* Burger button to open menu on mobile */}
            <div className="flex lg:hidden">
               <button
                  type="button"
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
                  onClick={() => setIsOpen(true)}
               >
                  <span className="sr-only">Open main menu</span>
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     strokeWidth={1.5}
                     stroke="currentColor"
                     className="w-6 h-6 text-base-content"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                     />
                  </svg>
               </button>
            </div>

            {/*  links on large screens */}
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
            {
               session?.user ?
                  (<div className="lg:flex lg:justify-end lg:flex-1">
                     <IconDropdown menu={menu} img={session?.user?.image !== null ? session?.user?.image : "/avatar.svg"} />
                  </div>)
                  :
                  (<div className="hidden lg:flex lg:justify-end lg:flex-1">
                     <Button variant={"outline"} size={"lg"}>
                        <Link href={'/login'}>
                           Try now
                        </Link>
                     </Button>
                  </div>)
            }


         </nav>

         {/* Mobile menu, show/hide based on menu state. */}
         <div className={`relative z-200 ${isOpen ? "" : "hidden"}`}>
            <div
               className={`fixed inset-y-0 bg-background right-0 z-10 w-full px-8 py-4 overflow-y-auto  sm:max-w-sm sm:ring-1 sm:ring-neutral/10 transform origin-right transition ease-in-out duration-300`}
            >
               {/* Your logo/name on small screens */}
               <div className="flex items-center justify-between">
                  <Link
                     className="flex items-center gap-2 shrink-0 "
                     title={` homepage`}
                     href="/"
                  >
                     {/* <Image
								src={logo}
								alt={`${config.appName} logo`}
								className="w-8"
								placeholder="blur"
								priority={true}
								width={32}
								height={32}
							/> */}
                     <Image
                        alt="Logo"
                        src="/logo-trs.png"
                        className=""
                        width={200}
                        height={200}
                     />
                     {/* <span className="font-extrabold text-lg">{config.appName}</span> */}
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

               {/* Your links on small screens */}
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
                  {/* Your CTA on small screens */}
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

// const font = Montserrat({ weight: "600", subsets: ["latin"] });

// export const LandingNavbar = async () => {
// 	const user = await currentUser();

// 	return (
// 		<nav className="px-8 bg-transparent flex items-center justify-between">
// 			<Link href="/" className="flex items-center">
// 				<div className="relative h-28 w-44 pt-3 mr-4">
// 					<Image
// 						alt="Logo"
// 						src="/logo-trs.png"
// 						className=""
// 						width={200}
// 						height={200}
// 					/>
// 				</div>
// 			</Link>
// 			<div className="flex items-center gap-x-2">
// 				<ThemeSwitch />
// 				<Link href={user ? "/dashboard" : "/register"}>
// 					<Button variant="default" className="rounded-full">
// 						Get Started
// 					</Button>
// 				</Link>
// 			</div>
// 		</nav>
// 	);
// };
