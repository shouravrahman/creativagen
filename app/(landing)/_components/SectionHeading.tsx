import React from "react";
import { SwirlyDoodle } from "./Pricing.tsx";

type Props = { mainTitle: string; secondaryText: string };

const SectionHeading = (props: Props) => {
  return (
    <div className="mx-auto max-w-3xl  text-center">
      <h2 className="text-2xl">
        <span className="relative whitespace-nowrap">
          <SwirlyDoodle className="absolute -left-[30%] top-1/2 h-[1em] w-full fill-white" />
          <span className="relative">{props.mainTitle}</span>
        </span>
      </h2>
      <p className="hidden bg-gradient-to-br from-blue-800 to-white bg-clip-text pt-4 text-4xl font-semibold tracking-tight text-transparent dark:to-purple-200 lg:inline-block">
        {props.secondaryText}
      </p>
    </div>
  );
};

export default SectionHeading;
