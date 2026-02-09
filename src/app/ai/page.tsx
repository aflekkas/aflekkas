import type { Metadata } from "next";

import { About } from "./_components/about";
import { Faq } from "./_components/faq";
import { Hero } from "./_components/hero";
import { Offer } from "./_components/offer";
import { PricingCta } from "./_components/pricing-cta";
import { Problem } from "./_components/problem";

import { Testimonials } from "./_components/testimonials";
import { CURRENT_PRICE_MO } from "@/lib/constants/pricing";

export const metadata: Metadata = {
  title: "The Lab | A Private AI Community for Builders",
  description: `The private AI community for builders who want to move faster, build smarter, and stay ahead. ${CURRENT_PRICE_MO}.`,
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
