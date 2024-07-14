import React from "react";
import { SwirlyDoodle } from "./Pricing.tsx";

type Props = { mainTitle: string; secondaryText: string };

const SectionHeading = (props: Props) => {
  return (
    <div className="mx-auto max-w-3xl  text-center">
      <h2 className="text-2xl">
        <span className="relative whitespace-nowrap">
          <SwirlyDoodle className="absolute -left-[30%] top-1/2 h-[1em] w-full fill-accent" />
          <span className="relative font-bold">{props.mainTitle}</span>
        </span>
      </h2>
      {/* <p className="hidden  bg-gradient-to-r from-accent to-black dark:to-white  bg-clip-text pt-4 text-4xl font-semibold tracking-tight text-transparent  lg:inline-block">
        {props.secondaryText}
      </p> */}
      <p className="hidden  bg-foreground/60 dark:bg-primary/60  bg-clip-text pt-4 text-4xl font-semibold tracking-tight text-transparent  lg:inline-block">
        {props.secondaryText}
      </p>
    </div>
  );
};

export default SectionHeading;
