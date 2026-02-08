"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { TextAnimate } from "@/components/ui/text-animate";

const painPoints = [
  "You see AI announcements daily but don't know which ones actually matter for your business.",
  "You're spending hours testing tools that go nowhere — while competitors ship faster than ever.",
  "You know AI can 10x your output, but you don't have a system to make it happen.",
];

export function Problem() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-6">
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-300">
          The problem
        </p>

        <TextAnimate
          as="h2"
          by="word"
          animation="blurInUp"
          duration={0.6}
          className="mt-6 max-w-2xl text-3xl font-semibold leading-snug tracking-tight text-white sm:text-4xl"
        >
          AI is moving faster than you can keep up — and the gap is only getting wider.
        </TextAnimate>

        <div className="mt-12 space-y-6">
          {painPoints.map((point, i) => (
            <BlurFade key={i} delay={0.15 * i} inView>
              <p className="max-w-xl text-base leading-relaxed text-neutral-300">
                {point}
              </p>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
