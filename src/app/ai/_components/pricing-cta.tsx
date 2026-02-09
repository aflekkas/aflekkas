"use client";

import { DotPattern } from "@/components/ui/dot-pattern";
import { MagicCard } from "@/components/ui/magic-card";
import { cn } from "@/lib/utils";
import { CtaButton } from "./cta-button";
import { PRICE_TIERS, CURRENT_TIER } from "@/lib/constants/pricing";

const perks = [
  "Full course library & future drops",
  "Weekly live builds & recordings",
  "All configs, templates & prompt libraries",
  "Private community access",
  "Your dues help fund member projects",
];

export function PricingCta() {
  const price = CURRENT_TIER.price.toString().split(".");

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

      <div className="relative z-10 mx-auto max-w-lg px-6 text-center">
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-400">
          Join today
        </p>

        {/* Pricing card */}
        <MagicCard
          className="mt-10 overflow-hidden rounded-2xl"
          gradientSize={250}
          gradientColor="#1a1a1a"
          gradientOpacity={0.9}
          gradientFrom="#ffffff"
          gradientTo="#666666"
        >
          <div className="relative rounded-2xl px-8 pb-12 pt-14 sm:px-12 sm:pb-14 sm:pt-16">
            {/* Availability badge */}
            <div className="mb-8 flex justify-center">
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1 text-[11px] font-medium tracking-wide text-neutral-400">
                {CURRENT_TIER.members} members only
              </span>
            </div>

            {/* Price */}
            <div className="flex items-start justify-center">
              <span className="mt-1.5 text-xl font-medium text-neutral-500 sm:mt-2">
                $
              </span>
              <span className="text-5xl font-medium text-white sm:text-6xl">
                {price[0]}
              </span>
              <div className="mt-1.5 flex flex-col items-start sm:mt-2">
                <span className="text-xl font-medium text-white">
                  .{price[1]}
                </span>
                <span className="text-[11px] font-medium text-neutral-500">
                  / mo
                </span>
              </div>
            </div>

            <p className="mt-3 text-[13px] text-neutral-500">
              Founding member price, locked in forever
            </p>

            {/* Divider */}
            <div className="mx-auto my-10 h-px w-12 bg-white/10" />

            {/* Perks */}
            <ul className="space-y-4.5">
              {perks.map((perk) => (
                <li key={perk} className="flex items-center gap-3">
                  <div className="flex size-5 shrink-0 items-center justify-center rounded-full bg-white/[0.06]">
                    <div className="size-1.5 rounded-full bg-white/60" />
                  </div>
                  <span className="text-[13px] text-neutral-300">{perk}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-12">
              <CtaButton className="w-full" />
              <p className="mt-4 text-center text-[11px] text-neutral-600">
                Cancel anytime. No questions asked.
              </p>
            </div>
          </div>
        </MagicCard>
      </div>

      {/* Price Roadmap */}
      <div className="relative z-10 mt-16 text-center">
        <p className="mb-8 text-xs font-mono uppercase tracking-[0.2em] text-neutral-500">
          Price increases as we grow
        </p>

        <div className="relative mx-auto max-w-2xl">
          <div className="absolute top-2.5 left-0 right-0 h-px bg-white/10" />

          <div className="relative flex items-start justify-center">
            {PRICE_TIERS.map((tier) => (
              <div
                key={tier.members}
                className="relative z-10 flex w-32 flex-col items-center gap-2.5 sm:w-40"
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
