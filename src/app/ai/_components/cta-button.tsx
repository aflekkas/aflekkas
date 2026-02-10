"use client";

import { ArrowRight } from "lucide-react";
import { track } from "@vercel/analytics";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { SKOOL_URL } from "@/lib/constants/links";
import { WAITLIST_ACTIVE } from "@/lib/constants/waitlist";
import { cn } from "@/lib/utils";
import { useWaitlist } from "./waitlist-dialog";

export function CtaButton({ className }: { className?: string }) {
  const { open } = useWaitlist();

  if (WAITLIST_ACTIVE) {
    return (
      <RainbowButton
        size="lg"
        className={cn("group/btn", className)}
        onClick={() => {
          track("cta_click", { destination: "waitlist" });
          open();
        }}
      >
        Join The Waitlist
        <ArrowRight className="size-4 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
      </RainbowButton>
    );
  }

  return (
    <RainbowButton asChild size="lg" className={cn(className)}>
      <a
        href={SKOOL_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group/btn"
        onClick={() => track("cta_click", { destination: "skool" })}
      >
        Join The AI Lab
        <ArrowRight className="size-4 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
      </a>
    </RainbowButton>
  );
}
