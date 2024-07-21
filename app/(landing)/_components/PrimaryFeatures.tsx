"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import clsx from "clsx";

import backgroundImage from "/public/background-features.jpg";
import screenshotExpenses from "/public/payroll.png";
import screenshotPayroll from "/public/payroll.png";
import screenshotReporting from "/public/profit-loss.png";
import screenshotVatReturns from "/public/inventory.png";
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
			"We only sell our software to companies who don't deal with VAT at all, so technically we do all the VAT stuff they need.",
		image: screenshotVatReturns,
	},
	{
		title: "Reporting",
		description:
			"Easily export your data into an Excel spreadsheet where you can do whatever the hell you want with it.",
		image: screenshotReporting,
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
			className="relative overflow-hidden  pb-28 pt-20 sm:py-32"
		>
			{/* <Image
        className="absolute left-1/2 top-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]"
        src={backgroundImage}
        alt=""
        width={2245}
        height={1636}
        unoptimized
      /> */}
			<SectionHeading
				mainTitle="Main Features"
				secondaryText="Well everything you need if you aren’t that picky about minor details
          like tax compliance."
			/>

			<TabGroup
				className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
				vertical={tabOrientation === "vertical"}
			>
				{({ selectedIndex }) => (
					<>
						<div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
							<TabList className="relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
								{features.map((feature, featureIndex) => (
									<div
										key={feature.title}
										className={clsx(
											"group relative rounded-full px-4 py-1 lg:rounded-l-xl lg:rounded-r-none lg:p-6",
											selectedIndex === featureIndex
												? "bg-muted "
												: "hover:bg-primary/10"
										)}
									>
										<h3>
											<Tab
												className={clsx(
													"font-display text-lg outline-none",
													selectedIndex === featureIndex
														? "dark:text-accent text-primary font-bold"
														: "text-foreground "
												)}
											>
												<span className="absolute inset-0  rounded-full lg:rounded-l-xl lg:rounded-r-none" />
												{feature.title}
											</Tab>
										</h3>
										<p
											className={clsx(
												"mt-2 hidden text-sm lg:block",
												selectedIndex === featureIndex
													? "text-primary"
													: "text-foreground group-hover:text-landingpage-text"
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
										<p className="relative mx-auto max-w-2xl text-base  sm:text-center">
											{feature.description}
										</p>
									</div>
									<div className="mt-10 w-[45rem] overflow-hidden rounded-xl  shadow-xl  sm:w-auto lg:mt-0 lg:w-[67.8125rem]">
										<Image
											className="w-full"
											src={feature.image}
											alt=""
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
