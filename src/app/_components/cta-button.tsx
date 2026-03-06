"use client";

import { ArrowRight } from "lucide-react";
import { track } from "@vercel/analytics";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { SKOOL_URL } from "@/lib/constants/links";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

function useSkoolUrl() {
  const [url, setUrl] = useState(SKOOL_URL);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const utmKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"];
    const utms = new URLSearchParams();
    for (const key of utmKeys) {
      const val = params.get(key);
      if (val) utms.set(key, val);
    }
    if (utms.toString()) {
      setUrl(`${SKOOL_URL}?${utms.toString()}`);
    }
  }, []);

  return url;
}

export function CtaButton({ className }: { className?: string }) {
  const skoolUrl = useSkoolUrl();

  return (
    <RainbowButton asChild size="lg" className={cn(className)}>
      <a
        href={skoolUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group/btn"
        onClick={() => {
          const params = new URLSearchParams(window.location.search);
          track("cta_click", {
            destination: "skool",
            utm_source: params.get("utm_source") || "direct",
            utm_medium: params.get("utm_medium") || "none",
            utm_campaign: params.get("utm_campaign") || "none",
          });
        }}
      >
        Join Agent Lab
        <ArrowRight className="size-4 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
      </a>
    </RainbowButton>
  );
}
