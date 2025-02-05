import Image from "next/image";
import Link from "next/link";

const navigation = {
	solutions: [
		{ name: "Marketing", href: "#" },
		{ name: "Analytics", href: "#" },
		{ name: "Commerce", href: "#" },
		{ name: "Insights", href: "#" },
	],
	support: [
		{ name: "Pricing", href: "#" },
		{ name: "Documentation", href: "#" },
		{ name: "Guides", href: "#" },
		{ name: "API Status", href: "#" },
	],
	company: [
		{ name: "About", href: "#" },
		{ name: "Blog", href: "#" },
	],
	legal: [
		{ name: "Privacy", href: "#" },
		{ name: "Terms", href: "#" },
	],
};

export default function Footer() {
	return (
		<footer className="" aria-labelledby="footer-heading">
			<h2 id="footer-heading" className="sr-only">
				Footer
			</h2>
         <div className="mx-auto max-w-7xl px-6 ">
				<div className="xl:grid xl:grid-cols-3 xl:gap-8">
               <Link
                  className="flex items-center gap-2 shrink-0 h-20"
                  href="/"
                  title={` homepage`}
               >

                  <Image
                     alt="Logo"
                     src="/logo.png"
                     className="invert dark:invert-0"
                     width={200}
                     height={100}
                  />

               </Link>
					<div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
						<div className="md:grid md:grid-cols-2 md:gap-8">
							<div>
                        <h3 className="text-sm font-semibold leading-6 text-foreground">
									Solutions
								</h3>
								<ul role="list" className="mt-6 space-y-4">
									{navigation.solutions.map((item) => (
										<li key={item.name}>
											<a
												href={item.href}
                                    className="text-sm leading-6 text-foreground hover:text-accent
												hover:text-semibold
												"
											>
												{item.name}
											</a>
										</li>
									))}
								</ul>
							</div>
							<div className="mt-10 md:mt-0">
                        <h3 className="text-sm font-semibold leading-6 text-foreground">
									Support
								</h3>
								<ul role="list" className="mt-6 space-y-4">
									{navigation.support.map((item) => (
										<li key={item.name}>
											<a
												href={item.href}
                                    className="text-sm leading-6 text-foreground hover:text-accent
												hover:text-semibold
												"
											>
												{item.name}
											</a>
										</li>
									))}
								</ul>
							</div>
						</div>
						<div className="md:grid md:grid-cols-2 md:gap-8">
							<div>
                        <h3 className="text-sm font-semibold leading-6 text-foreground">
									Company
								</h3>
								<ul role="list" className="mt-6 space-y-4">
									{navigation.company.map((item) => (
										<li key={item.name}>
											<a
												href={item.href}
                                    className="text-sm leading-6 text-foreground hover:text-accent
												hover:text-semibold
												"
											>
												{item.name}
											</a>
										</li>
									))}
								</ul>
							</div>
							<div className="mt-10 md:mt-0">
                        <h3 className="text-sm font-semibold leading-6 text-foreground">
									Legal
								</h3>
								<ul role="list" className="mt-6 space-y-4">
									{navigation.legal.map((item) => (
										<li key={item.name}>
											<a
												href={item.href}
                                    className="text-sm leading-6 text-foreground hover:text-accent
												hover:text-semibold
												"
											>
												{item.name}
											</a>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
