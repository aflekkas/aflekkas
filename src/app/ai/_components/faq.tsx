"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { SKOOL_URL } from "@/lib/constants/links";

const faqs = [
  {
    q: "Who is this for?",
    a: "Builders, founders, and creators who want to use AI to grow faster, whether you're just starting or already running a business. If you want to stay ahead of the curve and actually implement, this is for you.",
  },
  {
    q: "I'm not technical, will I still get value?",
    a: "Absolutely. The playbooks and templates are designed to be plug-and-play. You don't need to code. If you can click, copy, and paste, you can use everything inside.",
  },
  {
    q: "What makes this different from free AI content?",
    a: "Free content tells you what's possible. The 1% shows you exactly how to do it with tested workflows, real templates, and a community that holds you accountable.",
  },
  {
    q: "How much time do I need to commit?",
    a: "As little or as much as you want. The live calls are ~60 minutes per week, and playbooks are self-paced. Most members see results within the first week.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. No contracts, no commitments. Cancel with one click whenever you want. No questions asked.",
  },
  {
    q: "Will the price stay at $59/mo?",
    a: "For founding members, yes, your price is locked in forever. As the community grows and more resources are added, the price will increase for new members.",
  },
];

export function Faq() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-2xl px-6">
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-300">
          FAQ
        </p>
        <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Common questions
        </h2>

        <Accordion type="single" collapsible className="mt-10">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="border-white/10"
            >
              <AccordionTrigger className="text-neutral-200 hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-neutral-300">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-14 text-center">
          <RainbowButton asChild size="lg">
            <a href={SKOOL_URL} target="_blank" rel="noopener noreferrer">
              Join The 1%
            </a>
          </RainbowButton>
        </div>
      </div>
    </section>
  );
}
