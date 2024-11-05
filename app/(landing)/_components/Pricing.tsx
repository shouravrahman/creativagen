import { Button } from "@/components/ui/button.tsx";
import clsx from "clsx";
import SectionHeading from "./SectionHeading.tsx";
import { CheckIcon } from "lucide-react";

export function SwirlyDoodle(props: React.ComponentPropsWithoutRef<"svg">) {
	return (
		<svg
			aria-hidden="true"
			viewBox="0 0 281 40"
			preserveAspectRatio="none"
			{...props}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M240.172 22.994c-8.007 1.246-15.477 2.23-31.26 4.114-18.506 2.21-26.323 2.977-34.487 3.386-2.971.149-3.727.324-6.566 1.523-15.124 6.388-43.775 9.404-69.425 7.31-26.207-2.14-50.986-7.103-78-15.624C10.912 20.7.988 16.143.734 14.657c-.066-.381.043-.344 1.324.456 10.423 6.506 49.649 16.322 77.8 19.468 23.708 2.65 38.249 2.95 55.821 1.156 9.407-.962 24.451-3.773 25.101-4.692.074-.104.053-.155-.058-.135-1.062.195-13.863-.271-18.848-.687-16.681-1.389-28.722-4.345-38.142-9.364-15.294-8.15-7.298-19.232 14.802-20.514 16.095-.934 32.793 1.517 47.423 6.96 13.524 5.033 17.942 12.326 11.463 18.922l-.859.874.697-.006c2.681-.026 15.304-1.302 29.208-2.953 25.845-3.07 35.659-4.519 54.027-7.978 9.863-1.858 11.021-2.048 13.055-2.145a61.901 61.901 0 0 0 4.506-.417c1.891-.259 2.151-.267 1.543-.047-.402.145-2.33.913-4.285 1.707-4.635 1.882-5.202 2.07-8.736 2.903-3.414.805-19.773 3.797-26.404 4.829Zm40.321-9.93c.1-.066.231-.085.29-.041.059.043-.024.096-.183.119-.177.024-.219-.007-.107-.079ZM172.299 26.22c9.364-6.058 5.161-12.039-12.304-17.51-11.656-3.653-23.145-5.47-35.243-5.576-22.552-.198-33.577 7.462-21.321 14.814 12.012 7.205 32.994 10.557 61.531 9.831 4.563-.116 5.372-.288 7.337-1.559Z"
			/>
		</svg>
	);
}

function Plan({
	name,
	price,
	description,
	href,
	features,
	featured = false,
}: {
	name: string;
	price: string;
	description: string;
	href: string;
	features: Array<string>;
	featured?: boolean;
}) {
	return (
		<section
			className={clsx(
				"flex flex-col rounded-3xl max-w-sm mx-auto px-6 sm:px-8",
				featured
					? "order-first bg-card py-8 lg:order-none  shadow-sm  "
					: "py-8 shadow-md border border-border"
			)}
		>
			<h3 className="mt-5 font-display text-lg ">{name}</h3>
			<p className={clsx("mt-2 text-base text-card-foreground")}>
				{description}
			</p>
			<p className="order-first font-display text-5xl font-light tracking-tight ">
				{price}
			</p>
			<ul
				role="list"
				className={clsx(
					"order-last mt-10 flex flex-col gap-y-3 text-sm"
				)}
			>
				{features.map((feature) => (
					<li
						key={feature}
						className="flex"
					>
						<CheckIcon
							className={
								featured ? "text-accent" : "text-foreground"
							}
						/>
						<span className="ml-4">{feature}</span>
					</li>
				))}
			</ul>
			<Button
				variant={featured ? "accent" : "link"}
				color="white"
				className="mt-8"
				aria-label={`Get started with the ${name} plan for ${price}`}
			>
				Get started
			</Button>
		</section>
	);
}

export function Pricing() {
	return (
		<section
			id="pricing"
			aria-label="Pricing"
		>
			<SectionHeading
				mainTitle="Pricing"
				secondaryText="It doesn’t matter what size your business is, our software will work well for you."
			/>
			<div className="mt-16 flex flex-col md:flex-row max-w-2xl mx-auto  gap-3 lg:max-w-4xl">
				<Plan
					featured
					name="Unlimited"
					price="$20"
					description="Enjoy unlimited content generation for your business needs."
					href="/register"
					features={[
						"Generate unlimited emails and content",
						"Access to all templates and prompts",
						"Automated content scheduling",
						"Comprehensive usage analytics",
						"Priority support",
					]}
				/>
				<Plan
					name="Custom Quote"
					price="Contact Us"
					description="Get a tailored solution for your enterprise needs."
					href="/contact"
					features={[
						"Custom content generation solutions",
						"Dedicated account manager",
						"API access for automation",
						"Comprehensive analytics and reporting",
						"24/7 support",
					]}
				/>
			</div>
		</section>
	);
}
