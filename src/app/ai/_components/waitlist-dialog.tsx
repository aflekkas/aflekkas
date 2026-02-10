"use client";

import { createContext, useCallback, useContext, useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { track } from "@vercel/analytics";
import { joinWaitlist } from "../actions";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { RainbowButton } from "@/components/ui/rainbow-button";

type WaitlistContextType = {
  open: () => void;
};

const WaitlistContext = createContext<WaitlistContextType>({
  open: () => {},
});

export function useWaitlist() {
  return useContext(WaitlistContext);
}

export function WaitlistProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "submitting" | "success">("idle");

  const open = useCallback(() => {
    setIsOpen(true);
    track("waitlist_dialog_open");
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setState("submitting");

    const result = await joinWaitlist(email);

    if (result.error) {
      setState("idle");
      return;
    }

    setState("success");
    track("waitlist_submit", { email });
  };

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      // Reset after close animation
      setTimeout(() => {
        setEmail("");
        setState("idle");
      }, 200);
    }
  };

  return (
    <WaitlistContext value={{ open }}>
      {children}
      <Dialog open={isOpen} onOpenChange={handleOpenChange}>
        <DialogContent
          showCloseButton
          className="border-white/10 bg-neutral-950 p-0 sm:max-w-md"
        >
          {/* Top accent line */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          <div className="px-8 pt-8 pb-10">
            <DialogTitle className="sr-only">Join the waitlist</DialogTitle>

            {state === "success" ? (
              <div className="flex flex-col items-center py-4 text-center">
                <div className="flex size-14 items-center justify-center rounded-full bg-white/[0.06]">
                  <CheckCircle2 className="size-7 text-white" />
                </div>
                <p className="mt-5 text-xl font-medium text-white">
                  You&apos;re on the list
                </p>
                <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                  We&apos;ll reach out when we&apos;re ready for you.
                  Keep building.
                </p>
              </div>
            ) : (
              <div>
                {/* Header */}
                <div className="text-center">
                  <p className="text-2xl font-medium text-white sm:text-3xl">
                    Get in{" "}
                    <span className="font-[family-name:var(--font-instrument-serif)] italic underline decoration-white/30 underline-offset-4">
                      early
                    </span>
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                    We&apos;re building something for the builders.
                    Drop your email and be first to know when the doors open.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="mt-8">
                  <div className="space-y-3">
                    <Input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="h-11 rounded-lg"
                      disabled={state === "submitting"}
                    />
                    <RainbowButton
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={state === "submitting"}
                    >
                      {state === "submitting" ? (
                        <Loader2 className="size-4 animate-spin" />
                      ) : (
                        "Join the waitlist"
                      )}
                    </RainbowButton>
                  </div>

                  <p className="mt-4 text-center text-[11px] text-neutral-600">
                    No spam. Just early access.
                  </p>
                </form>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </WaitlistContext>
  );
}
