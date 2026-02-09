export const PRICE_TIERS = [
  { members: "First 10", price: 19.99, active: true },
  { members: "11-50", price: 29.99, active: false },
  { members: "51-100", price: 49.99, active: false },
  { members: "100+", price: 99.99, active: false },
] as const;

/** The currently active tier (first one where active is true). */
export const CURRENT_TIER = PRICE_TIERS.find((t) => t.active)!;

/** The next tier after the current one. */
export const NEXT_TIER = PRICE_TIERS[PRICE_TIERS.findIndex((t) => t.active) + 1]!;

/** Formatted current price, e.g. "$19.99" */
export const CURRENT_PRICE = `$${CURRENT_TIER.price}`;

/** Formatted current price with period, e.g. "$19.99/mo" */
export const CURRENT_PRICE_MO = `$${CURRENT_TIER.price}/mo`;

/** Formatted next price, e.g. "$29.99" */
export const NEXT_PRICE = `$${NEXT_TIER.price}`;

/** Formatted next price with period, e.g. "$29.99/mo" */
export const NEXT_PRICE_MO = `$${NEXT_TIER.price}/mo`;
