"use client";

import { useId } from "react";
import Image, { type ImageProps } from "next/image";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import clsx from "clsx";

import screenshotContacts from "/public/contacts.png";
import screenshotInventory from "/public/inventory.png";
import screenshotProfitLoss from "/public/profit-loss.png";
import SectionHeading from "./SectionHeading.tsx";

interface Feature {
	name: React.ReactNode;
	summary: string;
	description: string;
	image: ImageProps["src"];
	icon: React.ComponentType;
}

const features: Array<Feature> = [
	{
		name: "Copywriting Assistant",
		summary: "Craft high-converting copy in seconds with our AI tools.",
		description:
			"Transform your ideas into powerful marketing copy with our intuitive AI copywriting assistant. Perfect for ads, blogs, and more.",
		image: screenshotProfitLoss, // Use a relevant screenshot for copywriting
		icon: function CopywritingIcon() {
			return (
				<>
					<path
						opacity=".5"
						d="M12 4h24v8H12V4zm0 12h24v8H12v-8zm-4 0H0v8h8v-8z"
						fill="#fff"
					/>
					<path
						d="M0 2h24v8H0V2zm0 12h24v8H0v-8z"
						fill="#fff"
					/>
				</>
			);
		},
	},
	{
		name: "Social Media Content",
		summary: "Generate engaging posts for various platforms effortlessly.",
		description:
			"Create customized social media posts that capture attention and drive engagement. Schedule your content for optimal impact.",
		image: screenshotProfitLoss, // Use a relevant screenshot for social media
		icon: function SocialMediaIcon() {
			return (
				<>
					<path
						opacity=".5"
						d="M10 2h4v8h-4V2zm0 10h4v8h-4v-8z"
						fill="#fff"
					/>
					<path
						d="M4 2h4v8H4V2zm0 10h4v8H4v-8z"
						fill="#fff"
					/>
				</>
			);
		},
	},
	{
		name: "Analytics Dashboard",
		summary:
			"Monitor your usage and performance with insightful analytics.",
		description:
			"Access a comprehensive dashboard to view analytics on words, tokens, and previous generations. Make data-driven decisions to improve your content strategy.",
		image: screenshotProfitLoss, // Use a relevant screenshot for the analytics dashboard
		icon: function AnalyticsIcon() {
			return (
				<>
					<path
						opacity=".5"
						d="M2 20h24v4H2v-4z"
						fill="#fff"
					/>
					<path
						d="M8 10h4v10H8V10zm6 0h4v10h-4V10zm6 0h4v10h-4V10z"
						fill="#fff"
					/>
				</>
			);
		},
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
            isActive && "bg-accent text-background",
				className,
            !isActive && "opacity-90 hover:opacity-100",
            "p-6 rounded-lg"
			)}
			{...props}
		>
         <div className="flex items-center gap-x-2">
            <div
               className={clsx(
                  "w-9 rounded-lg flex justify-between",
                  isActive ? "bg-accent" : "bg-secondary "
               )}
            >
               <svg aria-hidden="true" className="h-9 w-9" fill="none">
                  <feature.icon />
               </svg>
            </div>
            <h3
               className={clsx(
                  " text-xl font-semibold outline-none",
                  isActive ? "text-foreground dark:text-black" : "text-primary"
               )}
            >
               {feature.name}
            </h3>
         </div>
			<p className="mt-2 font-display  text-lg ">{feature.summary}</p>
			<p className="mt-4 text-sm ">{feature.description}</p>
		</div>
	);
}

function FeaturesMobile() {
	return (
      <div className="-mx-4 mt-6 md:mt-10 flex flex-col  overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden">
			{features.map((feature) => (
				<div key={feature.summary}>
               <Feature feature={feature} className="mx-auto max-w-sm" isActive />
               <div className="relative  pb-10">
						<div className="absolute -inset-x-4 bottom-0 top-8  sm:-inset-x-6" />
                  <div className="hidden md:block relative mx-auto w-[52.75rem] overflow-hidden rounded-xl">
							<Image
								className="w-full"
								src={feature.image}
                        alt={feature.summary}
								sizes="52.75rem"
							/>
						</div>
					</div>
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
					<TabList className="grid grid-cols-3 gap-x-6">
						{features.map((feature, featureIndex) => (
							<Feature
								key={feature.summary}
								feature={{
									...feature,
									name: (
										<Tab className="outline-none">
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
					<TabPanels className="relative mt-20 overflow-hidden rounded-4xl  px-14 py-16 xl:px-16">
						<div className="-mx-5 flex">
							{features.map((feature, featureIndex) => (
								<TabPanel
									static
									key={feature.summary}
									className={clsx(
										"px-5 transition duration-500 ease-in-out ui-not-focus-visible:outline-none",
										featureIndex !== selectedIndex && "opacity-60"
									)}
									style={{ transform: `translateX(-${selectedIndex * 100}%)` }}
									aria-hidden={featureIndex !== selectedIndex}
								>
									<div className="w-[52.75rem] overflow-hidden rounded-xl  shadow-lg shadow-slate-900/5 ">
										<Image
											className="w-full"
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
				mainTitle="Need More?"
				secondaryText="Because you’d probably be a little confused if we suggested you
          complicate your everyday business tasks instead."
			/>

			<FeaturesMobile />
			<FeaturesDesktop />
		</section>
	);
}
