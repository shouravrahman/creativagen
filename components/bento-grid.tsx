"use client";
/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
	motion,
	useAnimation,
	useInView,
	useScroll,
	useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";
const gridData = [
	{
		img: "/feat.jpg",
		title: "Code Generation:",
		desc: "Instantly generate code snippets tailored to your needs.",
		bgClass: "bg-gradient-to-r from-[#151922] via-[#031436] to-[#0e1e38]",
	},
	{
		img: "/feat.jpg",
		title: "Music Composition:",
		desc: "Let your creativity flow with AI-generated music compositions.",
		bgClass: "bg-gradient-to-r from-[#171f2e] via-[#15181b] to-[#0e131f]",
	},
	{
		img: "/feat.jpg",
		title: "Image Synthesis:",
		desc: "Transform ideas into visuals with AI-created images.",
		bgClass: "bg-gradient-to-r from-[#313d52] via-[#0e131f] to-[#000000]",
	},
	{
		img: "/feat.jpg",
		title: "Video Creation:",
		desc: "Generate dynamic content for presentations, social media, and more.",
		bgClass: "bg-gradient-to-r from-[#0e131f] via-[#111318] to-[#1e2838]",
	},
	{
		img: "/feat.jpg",
		title: "Product Descriptions:",
		desc: "Increase engagement and conversion with persuasive content.",
		bgClass: "bg-gradient-to-r from-[#0e131f] via-[#171d2b] to-[#0e131f]",
	},
	{
		img: "/feat.jpg",
		title: "Constant Innovation:",
		desc: "Join us on a journey of continuous improvement and expansion.",
		bgClass: "bg-gradient-to-r from-[#1c1c1d] via-[#04070c] to-[#242d41]",
	},
];
export function BentoGrid() {
	const ref = useRef(null);
	const isInview = useInView(ref, { once: true });
	const controls = useAnimation();

	useEffect(() => {
		if (isInview) {
			controls.start("visible");
		}
	}, [isInview]);

	return (
		<div className='rounded-2xl'>
			<header className='flex h-20 w-full shrink-0 items-center px-4 md:px-6' />
			<div className='mx-auto max-w-xl text-center mb-2'>
				<h2 className='text-lg font-semibold leading-8 tracking-tight text-indigo-600'>
					Features
				</h2>
				<p className='mt-2 text-3xl font-bold tracking-tight text-zinc-400 sm:text-4xl'>
					Join us on a journey of continuous improvement and expansion.
				</p>
			</div>
			<main className='max-w-[80dvw] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-8 md:p-6 mt-16'>
				{gridData.map((data, i) => (
					<motion.div
						ref={ref}
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
						initial='hidden'
						animate={controls}
						key={i}
						className={`${
							data.bgClass
						} overflow-hidden flex flex-col justify-around shadow-lg row-span-1 rounded-2xl border outline-none border-slate-400/10 bg-neutral-100 p-4 dark:bg-neutral-900 ${
							i === 3 || i === 6 ? "md:col-span-2" : ""
						} ${i === 2 ? "md:col-span-2" : ""}`}
					>
						{" "}
						<div className='relative '>
							<Image
								alt='Placeholder'
								className=' w-full mask-image rounded-md'
								height='200'
								src={data.img}
								style={{
									aspectRatio: "300/200",
									objectFit: "cover",
								}}
								width='300'
							/>
							<div className='mask-layer' />
						</div>
						<div>
							<div className='px-6 py-4'>
								<h1 className='font-bold text-xl mb-2 text-white'>
									{data.title}
								</h1>
								<p className='text-zinc-400 text-base'>{data.desc}</p>
							</div>
							<div className='px-6 pt-4 pb-2'>
								<Button className='rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'>
									Learn More
								</Button>
							</div>
						</div>
					</motion.div>
				))}
			</main>
		</div>
	);
}
