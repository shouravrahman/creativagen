"use client";

import { useId } from "react";
import Image, { type ImageProps } from "next/image";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import clsx from "clsx";
import { Calendar, CheckCircleIcon, ClockIcon, LayoutTemplateIcon } from "lucide-react";
import { ChartBarIcon } from "@heroicons/react/20/solid";

import planner from "/public/planner.png";
import heroImage from "/public/heroImage.png";
import imageGen from "/public/imageGen.png";
import SectionHeading from "./SectionHeading.tsx";
import { FcPicture } from "react-icons/fc";

interface Feature {
	name: React.ReactNode;
	summary: string;
	description: string;
	image: ImageProps["src"];
	icon: React.ReactNode;
}

const features: Array<Feature> = [
   {
      name: "AI-Powered Content Templates",
      summary: "Streamline your content creation with intelligent, context-aware templates.",
      description: "Access a comprehensive library of pre-configured templates spanning multiple content types. From technical documentation to marketing materials, our AI-driven templates adapt to your specific needs, reducing writing time and enhancing content quality.",
      image: heroImage,
      icon: <LayoutTemplateIcon className="h-9 w-9" />,
   },
   {
      name: "Content Planner & Scheduler",
      summary: "Strategic content management with intelligent scheduling.",
      description: "Optimize your content strategy with an advanced planner that suggests ideal publishing times, tracks content performance, and helps you maintain a consistent publishing rhythm across multiple platforms.",
      image: planner,
      icon: <Calendar className="h-9 w-9" />,
   },
   {
      name: "AI Image Generation",
      summary: "Create custom visuals that complement your content instantly.",
      description: "Generate unique, professional-quality images tailored to your content's context. Our AI understands your narrative and produces visually compelling graphics that enhance engagement and storytelling.",
      image: imageGen,
      icon: <FcPicture className="h-9 w-9" />,
   }
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
               ? "bg-accent/80 text-accent-foreground"
					: "bg-card text-card-foreground",
				className,
				"opacity-90 hover:opacity-100",
            "w-full p-4 rounded-lg transition duration-200 flex-col flex justify-between"
			)}
			{...props}
		>
         <div className="flex   items-center gap-x-2">
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
            className="mt-4 w-full rounded-lg  shadow-sm"
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
                        className="relative p-6 border-2 border-border rounded-lg"
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
