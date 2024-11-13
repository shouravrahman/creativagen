import SectionHeading from "@/app/(landing)/_components/SectionHeading";
import {
	ArrowPathIcon,
	CloudArrowUpIcon,
	Cog6ToothIcon,
	FingerPrintIcon,
	LockClosedIcon,
	ServerIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";

const features = [
	{
		name: "Instant Email Deployment",
		description:
			"Quickly generate and deploy personalized emails with just a click. Streamline your communication process.",
		icon: CloudArrowUpIcon, // You can keep this or change it to a more fitting icon
	},
	{
		name: "Secure SSL Integration",
		description:
			"Ensure the security of your generated content with SSL certificates, keeping your data safe and encrypted.",
		icon: LockClosedIcon, // This is suitable for security
	},
	{
		name: "Effortless Content Queues",
		description:
			"Manage your content effortlessly with simple queues. Organize your generated emails and posts for easy access.",
		icon: ArrowPathIcon, // This could represent the idea of organization or flow
	},
	{
		name: "Robust Security Features",
		description:
			"Protect your sensitive data with advanced security measures. We prioritize your privacy and content integrity.",
		icon: FingerPrintIcon, // A good choice for security
	},
	{
		name: "Powerful API Integration",
		description:
			"Easily integrate with other tools and platforms using our robust API, allowing for seamless automation.",
		icon: Cog6ToothIcon, // Suitable for API functionality
	},
	{
		name: "Automated Database Backups",
		description:
			"Automatically back up your content and data to ensure nothing is lost, providing peace of mind.",
		icon: ServerIcon, // This icon represents storage and backups well
	},
];


export default function Features() {
	return (
		<div className="">
			<SectionHeading
				mainTitle="Everything you need"
				secondaryText="Lorem ipsum, dolor sits suscipit eaque, iste dolor cupiditate blanditiis.

"
			/>
			<div className="relative overflow-hidden pt-16">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<Image
						src="/inventory.png"
						alt="App screenshot"
						className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-white/10"
						width={2000}
						height={500}
					/>
					<div className="relative" aria-hidden="true">
						<div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-gray-900 pt-[7%]" />
					</div>
				</div>
			</div>
			<div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
				<dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7  sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
					{features.map((feature) => (
						<div key={feature.name} className="relative pl-9">
                     <dt className="inline font-semibold   ">
								<feature.icon
									className="absolute left-1 top-1 h-5 w-5 text-indigo-500"
									aria-hidden="true"
								/>
								{feature.name}
							</dt>{" "}
							<dd className="inline">{feature.description}</dd>
						</div>
					))}
				</dl>
			</div>
		</div>
	);
}
