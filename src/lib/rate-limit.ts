/**
 * Simple in-memory sliding-window rate limiter.
 *
 * Usage:
 *   const limiter = createRateLimiter({ limit: 5, windowMs: 15 * 60 * 1000 });
 *
 *   // By any key (IP, user ID, etc.)
 *   if (limiter.isLimited(key)) { ... }
 *
 *   // By IP and/or user — limited if *either* identifier is over the limit
 *   if (limiter.check({ ip, userId })) { ... }
 */

interface RateLimiterOptions {
  /** Max attempts allowed within the window. */
  limit: number;
  /** Window duration in milliseconds. */
  windowMs: number;
}

interface CheckOptions {
  ip?: string;
  userId?: string;
}

export function createRateLimiter({ limit, windowMs }: RateLimiterOptions) {
  const attempts = new Map<string, number[]>();

  function consume(key: string): boolean {
    const now = Date.now();
    const timestamps = (attempts.get(key) ?? []).filter(
      (t) => now - t < windowMs
    );
    attempts.set(key, timestamps);

    if (timestamps.length >= limit) return true;

    timestamps.push(now);
    return false;
  }

  return {
    /**
     * Returns `true` if the key has exceeded the rate limit.
     * Automatically records the attempt when under the limit.
     */
    isLimited(key: string): boolean {
      return consume(key);
    },

    /**
     * Rate-limit by IP, user ID, or both.
     * Returns `true` if *any* provided identifier is over the limit.
     * Each identifier is tracked independently (prefixed to avoid collisions).
     */
    check({ ip, userId }: CheckOptions): boolean {
      const results: boolean[] = [];

      if (ip) results.push(consume(`ip:${ip}`));
      if (userId) results.push(consume(`user:${userId}`));

      return results.some(Boolean);
    },
  };
}
