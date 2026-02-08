# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

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
- Page-specific sub-components go in `src/app/ai/_components/`

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
