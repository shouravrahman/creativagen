"use client";
import { SwirlyDoodle } from "@/app/(landing)/_components/Pricing";
import SectionHeading from "@/app/(landing)/_components/SectionHeading";
/* eslint-disable @next/next/no-img-element */
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
const featuredTestimonial = {
	body: "CreativaGen has transformed the way I create content. The ease of use and the quality of generated emails have significantly improved my outreach efforts. Highly recommended!",
	author: {
		name: "Brenna Goyette",
		handle: "brennagoyette",
		imageUrl: "/github.svg",
		logoUrl: "/github.svg",
	},
};

 const testimonials = [
		[
			[
				{
					body: "As a freelancer, CreativaGen saves me so much time! I can generate high-quality content in minutes instead of hours. It's a game changer for my business.",
					author: {
						name: "Leslie Alexander",
						handle: "lesliealexander",
						imageUrl: "/github.svg",
					},
				},
				// Additional testimonials can be added here...
			],
			[
				{
					body: "I love how intuitive CreativaGen is! The templates provided are top-notch, and the analytics help me track my engagement. A must-have tool for any marketer.",
					author: {
						name: "Lindsay Walton",
						handle: "lindsaywalton",
						imageUrl: "/github.svg",
					},
				},
				// Additional testimonials can be added here...
			],
		],
		[
			[
				{
					body: "With CreativaGen, I can generate unlimited content effortlessly. The quality of the emails is fantastic, and it has boosted my conversion rates significantly.",
					author: {
						name: "Tom Cook",
						handle: "tomcook",
						imageUrl: "/github.svg",
					},
				},
				// Additional testimonials can be added here...
			],
			[
				{
					body: "The analytics dashboard is incredibly helpful. It provides insights that help me fine-tune my marketing strategy. Highly recommend CreativaGen!",
					author: {
						name: "Leonard Krasner",
						handle: "leonardkrasner",
						imageUrl: "/github.svg",
					},
				},
				// Additional testimonials can be added here...
			],
		],
 ];


function classNames(...classes: string[]) {
   return classes.filter(Boolean).join(" ");
}

export default function Testimonials() {
   const ref = useRef(null);
   const isInview = useInView(ref, { once: true });
   const controls = useAnimation();

   useEffect(() => {
      if (isInview) {
         controls.start("visible");
      }
   }, [isInview]);

   return (
      <div className="relative isolate ">
         <div
            className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
            aria-hidden="true"
         >
            <div
               className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]"
               style={{
                  clipPath:
                     "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
               }}
            />
         </div>
         <div
            className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
            aria-hidden="true"
         >
            <div
               className="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] xl:ml-0 xl:mr-[calc(50%-12rem)]"
               style={{
                  clipPath:
                     "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
               }}
            />
         </div>
         <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* heading */}
            <SectionHeading
               mainTitle="Testimonials"
               secondaryText="We have worked with thousands of amazing people"
            />
            {/* headng end */}
            <div
               ref={ref}
               className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-foreground sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4 px-4 md:px-0"
            >
               <motion.figure
                  className="col-span-2 hidden sm:block sm:rounded-2xl bg-card  sm:shadow-lg sm:ring-1 sm:ring-gray-900/5 xl:col-start-2 xl:row-end-1 border border-border"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2.5 }}
               >
                  <blockquote className="p-12 text-xl font-semibold leading-8 tracking-tight text-foreground">
                     <p>{`“${featuredTestimonial.body}”`}</p>
                  </blockquote>
                  <figcaption className="flex items-center gap-x-4 border-t border-border px-6 py-4">
                     <Image
                        className="rounded-full "
                        src={featuredTestimonial.author.imageUrl}
                        alt={featuredTestimonial.author.name}
                        height={40}
                        width={40}
                     />
                     <div className="flex-auto">
                        <div className="font-semibold">
                           {featuredTestimonial.author.name}
                        </div>
                        <div className="text-foreground/70">{`@${featuredTestimonial.author.handle}`}</div>
                     </div>
                     <Image
                        className="rounded-full "
                        src={featuredTestimonial.author.logoUrl}
                        alt={featuredTestimonial.author.name}
                        height={40}
                        width={40}
                     />
                  </figcaption>
               </motion.figure>
               {testimonials.map((columnGroup, columnGroupIdx) => (
                  <div
                     key={columnGroupIdx}
                     className="space-y-8 xl:contents xl:space-y-0"
                  >
                     {columnGroup.map((column, columnIdx: number) => (
                        <div
                           key={columnIdx}
                           className={classNames(
                              (columnGroupIdx === 0 && columnIdx === 0) ||
                                 (columnGroupIdx === testimonials.length - 1 &&
                                    columnIdx === columnGroup.length - 1)
                                 ? "xl:row-span-2"
                                 : "xl:row-start-1",
                              "space-y-8"
                           )}
                        >
                           {column.map((testimonial, i) => (
                              <motion.figure
                                 key={testimonial.author.handle}
                                 className="rounded-2xl  bg-card p-6 shadow-lg ring-1 ring-gray-900/5 border border-border"
                                 variants={{
                                    hidden: { opacity: 0, translateX: 90 },
                                    visible: { opacity: 1, translateX: 0 },
                                 }}
                                 transition={{
                                    type: "spring",
                                    duration: 0.3,
                                    damping: 8,
                                    delay: i * 0.1,
                                    stiffness: 80,
                                 }}
                                 initial="hidden"
                                 animate={controls}
                              >
                                 <blockquote className="text-foreground">
                                    <p>{`“${testimonial.body}”`}</p>
                                 </blockquote>
                                 <figcaption className="mt-6 flex items-center gap-x-4">
                                    <Image
                                       className=" rounded-full "
                                       src={testimonial.author.imageUrl}
                                       alt={testimonial.author.name}
                                       height={40}
                                       width={40}
                                    />
                                    <div>
                                       <div className="font-semibold">
                                          {testimonial.author.name}
                                       </div>
                                       <div className="text-foreground/70">{`@${testimonial.author.handle}`}</div>
                                    </div>
                                 </figcaption>
                              </motion.figure>
                           ))}
                        </div>
                     ))}
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
}
