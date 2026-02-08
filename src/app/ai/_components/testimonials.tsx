"use client";

import { BlurFade } from "@/components/ui/blur-fade";

const testimonials = [
  {
    quote:
      "I automated 80% of my content pipeline in the first week. The playbooks alone are worth 10x the price.",
    name: "Alex R.",
    role: "E-commerce founder",
  },
  {
    quote:
      "The community is insane. I've never been in a group where people actually share what's working. No gatekeeping.",
    name: "Priya M.",
    role: "Agency owner",
  },
  {
    quote:
      "Went from spending 4 hours a day on ops to 30 minutes. The templates and tool stack saved me months of trial and error.",
    name: "Jordan K.",
    role: "SaaS founder",
  },
];

export function Testimonials() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-6">
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-300">
          What members say
        </p>
        <h2 className="mt-6 max-w-xl text-3xl font-semibold leading-snug tracking-tight text-white sm:text-4xl">
          Real results from real builders.
        </h2>

        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {testimonials.map((t, i) => (
            <BlurFade key={t.name} delay={0.1 * i} inView>
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
                <p className="text-sm leading-relaxed text-neutral-300">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-5">
                  <p className="text-sm font-medium text-white">{t.name}</p>
                  <p className="text-xs text-neutral-300">{t.role}</p>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
