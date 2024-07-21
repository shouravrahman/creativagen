import {
	BuildingOffice2Icon,
	EnvelopeIcon,
	PhoneIcon,
} from "@heroicons/react/24/outline";
import { Button } from "./ui/button.tsx";

export default function Contact() {
	return (
		<div className="relative isolate">
			<div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
				<div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
					<div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
						<div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden">
							<svg
								className="absolute inset-0 h-full w-full stroke-yellow-700 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
								aria-hidden="true"
							>
								<defs>
									<pattern
										id="54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2"
										width={200}
										height={200}
										x="100%"
										y={-1}
										patternUnits="userSpaceOnUse"
									>
										<path d="M130 200V.5M.5 .5H200" fill="none" />
									</pattern>
								</defs>

								<rect
									width="100%"
									height="100%"
									strokeWidth={0}
									fill="url(#54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2)"
								/>
							</svg>
							<div
								className="absolute -left-56 top-[calc(100%-13rem)] transform-gpu blur-3xl lg:left-[max(-14rem,calc(100%-59rem))] lg:top-[calc(50%-7rem)]"
								aria-hidden="true"
							>
								<div
									className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-br from-[#c7ec61] to-[#78f83c9c] opacity-20"
									style={{
										clipPath:
											"polygon(74.1% 56.1%, 100% 38.6%, 97.5% 73.3%, 85.5% 100%, 80.7% 98.2%, 72.5% 67.7%, 60.2% 37.8%, 52.4% 32.2%, 47.5% 41.9%, 45.2% 65.8%, 27.5% 23.5%, 0.1% 35.4%, 17.9% 0.1%, 27.6% 23.5%, 76.1% 2.6%, 74.1% 56.1%)",
									}}
								/>
							</div>
						</div>

						<h2 className="hidden bg-gradient-to-br from-yellow-800 to-black bg-clip-text pt-4 text-5xl font-semibold tracking-tight text-transparent dark:to-white lg:inline-block">
							We&apos;d love to hear from you.
						</h2>
						<p className="mt-6 text-lg leading-8 ">
							Please use the contact details below or fill out the form to reach
							out to us.
						</p>
						<dl className="mt-10 space-y-4 text-base leading-7 ">
							<div className="flex gap-x-4">
								<dt className="flex-none">
									<span className="sr-only">Email</span>
									<EnvelopeIcon className="h-7 w-6 " aria-hidden="true" />
								</dt>
								<dd>
									<a
										className="hover:text-white"
										href="mailto:hello@example.com"
									>
										hello@example.com
									</a>
								</dd>
							</div>
						</dl>
					</div>
				</div>
				<form
					action="#"
					method="POST"
					className="px-10 pt-10 bg-card z-100 rounded-lg"
				>
					<div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 ">
						<div>
							<label
								htmlFor="first-name"
								className="block text-sm font-semibold leading-6 text-landingpage-text"
							>
								First name
							</label>
							<div className="mt-2.5">
								<input
									type="text"
									name="first-name"
									id="first-name"
									autoComplete="given-name"
									className="block w-full rounded-md border-0 dark:bg-foreground bg-primary/10 px-3.5 py-2 text-landingpage-text shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-yellow-200 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>
						<div>
							<label
								htmlFor="last-name"
								className="block text-sm font-semibold leading-6 text-landingpage-text"
							>
								Last name
							</label>
							<div className="mt-2.5">
								<input
									type="text"
									name="last-name"
									id="last-name"
									autoComplete="family-name"
									className="block w-full rounded-md border-0 dark:bg-foreground bg-primary/10 px-3.5 py-2 text-landingpage-text shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-yellow-200 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>
						<div className="sm:col-span-2">
							<label
								htmlFor="email"
								className="block text-sm font-semibold leading-6 text-landingpage-text"
							>
								Email
							</label>
							<div className="mt-2.5">
								<input
									type="email"
									name="email"
									id="email"
									autoComplete="email"
									className="block w-full rounded-md border-0 dark:bg-foreground bg-primary/10 px-3.5 py-2 text-landingpage-text shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-yellow-200 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>
						<div className="sm:col-span-2">
							<label
								htmlFor="phone-number"
								className="block text-sm font-semibold leading-6 text-landingpage-text"
							>
								Phone number
							</label>
							<div className="mt-2.5">
								<input
									type="tel"
									name="phone-number"
									id="phone-number"
									autoComplete="tel"
									className="block w-full rounded-md border-0 dark:bg-foreground bg-primary/10 px-3.5 py-2 text-landingpage-text shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-yellow-200 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>
						<div className="sm:col-span-2">
							<label
								htmlFor="message"
								className="block text-sm font-semibold leading-6 text-landingpage-text"
							>
								Message
							</label>
							<div className="mt-2.5">
								<textarea
									name="message"
									id="message"
									rows={4}
									className="block w-full rounded-md border-0 dark:bg-foreground bg-primary/10 px-3.5 py-2 text-landingpage-text shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-yellow-200 sm:text-sm sm:leading-6"
									defaultValue={""}
								/>
							</div>
						</div>
					</div>
					<div className="mt-8 flex justify-end">
						<Button
							variant="accent"
							className="md:text-lg p-4 md:p-6 rounded-full font-semibold"
						>
							Send Message
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
}
