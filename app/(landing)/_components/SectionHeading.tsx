import React from "react";
import { SwirlyDoodle } from "./Pricing.tsx";

type Props = { mainTitle: string; secondaryText: string };

const SectionHeading = (props: Props) => {
	return (
		<div className="mx-auto max-w-3xl  text-center">
			<div className="relative whitespace-nowrap">
				<SwirlyDoodle className="absolute left-[40%] -bottom-[35%] h-[2em] w-[200px] fill-accent" />
				<h2 className="relative sm:text-4xl text-3xl font-extrabold text-foreground">
					{props.mainTitle}
				</h2>
			</div>

			{/* <p className="hidden  bg-gradient-to-r from-accent to-black dark:to-white  bg-clip-text pt-4 text-4xl font-semibold tracking-tight text-transparent  lg:inline-block">
        {props.secondaryText}
      </p> */}
			<p className="hidden  pt-4 text-xl  font-semibold   lg:inline-block">
				{props.secondaryText}
			</p>
		</div>
	);
};

export default SectionHeading;
