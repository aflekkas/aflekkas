"use client";

import { Check } from "lucide-react";

import { DotPattern } from "@/components/ui/dot-pattern";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { ShineBorder } from "@/components/ui/shine-border";
import { cn } from "@/lib/utils";
import { SKOOL_URL } from "@/lib/constants/links";

const perks = [
  { text: "All AI playbooks & future updates", tag: "Included" },
  { text: "Weekly live calls & recordings", tag: "Included" },
  { text: "Full tool stack & prompt library", tag: "Included" },
  { text: "Private community access", tag: "Included" },
  { text: "Founding member pricing — locked in forever", tag: "Exclusive" },
];

export function PricingCta() {
  return (
    <section className="relative py-16 sm:py-20">
      <DotPattern
        cr={1.2}
        width={24}
        height={24}
        className={cn(
          "text-white/[0.15]",
          "[mask-image:radial-gradient(ellipse_at_center,white_10%,transparent_70%)]"
        )}
      />

      <div className="relative z-10 mx-auto max-w-xl px-6 text-center">
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-300">
          Join today
        </p>

        {/* Pricing card */}
        <div className="relative mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-left backdrop-blur-sm sm:p-10">
          <ShineBorder
            shineColor={["#333", "#555", "#333"]}
            borderWidth={1}
            duration={10}
          />

          {/* Price */}
          <div className="text-center">
            <p className="text-sm text-neutral-300 line-through">$59/mo</p>
            <p className="mt-1 text-6xl font-bold tracking-tight text-white sm:text-7xl">
              $20
              <span className="text-lg font-normal text-neutral-300">/mo</span>
            </p>
            <p className="mt-2 text-sm text-neutral-300">
              Founding member price — cancel anytime
            </p>
            <div className="mt-4 inline-block rounded-full border border-white/10 bg-white/[0.05] px-4 py-1.5">
              <p className="text-xs font-medium text-white">
                First 5 members get in for just $10/mo
              </p>
            </div>
          </div>

          {/* Perks */}
          <ul className="mt-10 space-y-4">
            {perks.map((perk) => (
              <li key={perk.text} className="flex items-start gap-3">
                <Check className="mt-0.5 size-4 shrink-0 text-neutral-300" />
                <span className="text-sm text-neutral-300">{perk.text}</span>
                <span className="ml-auto shrink-0 text-xs font-mono text-neutral-600">
                  {perk.tag}
                </span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="mt-10 text-center">
            <RainbowButton asChild size="lg">
              <a href={SKOOL_URL} target="_blank" rel="noopener noreferrer">
                Join The 1%
              </a>
            </RainbowButton>
            <p className="mt-4 text-xs text-neutral-600">
              Cancel anytime. No questions asked.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
