# Letterpret — GitHub Copilot Instructions

## Project
Marketing website for Letterpret: magnetic letter boxes for early reading education, based on the "Bouw!" method. Created by Marlene de Haan (teaching assistant) and Klaas (3D printing enthusiast).

## Tech stack
- Next.js 16 (App Router), React 19, TypeScript
- Tailwind CSS + Shadcn UI (Radix UI) + Lucide icons
- Framer Motion for animations, Sonner for toasts, Next Themes for dark mode

## Project structure
- `app/` — pages: `/` (home), `/lesmateriaal`, `/contact`
- `components/` — page sections + `ui/` (Shadcn components)
- `lib/utils.ts` — `cn()` helper (clsx + tailwind-merge)
- `public/images/` — product photos

## Language rules
- Code (variable names, keys, comments) → English
- User-facing website text → Dutch

## Style guidelines
- Tailwind utility classes, no custom CSS unless necessary
- Use `cn()` from `lib/utils.ts` for conditional class merging
- Framer Motion for animations, not CSS transitions
- Dark mode via CSS variables (`dark:` prefix)
- Mobile-first responsive design

## Commands
- `npm run dev` — dev server (turbo mode)
- `npm run lint` — ESLint + Prettier check
- `npm run lint:fix` — auto-fix lint issues
- `npm run build` — production build