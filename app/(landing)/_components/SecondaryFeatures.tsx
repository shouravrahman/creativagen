"use client";

import { useId } from "react";
import Image, { type ImageProps } from "next/image";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import clsx from "clsx";
import { CheckCircleIcon, ClockIcon } from "lucide-react";
import { ChartBarIcon } from "@heroicons/react/20/solid";

import screenshotCasestudy from "/public/screenshotCasestudy.png";
import screenshotAnalytics from "/public/analytics.png";
import screenshotHistory from "/public/history.png";
import SectionHeading from "./SectionHeading.tsx";

interface Feature {
	name: React.ReactNode;
	summary: string;
	description: string;
	image: ImageProps["src"];
	icon: React.ReactNode;
}

const features: Array<Feature> = [
	{
		name: "Content Creation for Developers",
		summary:
			"Generate tailored content such as case studies, LinkedIn posts, and technical documentation.",
		description:
			"Utilize our AI tools to create engaging and informative content that resonates with your audience.",
		image: screenshotCasestudy,
		icon: <CheckCircleIcon className="h-9 w-9" />,
	},
	{
		name: "Analytics Dashboard",
		summary:
			"Monitor your word usage, token consumption, and past generations with ease.",
		description:
			"Gain insights to optimize your content strategy with our analytics dashboard.",
		image: screenshotAnalytics,
		icon: <ChartBarIcon className="h-9 w-9" />,
	},
	{
		name: "Content Scheduling (Beta)",
		summary: "Schedule your content to be published at optimal times.",
		description:
			"Ensure maximum engagement and reach with our content scheduling feature.",
		image: screenshotCasestudy,
		icon: <ClockIcon className="h-9 w-9" />,
	},
];

function Feature({
	feature,
	isActive,
	className,
	...props
}: React.ComponentPropsWithoutRef<"div"> & {
	feature: Feature;
	isActive: boolean;
}) {
	return (
		<div
			className={clsx(
				isActive
					? "bg-accent text-accent-foreground"
					: "bg-card text-card-foreground",
				className,
				"opacity-90 hover:opacity-100",
				"p-4 rounded-lg transition duration-200"
			)}
			{...props}
		>
			<div className="flex items-center gap-x-2">
				<div
					className={clsx(
						"w-9 rounded-lg flex justify-between",
						isActive? "fill-white" : "text-accent"
					)}
				>
					{feature.icon}
				</div>
				<h3
					className={clsx(
						"text-xl font-semibold outline-none"
						// isActive ? "text-black" : "text-gray-700"
					)}
				>
					{feature.name}
				</h3>
			</div>
			<p className="mt-2 font-display text-lg">{feature.summary}</p>
			<p className="my-3 text-sm">{feature.description}</p>
			<Image
				className="mt-4 w-full rounded-lg  shadow-md"
				src={feature.image}
				alt={feature.summary}
				sizes="(max-width: 52.75rem) 100vw, 52.75rem"
			/>
		</div>
	);
}

function FeaturesMobile() {
	return (
		<div className="-mx-4 mt-6 md:mt-10 flex flex-col overflow-hidden space-y-4 px-4 sm:-mx-6 sm:px-6 lg:hidden">
			{features.map((feature) => (
				<div key={feature.summary}>
					<Feature
						feature={feature}
						className="mx-auto max-w-sm"
						isActive
					/>
				</div>
			))}
		</div>
	);
}

function FeaturesDesktop() {
	return (
		<TabGroup className="hidden lg:mt-20 lg:block">
			{({ selectedIndex }) => (
				<>
					<TabList className="grid grid-cols-3 gap-x-6 outline-none">
						{features.map((feature, featureIndex) => (
							<Feature
								key={feature.summary}
								feature={{
									...feature,
									name: (
										<Tab className="">
											<span className="absolute inset-0" />
											{feature.name}
										</Tab>
									),
								}}
								isActive={featureIndex === selectedIndex}
								className="relative p-4 border-2 border-border rounded-lg"
							/>
						))}
					</TabList>
					<TabPanels className="relative mt-10 overflow-hidden rounded-4xl px-14 py-16 xl:px-16">
						<div className="-mx-5 flex">
							{features.map((feature, featureIndex) => (
								<TabPanel
									static
									key={feature.summary}
									className={clsx(
										" px-5 transition duration-500 ease-in-out ui-not-focus-visible:outline-none",
										featureIndex !== selectedIndex &&
											"opacity-60"
									)}
									style={{
										transform: `translateX(-${
											selectedIndex * 100
										}%)`,
									}}
									aria-hidden={featureIndex !== selectedIndex}
								>
									<div className="w-[52.75rem] overflow-hidden rounded-xl ">
										<Image
											className="w-full rounded-lg border-2 p-1 border-accent"
											src={feature.image}
											alt={feature.summary}
											sizes="52.75rem"
										/>
									</div>
								</TabPanel>
							))}
						</div>
						<div className="pointer-events-none absolute inset-0 rounded-4xl ring-1 ring-inset ring-slate-900/10" />
					</TabPanels>
				</>
			)}
		</TabGroup>
	);
}

export function SecondaryFeatures() {
	return (
		<section
			id="secondary-features"
			aria-label="Features for simplifying everyday business tasks"
		>
			<SectionHeading
				mainTitle="Main Features"
				secondaryText="Well everything you need if you aren’t that picky about minor details like tax compliance."
			/>

			<FeaturesMobile />
			<FeaturesDesktop />
		</section>
	);
}
