"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { DotPattern } from "@/components/ui/dot-pattern";
import { MagicCard } from "@/components/ui/magic-card";
import { BlurFade } from "@/components/ui/blur-fade";
import { login, signup } from "../actions";

export function AuthForm() {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (formData: FormData) => {
    setError(null);
    setLoading(true);

    const action = mode === "login" ? login : signup;
    const result = await action(formData);

    if (result?.error) {
      setError(result.error);
      setLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-svh items-center justify-center overflow-hidden bg-neutral-950 px-6 py-20">
      {/* Dot pattern background */}
      <DotPattern
        cr={1}
        width={28}
        height={28}
        className={cn(
          "text-white/[0.08]",
          "[mask-image:radial-gradient(ellipse_at_center,white_5%,transparent_60%)]"
        )}
      />

      {/* Large decorative watermark */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex select-none items-center justify-center"
      >
        <span className="font-[family-name:var(--font-instrument-serif)] text-[min(40vw,360px)] leading-none font-normal italic text-white/[0.025]">
          1%
        </span>
      </div>

      {/* Bottom glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[300px] w-[50%] -translate-x-1/2 rounded-full bg-white/[0.02] blur-[100px]" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[400px]">
        {/* Label */}
        <BlurFade delay={0}>
          <p className="text-center text-xs tracking-normal text-neutral-500">
            Lekkas&apos; AI Lab
          </p>
        </BlurFade>

        {/* Heading */}
        <BlurFade delay={0.08}>
          <div className="mt-6 text-center">
            <AnimatePresence mode="wait">
              <motion.h1
                key={mode}
                initial={{ opacity: 0, filter: "blur(6px)", y: 8 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                exit={{ opacity: 0, filter: "blur(6px)", y: -8 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="text-3xl font-medium tracking-tight text-white sm:text-4xl"
              >
                {mode === "login" ? (
                  <>
                    Welcome{" "}
                    <span className="font-[family-name:var(--font-instrument-serif)] italic">
                      back
                    </span>
                  </>
                ) : (
                  <>
                    Join the{" "}
                    <span className="font-[family-name:var(--font-instrument-serif)] italic underline decoration-white/20 underline-offset-4">
                      1%
                    </span>
                  </>
                )}
              </motion.h1>
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.p
                key={mode}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, delay: 0.1 }}
                className="mt-3 text-sm text-neutral-400"
              >
                {mode === "login"
                  ? "Sign in to your account to continue."
                  : "Create an account to get started."}
              </motion.p>
            </AnimatePresence>
          </div>
        </BlurFade>

        {/* Card */}
        <BlurFade delay={0.16}>
          <MagicCard
            className="mt-10 overflow-hidden rounded-2xl"
            gradientSize={200}
            gradientColor="#1a1a1a"
            gradientOpacity={0.8}
            gradientFrom="#ffffff"
            gradientTo="#666666"
          >
            <div className="px-8 py-10 sm:px-10 sm:py-12">
              {/* Top accent line */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

              <form action={handleSubmit} className="space-y-5">
                {/* Email */}
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-xs tracking-normal text-neutral-500"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    disabled={loading}
                    placeholder="you@example.com"
                    className="h-11 w-full rounded-lg border border-white/[0.08] bg-white/[0.03] px-4 text-sm text-white outline-none transition-colors placeholder:text-neutral-600 focus:border-white/20 focus:bg-white/[0.05] disabled:opacity-50"
                  />
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <label
                    htmlFor="password"
                    className="block text-xs tracking-normal text-neutral-500"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    minLength={6}
                    disabled={loading}
                    placeholder="Min. 6 characters"
                    className="h-11 w-full rounded-lg border border-white/[0.08] bg-white/[0.03] px-4 text-sm text-white outline-none transition-colors placeholder:text-neutral-600 focus:border-white/20 focus:bg-white/[0.05] disabled:opacity-50"
                  />
                </div>

                {/* Error */}
                <AnimatePresence>
                  {error && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden text-sm text-red-400/90"
                    >
                      {error}
                    </motion.p>
                  )}
                </AnimatePresence>

                {/* Divider */}
                <div className="h-px w-full bg-white/[0.06]" />

                {/* Submit */}
                <Button
                  type="submit"
                  size="lg"
                  disabled={loading}
                  className="w-full text-sm font-medium"
                >
                  {loading ? (
                    <Loader2 className="size-4 animate-spin" />
                  ) : mode === "login" ? (
                    "Sign in"
                  ) : (
                    "Create account"
                  )}
                </Button>
              </form>
            </div>
          </MagicCard>
        </BlurFade>

        {/* Toggle */}
        <BlurFade delay={0.24}>
          <p className="mt-8 text-center text-[13px] text-neutral-500">
            {mode === "login"
              ? "Don't have an account?"
              : "Already have an account?"}{" "}
            <button
              type="button"
              onClick={() => {
                setMode(mode === "login" ? "signup" : "login");
                setError(null);
              }}
              className="text-white underline underline-offset-4 transition-colors hover:text-neutral-300"
            >
              {mode === "login" ? "Sign up" : "Sign in"}
            </button>
          </p>
        </BlurFade>
      </div>
    </div>
  );
}
