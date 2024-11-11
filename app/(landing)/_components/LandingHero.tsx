import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import hero from "../../../public/heross.png";

export const LandingHero = () => {
	// const user = await currentUser();
	return (
		<div className="h-full  font-bold  px-4 flex flex-col items-center justify-around gap-10 md:gap-6 space-y-2 sm:-mt-10">
			<section className="flex flex-col  items-center lg:justify-around gap-4 md:gap-6">
				<div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl w-full mx-auto text-center space-y-5 font-extrabold">
					<h1>The Best AI Tool for</h1>
					{/* <Typewriter /> */}
					Developers Content
				</div>
				<div className="text-sm md:text-xl font-light ">
					Create Better content using AI 10x faster.
				</div>
				<div>
					<Link href={"/dashboard"}>
						<Button
							variant="destructive"
							className="md:text-lg p-4 md:p-6 rounded-full font-semibold"
						>
							Start Generating For Free
						</Button>
					</Link>
				</div>
				<div className="text-accent text-xs md:text-sm font-normal">
					No payment required.
				</div>
			</section>
			<div className="relative image-fade">
				<Image
					src={hero}
					alt="hero"
					className="w-[450px] sm:w-[600px] md:w-[750px] lg:w-[1000px] h-auto rounded-2xl  border border-accent text-center"
					priority
					sizes="(min-width: 1024px) 1000px, (min-width: 640px) 600px,(min-width: 768px) 750px, 450px"
				/>
			</div>
		</div>
	);
};
