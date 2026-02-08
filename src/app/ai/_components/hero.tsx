"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { BorderBeam } from "@/components/ui/border-beam";
import { DotPattern } from "@/components/ui/dot-pattern";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { cn } from "@/lib/utils";
import { SKOOL_URL, HERO_VIDEO_URL } from "@/lib/constants/links";

const headlines = [
  "a $50K/mo AI business",
  "your AI content engine",
  "your own AI tools",
  "a tireless AI employee",
  "a better AI developer",
  "your unfair AI advantage",
  "automated AI workflows",
  "a one-person AI empire",
  "what others outsource, with AI",
  "your AI sales machine",
];

function shuffleArray<T>(arr: T[]): T[] {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function Hero() {
  const [shuffled, setShuffled] = useState(headlines);
  const [index, setIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setShuffled(shuffleArray(headlines));
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % shuffled.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [mounted, shuffled.length]);

  return (
    <section className="relative bg-background">
      {/* Dot pattern background with radial fade */}
      <DotPattern
        cr={1.2}
        width={24}
        height={24}
        className={cn(
          "text-white/[0.15]",
          "[mask-image:radial-gradient(ellipse_at_center,white_10%,transparent_70%)]",
        )}
      />

      {/* Top ambient glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-white/[0.03] blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 pt-20 pb-16 sm:pt-32 sm:pb-16">
        {/* Headline */}
        <h1 className="text-4xl leading-[1.12] font-semibold tracking-normal text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Build{" "}
          <span className="relative inline-flex align-baseline">
            {/* Hidden sizer — renders longest phrase to hold width */}
            <span className="invisible whitespace-nowrap font-[family-name:var(--font-instrument-serif)] italic">
              your unfair advantage
            </span>
            <AnimatePresence mode="wait">
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(8px)", y: 20 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                exit={{ opacity: 0, filter: "blur(8px)", y: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0 whitespace-nowrap font-[family-name:var(--font-instrument-serif)] italic underline decoration-white/30 underline-offset-[6px]"
              >
                {shuffled[index]}
              </motion.span>
            </AnimatePresence>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-8 max-w-xl text-base leading-relaxed text-neutral-300 sm:text-lg">
          The private community for builders and founders who use AI to move
          faster, build smarter, and stay ahead of everyone else.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row">
          <RainbowButton asChild size="lg">
            <a href={SKOOL_URL} target="_blank" rel="noopener noreferrer">
              Join The 1%
              <ArrowRight className="size-4" />
            </a>
          </RainbowButton>
          <a
            href="#offer"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-neutral-800 px-8 text-sm font-medium text-white transition-colors hover:bg-neutral-700"
          >
            See what&apos;s inside
            <ChevronDown className="size-4" />
          </a>
        </div>
      </div>

      {/* Video section */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 pb-32">
        <div className="relative overflow-hidden rounded-2xl border border-white/10">
          <iframe
            src={HERO_VIDEO_URL}
            title="VSL"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="aspect-video w-full"
          />
          <BorderBeam
            size={200}
            duration={8}
            colorFrom="#ffffff"
            colorTo="#444444"
            borderWidth={1}
          />
        </div>

        {/* Bottom glow under video */}
        <div className="pointer-events-none absolute -bottom-20 left-1/2 h-[200px] w-[60%] -translate-x-1/2 rounded-full bg-white/[0.04] blur-[80px]" />
      </div>
    </section>
  );
}
