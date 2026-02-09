"use client";

import { Check } from "lucide-react";

import { BorderBeam } from "@/components/ui/border-beam";
import { DotPattern } from "@/components/ui/dot-pattern";
import { MagicCard } from "@/components/ui/magic-card";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { cn } from "@/lib/utils";
import { SKOOL_URL } from "@/lib/constants/links";
import { PRICE_TIERS, CURRENT_PRICE, CURRENT_TIER } from "@/lib/constants/pricing";

const perks = [
  { text: "All AI playbooks & future updates", tag: "Included" },
  { text: "Weekly live calls & recordings", tag: "Included" },
  { text: "Full tool stack & prompt library", tag: "Included" },
  { text: "Private community access", tag: "Included" },
  { text: "Founding member pricing, locked in forever", tag: "Exclusive" },
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
        <MagicCard
          className="mt-10 rounded-2xl"
          gradientSize={250}
          gradientColor="#1a1a1a"
          gradientOpacity={0.9}
          gradientFrom="#ffffff"
          gradientTo="#666666"
        >
          <div className="relative overflow-hidden rounded-2xl p-8 text-left sm:p-10">
            <BorderBeam
              size={200}
              duration={10}
              colorFrom="#ffffff"
              colorTo="#444444"
              borderWidth={1}
              initialOffset={0}
            />
            <BorderBeam
              size={200}
              duration={10}
              colorFrom="#ffffff"
              colorTo="#444444"
              borderWidth={1}
              initialOffset={50}
            />

            {/* Price */}
            <div className="text-center">
              <p className="mt-1 flex items-baseline justify-center text-6xl font-bold tracking-tight text-white sm:text-7xl">
                {CURRENT_PRICE}
                <span className="text-lg font-normal text-neutral-300">
                  /mo
                </span>
              </p>
              <p className="mt-2 text-sm text-neutral-300">
                Founding member price, cancel anytime
              </p>
              <div className="mt-4 inline-block rounded-full border border-white/10 bg-white/[0.05] px-4 py-1.5">
                <p className="text-xs font-medium text-white">
                  Only available for the {CURRENT_TIER.members.toLowerCase()}
                  {" "}members
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
        </MagicCard>
      </div>

      {/* Price Roadmap — full width, below the card */}
      <div className="relative z-10 mt-16 text-center">
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-500 mb-8">
          Price increases as we grow
        </p>

        <div className="relative mx-auto max-w-2xl">
          {/* Full-width connecting line */}
          <div className="absolute top-2.5 left-0 right-0 h-px bg-white/10" />

          <div className="relative flex items-start justify-center">
            {PRICE_TIERS.map((tier) => (
              <div
                key={tier.members}
                className="relative z-10 flex flex-col items-center gap-2.5 w-32 sm:w-40"
              >
                <div
                  className={cn(
                    "size-5 rounded-full border",
                    tier.active
                      ? "border-white bg-white"
                      : "border-white/20 bg-neutral-950"
                  )}
                />
                <span
                  className={cn(
                    "text-sm font-semibold tracking-tight",
                    tier.active ? "text-white" : "text-neutral-600"
                  )}
                >
                  ${tier.price}/mo
                </span>
                <span
                  className={cn(
                    "text-[10px] font-mono uppercase tracking-wider",
                    tier.active ? "text-neutral-400" : "text-neutral-700"
                  )}
                >
                  {tier.members}
                </span>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-8 text-xs text-neutral-600">
          Lock in your price today. It stays the same forever.
        </p>
      </div>
    </section>
  );
}
