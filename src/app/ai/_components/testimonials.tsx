"use client";

import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import { MagicCard } from "@/components/ui/magic-card";

const testimonials = [
  {
    quote:
      "Bro the content workflow you dropped last week is stupid good. Set it up for our creators and it cut our turnaround in half.",
    name: "Sonny Morse",
    role: "CEO, MediaMaxxing",
    image: "/testimonials/sonny.jpeg",
    linkedin: "https://www.linkedin.com/in/sonnymorse/",
  },
  {
    quote:
      "Actually wild how much people share in here. Most paid groups are dead after a week, this one keeps delivering.",
    name: "Davin Patel",
    role: "COO, MediaMaxxing",
    image: "/testimonials/davin.jpeg",
    linkedin: "https://www.linkedin.com/in/davinpatel21/",
  },
  {
    quote:
      "Used the AI tool stack to ship a full MVP in a weekend. Would've taken me weeks without it.",
    name: "Ashwin Balaraman",
    role: "AI Developer & Founder",
    image: "/testimonials/ashwin.jpeg",
    linkedin: "https://www.linkedin.com/in/ashwin-balaraman-512990329/",
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
          Real results from real builders.
        </h2>

        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {testimonials.map((t, i) => (
            <BlurFade key={t.name} delay={0.1 * i} inView>
              <MagicCard
                className="rounded-xl border border-white/10"
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
                        href={t.linkedin}
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
