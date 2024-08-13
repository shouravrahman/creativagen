"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import clsx from "clsx";

import screenshotExpenses from "/public/payroll.png";
import screenshotPayroll from "/public/payroll.png";

import SectionHeading from "./SectionHeading.tsx";

const features = [
	{
		title: "Payroll",
		description:
			"Keep track of everyone's salaries and whether or not they've been paid. Direct deposit not supported.",
		image: screenshotPayroll,
	},
	{
		title: "Claim expenses",
		description:
			"All of your receipts organized into one place, as long as you don't mind typing in the data by hand.",
		image: screenshotExpenses,
	},
	{
		title: "VAT handling",
		description:
         "We only sell our software to companies who don't deal with VAT at all, we do all the VAT.",
      image: screenshotPayroll,
	},
	{
		title: "Reporting",
		description:
         "Easily export your data into an Excel spreadsheet where you can do whatever you want with it.",
      image: screenshotPayroll,
	},
];

export function PrimaryFeatures() {
	let [tabOrientation, setTabOrientation] = useState<"horizontal" | "vertical">(
		"horizontal"
	);

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
		<section
			id="features"
			aria-label="Features for running your books"
         className="relative overflow-hidden  "
		>

			<SectionHeading
				mainTitle="Main Features"
				secondaryText="Well everything you need if you aren’t that picky about minor details
          like tax compliance."
			/>

			<TabGroup
            className="mt-6 md:mt-10 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 lg:grid-cols-12 lg:pt-0"
				vertical={tabOrientation === "vertical"}
			>
				{({ selectedIndex }) => (
					<>
						<div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
                     <TabList className="relative z-10 flex  whitespace-nowrap mx-auto lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
								{features.map((feature, featureIndex) => (
									<div
										key={feature.title}
										className={clsx(
                                 "group relative rounded-full px-3 py-1 lg:rounded-l-xl lg:rounded-r-none lg:p-6",
											selectedIndex === featureIndex
												? "bg-muted "
												: "hover:bg-primary/10"
										)}
									>
										<h3>
											<Tab
												className={clsx(
                                       "font-display text-sm md:text-lg outline-none",
													selectedIndex === featureIndex
                                          ? "text-accent font-bold"
                                          : "text-foreground font-bold"
												)}
											>
												<span className="absolute inset-0  rounded-full lg:rounded-l-xl lg:rounded-r-none" />
												{feature.title}
											</Tab>
										</h3>
										<p
											className={clsx(
                                    "mt-2 hidden text-base lg:block",
												selectedIndex === featureIndex
													? "text-primary"
                                       : "text-foreground group-hover:text-primary"
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
								<TabPanel key={feature.title} unmount={false}>
									<div className="relative sm:px-6 lg:hidden">
										<div className="absolute -inset-x-4 bottom-[-4.25rem] top-[-6.5rem]  ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl" />
                              <p className="relative mx-auto max-w-2xl px-4 text-base  sm:text-center">
											{feature.description}
										</p>
									</div>
                           <div className="mt-10 w-[45rem] overflow-hidden rounded-xl  shadow-xl  sm:w-auto lg:mt-0 lg:w-[67.8125rem] h-[400px] sm:h-auto">
										<Image
											className="w-full"
											src={feature.image}
                                 alt="feature"
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
