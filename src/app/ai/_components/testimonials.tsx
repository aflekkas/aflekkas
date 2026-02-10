"use client";

import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import { MagicCard } from "@/components/ui/magic-card";

const testimonials = [
  {
    quote:
      "Used the AI tool stack to ship a full MVP in a weekend. Would've taken me weeks without it.",
    name: "Ashwin Balaraman",
    role: "AI Developer & Founder",
    image: "/testimonials/ashwin.jpeg",
    link: "https://www.linkedin.com/in/ashwin-balaraman-512990329/",
  },
  {
    quote:
      "Built my own ClawdBot using just Claude Code and saved hundreds of $. The age of self-improving AI is here and this community really does teach how to harness it.",
    name: "Nathan Lee",
    role: "AI Tinkerer & CS Student",
    image: "/testimonials/nathan.jpeg",
    link: "https://www.linkedin.com/in/nathaniel-lee-443244327/",
  },
  {
    quote:
      "Hooked ClawdBot up to my content pipeline and it rewrites my scripts for different platforms in seconds. I'm posting twice as much UGC with half the effort.",
    name: "Max Kouzes",
    role: "UGC Creator",
    image: "/testimonials/max.jpg",
    link: "https://www.instagram.com/kouzes_/",
  },
  {
    quote:
      "Bro the content workflow you dropped last week is stupid good. Set it up for our creators and it cut our turnaround in half.",
    name: "Sonny Morse",
    role: "UGC Marketing Agency Owner",
    image: "/testimonials/sonny.jpeg",
    link: "https://www.linkedin.com/in/sonnymorse/",
  },
  {
    quote:
      "Actually wild how much people share in here. Most paid groups are dead after a week, this one keeps delivering.",
    name: "Davin Patel",
    role: "Partner, VantagePoint",
    image: "/testimonials/davin.jpeg",
    link: "https://www.linkedin.com/in/davinpatel21/",
  },
];

export function Testimonials() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-6">
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-300">
          What members say
        </p>
        <h2 className="mt-6 max-w-xl text-3xl font-medium leading-snug tracking-tight text-white sm:text-4xl">
          Real results from{" "}
          <span className="font-[family-name:var(--font-instrument-serif)] italic underline decoration-white/30 underline-offset-[6px]">
            real builders.
          </span>
        </h2>

        <div className="mt-14 columns-1 gap-4 sm:columns-2">
          {testimonials.map((t, i) => (
            <BlurFade
              key={t.name}
              delay={0.1 * i}
              inView
              className="mb-4 break-inside-avoid"
            >
              <MagicCard
                className="rounded-xl"
                gradientColor="#1a1a1a"
                gradientFrom="#333"
                gradientTo="#222"
                gradientOpacity={0.5}
              >
                <div className="p-6">
                  <p className="text-sm leading-relaxed text-neutral-300">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-5 flex items-center gap-3">
                    <Image
                      src={t.image}
                      alt={t.name}
                      width={36}
                      height={36}
                      className="rounded-full object-cover"
                    />
                    <div>
                      <a
                        href={t.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-white hover:underline"
                      >
                        {t.name}
                      </a>
                      <p className="text-xs text-neutral-300">{t.role}</p>
                    </div>
                  </div>
                </div>
              </MagicCard>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
