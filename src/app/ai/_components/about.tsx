"use client";

import Image from "next/image";

import { BlurFade } from "@/components/ui/blur-fade";

export function About() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-6">
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-300">
          Who&apos;s behind this
        </p>

        <div className="mt-10 grid gap-12 md:grid-cols-[200px_1fr] md:items-start">
          {/* Avatar placeholder */}
          <BlurFade delay={0} inView>
            <Image
              src="/me.jpg"
              alt="@aflekkas"
              width={176}
              height={176}
              className="mx-auto size-44 rounded-2xl border border-white/10 object-cover md:mx-0"
            />
          </BlurFade>

          {/* Story */}
          <div className="space-y-5">
            <BlurFade delay={0.1} inView>
              <p className="text-base leading-relaxed text-neutral-300">
                I&apos;m <span className="text-white">@aflekkas</span> — a
                founder who built a $50K/mo company almost entirely with AI. No
                dev team, no huge budget, no traditional playbook.
              </p>
            </BlurFade>

            <BlurFade delay={0.2} inView>
              <p className="text-base leading-relaxed text-neutral-300">
                I went from zero to 2M+ monthly views and a profitable business
                by treating AI as a co-founder — not a toy. Every workflow,
                every piece of content, every system was built with the tools
                and strategies I now share inside The 1%.
              </p>
            </BlurFade>

            <BlurFade delay={0.3} inView>
              <p className="text-base leading-relaxed text-neutral-300">
                This community exists because I wish I had it when I started.
                Instead of figuring it out alone, you get the exact playbooks,
                tools, and people that make the difference.
              </p>
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  );
}
