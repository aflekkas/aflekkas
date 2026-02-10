"use server";

import { headers } from "next/headers";
import { createAdminClient } from "@/lib/supabase/admin";
import { createRateLimiter } from "@/lib/rate-limit";
import { waitlistSchema } from "./schemas";

const rateLimiter = createRateLimiter({ limit: 5, windowMs: 15 * 60 * 1000 });

export async function joinWaitlist(email: string) {
  const ip =
    (await headers()).get("x-forwarded-for")?.split(",")[0].trim() ??
    "unknown";

  if (rateLimiter.check({ ip })) {
    return { error: "Too many requests. Please try again later." };
  }

  const parsed = waitlistSchema.safeParse({ email });

  if (!parsed.success) {
    return { error: parsed.error.errors[0].message };
  }

  const supabase = createAdminClient();

  const { error } = await supabase
    .from("waitlist")
    .insert({ email: parsed.data.email });

  if (error) {
    if (error.code === "23505") {
      // Unique constraint violation — already on the list
      return { success: true };
    }
    return { error: "Something went wrong. Please try again." };
  }

  return { success: true };
}
