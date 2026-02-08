import type { Metadata } from "next";

import { About } from "./_components/about";
import { Faq } from "./_components/faq";
import { Hero } from "./_components/hero";
import { Offer } from "./_components/offer";
import { PricingCta } from "./_components/pricing-cta";
import { Problem } from "./_components/problem";

import { Testimonials } from "./_components/testimonials";

export const metadata: Metadata = {
  title: "The 1% | Build a $50K/mo Business with AI",
  description:
    "The private community for builders and founders who use AI to move faster, build smarter, and stay ahead of everyone else. $59/mo.",
};

export default function AIPage() {
  return (
    <main className="min-h-screen">
      <Hero />

      <Problem />
      <Offer />
      <About />
      <Testimonials />
      <PricingCta />
      <Faq />
    </main>
  );
}
