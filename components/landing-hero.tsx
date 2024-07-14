"use client";

import TypewriterComponent from "typewriter-effect";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import { motion, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const LandingHero = () => {
  const { isSignedIn } = useUser();
  return (
    <div className=" text-primary dark:text-white font-bold md:my-4 lg:my-10 py-2 md:py-8 px-8 flex flex-col-reverse md:flex-col items-center justify-around gap-10 md:gap-6 space-y-2 ">
      <section className="flex flex-col  items-center lg:justify-around gap-2 md:gap-6">
        <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl w-full mx-auto text-center space-y-5 font-extrabold">
          <h1>The Best AI Tool for</h1>
          <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            <TypewriterComponent
              options={{
                strings: [
                  "Chatbot.",
                  "Photo Generation.",
                  "Blog Writing.",
                  "Mail Writing.",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
        <div className="text-sm md:text-xl font-light text-zinc-400">
          Create content using AI 10x faster.
        </div>
        <div>
          <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
            <Button
              variant="destructive"
              className="md:text-lg p-4 md:p-6 rounded-full font-semibold"
            >
              Start Generating For Free
            </Button>
          </Link>
        </div>
        <div className="text-zinc-400 text-xs md:text-sm font-normal">
          No credit card required.
        </div>
      </section>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.5 }}
        className="relative "
      >
        <Image
          src="/hero.png"
          height={800}
          width={1000}
          alt="hero"
          className="rounded-2xl p-2 border border-slate-400/10 text-center"
          layout="responsive"
        />
      </motion.div>
    </div>
  );
};
