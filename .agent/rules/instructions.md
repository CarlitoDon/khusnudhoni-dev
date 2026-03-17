# AI Agent Instructions for khusnudhoni-dev

## Architecture Overview

This project is a personal portfolio website built with **Next.js 15+ (App Router)** and **React 19**. It features a modern design heavily utilizing glassmorphism and bento-grid layouts.

- **Framework:** Next.js with App Router (`src/app`)
- **Styling:** Tailwind CSS v4 and Framer Motion for animations
- **Data Layer:** Static TypeScript files containing content arrays (`src/data/*.ts`)
- **Deployment:** Vercel (CI/CD via GitHub Actions)

## Key Patterns

### Styling & Components
- Use Tailwind CSS for all styling.
- Use the `cn()` utility (`src/lib/utils.ts`) which merges `clsx` and `tailwind-merge` for conditional classes.
- Standard glassmorphism pattern: use `glass-surface-primary` combined with `bento-card` for container blocks (e.g., `src/components/GlassPanel.tsx`).

```tsx
import { cn } from "@/lib/utils";

// Example pattern for components:
export function GlassPanel({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={cn("bento-card glass-surface-primary", className)}>
      {children}
    </div>
  );
}
```

### Data Management
- Store static content and configuration in strongly typed TypeScript arrays/objects inside the `src/data/` directory.
- Avoid hardcoding extensive copy within React components. Instead, import from data files like `src/data/site.ts` or `src/data/cases.ts`.

### Routing
- Strictly follow the Next.js App Router conventions (`page.tsx`, `layout.tsx`).

## Development Workflow

- **Install Dependencies:** `npm install`
- **Run Local Server:** `npm run dev` (Available at `http://localhost:3000`)
- **Build Production:** `npm run build`
- **Linting:** `npm run lint`

## Do's and Don'ts

- **DO** use the `cn()` utility from `src/lib/utils.ts` when combining Tailwind classes.
- **DO** maintain the separation of data and UI components.
- **DO** use React Server Components strongly. Add `"use client"` only when interactive hooks (like Framer Motion or React state) are heavily required.
- **DON'T** use older Tailwind configuration patterns (v4 syntax is in use).
- **DON'T** modify the GitHub Actions workflows randomly without realizing production deployments are automated on push to `main`.

## Key Files Reference

- `src/app/layout.tsx` - App root layout, globals, metadata, and fonts setup.
- `src/lib/utils.ts` - Core utility for CSS class merging.
- `src/data/site.ts` - Global configuration and static site links.
- `package.json` - Core scripts and dependencies.
