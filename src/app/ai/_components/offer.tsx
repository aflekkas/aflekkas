"use client";

import {
  BookOpen,
  Video,
  Wrench,
  LayoutTemplate,
  Users,
  Star,
} from "lucide-react";

import { BlurFade } from "@/components/ui/blur-fade";
import { DotPattern } from "@/components/ui/dot-pattern";
import { MagicCard } from "@/components/ui/magic-card";
import { cn } from "@/lib/utils";

const items = [
  {
    icon: BookOpen,
    title: "AI Playbooks",
    description:
      "Step-by-step guides to automate sales, content, ops, and more. Tested in real businesses.",
  },
  {
    icon: Video,
    title: "Weekly Live Calls",
    description:
      "Live implementation sessions where we build, troubleshoot, and stay ahead together.",
  },
  {
    icon: Wrench,
    title: "Tool Stack",
    description:
      "The exact AI tools, prompts, and workflows behind a $50K/mo business. No fluff.",
  },
  {
    icon: LayoutTemplate,
    title: "Plug & Play Templates",
    description:
      "Copy-paste automations, SOPs, and prompt libraries ready to deploy in minutes.",
  },
  {
    icon: Users,
    title: "Private Community",
    description:
      "A tight-knit group of builders sharing wins, setups, and real-time AI breakthroughs.",
  },
  {
    icon: Star,
    title: "Founding Member Access",
    description:
      "Lock in the lowest price forever and help shape what gets built next.",
  },
];

export function Offer() {
  return (
    <section id="offer" className="relative py-16 sm:py-20">
      <DotPattern
        cr={1.2}
        width={24}
        height={24}
        className={cn(
          "text-white/[0.15]",
          "[mask-image:radial-gradient(ellipse_at_center,white_10%,transparent_70%)]"
        )}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6">
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-300">
          What&apos;s inside
        </p>
        <h2 className="mt-6 max-w-2xl text-3xl font-semibold leading-snug tracking-tight text-white sm:text-4xl">
          Everything you need to build with AI, in one place.
        </h2>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <BlurFade key={item.title} delay={0.1 * i} inView>
              <MagicCard
                className="rounded-xl border border-white/10"
                gradientColor="#1a1a1a"
                gradientFrom="#333"
                gradientTo="#222"
                gradientOpacity={0.5}
              >
                <div className="p-6">
                  <item.icon className="size-5 text-neutral-300" />
                  <h3 className="mt-4 text-sm font-medium text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-300">
                    {item.description}
                  </p>
                </div>
              </MagicCard>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
