# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Agent Orchestration

**Act as an orchestrator, not a single-threaded worker.** For any task beyond a simple, direct change (e.g. "rename this variable", "fix this typo"), break the work into sub-tasks and delegate to specialized sub-agents in parallel using the Task tool.

**When to orchestrate:**
- Feature work touching multiple files or concerns (DB + UI + server action)
- Tasks that need research/exploration before implementation
- Bug reports that need investigation before a fix
- Any request with 2+ independent workstreams

**When to just do it directly:**
- Single-file edits, small tweaks, quick answers
- Tasks where orchestration overhead would be slower than just doing it

**Available sub-agents:**
| Agent | Use for |
|-------|---------|
| `Explore` | Fast codebase search, find files/patterns, understand architecture |
| `Plan` | Design implementation approach, identify files to change, architectural decisions |
| `bug-fixer` | Investigate and fix bugs, runtime errors, build failures |
| `general-purpose` | Multi-step research, web lookups, anything that doesn't fit above |
| `Bash` | Git operations, running commands, installs |

**How to orchestrate well:**
- Launch independent sub-agents **in parallel** (single message, multiple Task calls)
- Give each agent a clear, self-contained prompt with all context it needs
- After agents return, synthesize results and do the actual implementation yourself (or delegate further)
- Use the todo list (`TaskCreate`/`TaskUpdate`) to track progress on multi-step work

## Commands

```bash
bun dev          # Start dev server
bun run build    # Production build
bun run lint     # Run ESLint
bun start        # Start production server
```

Package manager is **Bun** (bun.lock).

## Architecture

- **Next.js 16** with App Router, React 19, TypeScript
- **React Server Components** enabled by default
- Source lives in `src/` with path alias `@/*` → `./src/*`

### Routing

- `/` redirects to `/ai`
- `/ai` is the main page (`src/app/ai/page.tsx`)

### Page Folder Structure

Every route folder (`src/app/<route>/`) follows this convention:

```
src/app/<route>/
├── page.tsx           # Page component
├── actions.ts         # Server Actions
├── schemas.ts         # Zod / validation schemas
├── types.d.ts         # Local type definitions
├── _components/       # Page-specific components
└── _utils/            # Page-specific utility functions
```

Only create files as needed. `page.tsx` is the only required file.

### Styling & Components

- **Tailwind CSS v4** via PostCSS (no `tailwind.config.ts`; theme defined inline in `globals.css`)
- **shadcn/ui** (new-york style, neutral base color) — components in `src/components/ui/`
- **Magic UI** available via MCP and shadcn registry alias `@magicui`
- `cn()` utility in `src/lib/utils.ts` merges classes with clsx + tailwind-merge
- Animation library: **motion** (Framer Motion successor)
- Icons: **lucide-react**

### shadcn Configuration

Registry config in `components.json`. To add a shadcn component:
```bash
bunx shadcn@latest add <component-name>
```

## Product Context

### "The 1%" — `/ai` page

The `/ai` page is a conversion-focused sales page for **The 1%**, a paid Skool community ($20/mo founding member price, first 5 members at $10/mo) targeting builders and founders who want to use AI to grow their businesses.

**Traffic flow:** Instagram/TikTok → ManyChat → this page → Skool

**What the community offers:**
- AI playbooks & workflows for automating business ops, content, sales
- Weekly live implementation calls
- Curated AI tool stack & prompt library
- Plug-and-play templates and SOPs
- Private community of builders
- Founding member pricing locked in forever

**Who's behind it:** @aflekkas — a founder who built a $50K/mo company using AI, 2M+ monthly views, no dev team.

**Page structure:** Hero (rotating headlines) → Social Proof Bar → Problem → Offer → About → Testimonials → Pricing CTA → FAQ. All CTAs link to the Skool URL defined in `src/lib/constants/links.ts`.

## Long-term Vision: Custom Community Platform

The long-term plan is to **replace Skool with a fully custom-built platform** on this same stack (Next.js + Supabase + Stripe + Mux). The goal is to turn the community into an interactive learning platform purpose-built for AI builders, not just a forum with a course player.

**Key advantages over Skool:**
- **Interactive content**: "Open in Lovable" buttons, downloadable starter files, embedded playgrounds for prompts/configs, one-click templates directly in lessons
- **Full funnel ownership**: No redirect to skool.com. Landing page, signup, community all on one domain. Seamless experience.
- **Email capture / free tier**: Instead of paywall-or-nothing (Skool's model), capture emails from people not ready to pay. Free tier with gated content, drip sequences to convert later.
- **Tiered access**: Free (some templates, read-only feed) vs Paid (full access, live calls, all playbooks, interactive features)
- **No platform fees**: Eliminate Skool's $99/mo. Only pay Stripe's per-transaction fees (2.9% + $0.30).
- **Custom features**: AI-powered features baked in, personalized dashboards, custom onboarding
- **Data ownership**: Full analytics, retargeting pixels, email lists as an asset

**Current state:** CTAs on the `/ai` page now open a **waitlist dialog** (email capture) instead of linking to Skool. Backend storage for waitlist emails is not yet wired up (TODO: Supabase, Resend, or similar).

**Tech stack for platform (future):** Next.js + Supabase (auth, DB, realtime, storage) + Stripe (subscriptions) + Mux (video hosting/streaming)

## Data & Server Patterns

- **Prefer server-side over client-side.** Use Server Components, Server Actions, and server-side data fetching by default. Only use client components (`"use client"`) when you need interactivity (event handlers, hooks, browser APIs). Keep data mutations in Server Actions, not client-side API calls.
- **Supabase project:** `mawsuyyjxqykenglouky` (region: us-east-1). Server-side client lives in `src/lib/supabase/server.ts`, browser client in `src/lib/supabase/client.ts`.

## Copy Style

- **Never use em dashes (—)** in any copy, text, or content. Use commas, periods, or restructure the sentence instead.

## Design Style

- **Black and white only.** The site uses a monochrome palette. Do not introduce colors (no emerald, blue, red, etc.). Icons, text, borders, accents should all be white/neutral shades on the dark background.
