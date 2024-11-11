"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import clsx from "clsx";

import screenshotCasestudy from "/public/screenshotCasestudy.png";
import screenshotAnalytics from "/public/analytics.png";
import screenshotHistory from "/public/history.png";

import SectionHeading from "./SectionHeading.tsx";

const features = [
	{
		title: "AI-Powered Case Study Generation",
		description:
			"Generate comprehensive case studies that highlight your projects, challenges, and solutions effectively.",
		image: screenshotCasestudy,
	},
	{
		title: "History",
		description:
			"Keep track of all your generated content and access previous versions easily.",
		image: screenshotHistory,
	},
	{
		title: "Analytics Dashboard",
		description:
			"Monitor your word usage, token consumption, and past generations with ease. Gain insights to optimize your content strategy.",
		image: screenshotAnalytics,
	},
	{
		title: "Content Scheduling (Beta)",
		description:
			"Schedule your content to be published at optimal times, ensuring maximum engagement and reach.",
		image: screenshotCasestudy,
	},
];

export function PrimaryFeatures() {
	let [tabOrientation, setTabOrientation] = useState<"horizontal" | "vertical">("horizontal");

	useEffect(() => {
		let lgMediaQuery = window.matchMedia("(min-width: 1024px)");

		function onMediaQueryChange({ matches }: { matches: boolean }) {
			setTabOrientation(matches ? "vertical" : "horizontal");
		}

		onMediaQueryChange(lgMediaQuery);
		lgMediaQuery.addEventListener("change", onMediaQueryChange);

		return () => {
			lgMediaQuery.removeEventListener("change", onMediaQueryChange);
		};
	}, []);

	return (
		<section id="features" aria-label="Features for running your books" className="relative overflow-hidden">
			<SectionHeading
				mainTitle="Main Features"
				secondaryText="Well everything you need if you aren’t that picky about minor details like tax compliance."
			/>

			<TabGroup
				className="mt-6 md:mt-10 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 lg:grid-cols-12 lg:pt-0"
				vertical={tabOrientation === "vertical"}
			>
				{({ selectedIndex }) => (
					<>
                  <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5 ">
                     <TabList className="relative z-10 flex whitespace-nowrap mx-auto lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
								{features.map((feature, featureIndex) => (
									<div
										key={feature.title}
										className={clsx(
                                 "px-6 py-3  group relative rounded-full lg:rounded-l-xl lg:rounded-r-none lg:p-6",
											selectedIndex === featureIndex ? "bg-muted" : "hover:bg-primary/10"
										)}
									>
										<h3>
											<Tab
												className={clsx(
													"font-display text-sm md:text-lg outline-none",
													selectedIndex === featureIndex ? "text-accent font-bold" : "text-foreground font-bold"
												)}
											>
												<span className="absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none" />
												{feature.title}
											</Tab>
										</h3>
										<p
											className={clsx(
												"mt-2 hidden text-base lg:block",
												selectedIndex === featureIndex ? "text-foreground" : "text-foreground/50 group-hover:text-accent"
											)}
										>
											{feature.description}
										</p>
									</div>
								))}
							</TabList>
						</div>
						<TabPanels className="lg:col-span-7">
							{features.map((feature) => (
                        <TabPanel key={feature.title} unmount={false} className="h-auto sm:h-[400px] "> {/* Adjusted height for responsiveness */}
                           <div className="relative sm:px-6 lg:hidden ">
										<div className="absolute -inset-x-4 bottom-[-4.25rem] top-[-6.5rem] ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl" />
										<p className="relative mx-auto max-w-2xl px-4 text-base sm:text-center">
											{feature.description}
										</p>
									</div>
									<div className="mt-10 w-full overflow-hidden rounded-xl sm:w-auto lg:mt-0 lg:w-full h-auto sm:h-auto">
										<Image
											className="w-full object-cover h-full"
											src={feature.image}
											alt={feature.title}
											priority
											sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
										/>
									</div>
								</TabPanel>
							))}
						</TabPanels>
					</>
				)}
			</TabGroup>
		</section>
	);
}
