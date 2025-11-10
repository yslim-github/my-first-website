# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This repository contains two distinct projects:

1. **Root directory**: Original static HTML website about web technologies (HTML, CSS, JavaScript)
2. **nextjs-shadcn-app/**: Modern Next.js 16 application with TypeScript, Tailwind CSS v4, and shadcn/ui components

## Next.js Application (`nextjs-shadcn-app/`)

### Common Commands

```bash
# Navigate to the Next.js app
cd nextjs-shadcn-app

# Install dependencies
npm install

# Development
npm run dev          # Start dev server (http://localhost:3000)
npm run build        # Production build
npm start            # Start production server
npm run lint         # Run ESLint
```

### Architecture Overview

**App Router Structure**: Uses Next.js 16 App Router with the following key patterns:
- `src/app/` - Route definitions (each folder becomes a route)
- `src/components/ui/` - shadcn/ui components (Radix UI primitives + Tailwind)
- `src/components/` - Custom app components (navigation, theme-toggle, command-menu, footer)
- `src/content/blog/` - MDX blog posts with frontmatter
- `src/lib/` - Utility functions and helpers
- `src/app/api/` - API routes (`/api/stats`, `/api/users`, `/api/health`)

**Key Pages**:
- `/` - Home/landing page
- `/about` - About page
- `/contact` - Contact form (React Hook Form + Zod validation)
- `/blog` - MDX-powered blog with individual post pages at `/blog/[slug]`
- `/dashboard` - Analytics dashboard with Recharts visualizations
- `/data` - Data table with TanStack Table (sorting, filtering, pagination)
- `/demo` - Component showcase (toasts, alerts, tabs)

**Loading States**: Pages with data fetching (`blog/`, `dashboard/`, `data/`) include `loading.tsx` files that render skeleton placeholders using the Skeleton component.

**Error Handling**:
- `error.tsx` - Route-level error boundaries
- `not-found.tsx` - Custom 404 page
- `global-error.tsx` - Root-level error boundary

**Theme System**:
- Uses `next-themes` for dark/light mode switching
- Theme configured via CSS variables in `src/app/globals.css`
- Changed from `prefers-color-scheme` media queries to class-based dark mode (`.dark` class on root)
- Theme toggle available in navigation bar

**Command Palette**:
- Press `⌘K` (Mac) or `Ctrl+K` (Windows/Linux) to open
- Provides quick navigation to all pages
- Implemented with `cmdk` library in `src/components/command-menu.tsx`

### Component Patterns

**shadcn/ui Components**: Located in `src/components/ui/`. These are Radix UI primitives styled with Tailwind CSS. When adding new shadcn/ui components:
1. Install the Radix UI primitive if needed: `npm install @radix-ui/react-[component]`
2. Create the component file following the shadcn/ui pattern
3. Use the `cn()` utility from `src/lib/utils.ts` for className merging

**Utility Function**: `cn()` in `src/lib/utils.ts` combines `clsx` and `tailwind-merge` for conditional className handling.

**Form Validation**: Forms use React Hook Form with Zod schemas for validation (see `src/app/contact/page.tsx` for reference).

**Data Tables**: Use TanStack Table v8 (see `src/app/data/page.tsx` for full implementation with sorting, filtering, pagination, and row selection).

### Content Management

**Blog Posts**:
- Create MDX files in `src/content/blog/`
- Include frontmatter: `title`, `date`, `author`, `excerpt`, `tags`
- Posts are parsed with `gray-matter` and rendered with MDX
- Syntax highlighting provided by `rehype-highlight`

### Tech Stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui (Radix UI + Tailwind)
- **Forms**: React Hook Form + Zod
- **Tables**: TanStack Table v8
- **Charts**: Recharts
- **Markdown**: MDX with @next/mdx
- **Icons**: Lucide React
- **Toasts**: Sonner
- **Theme**: next-themes

## Static HTML Site (Root Directory)

### Project Structure

- `index.html` - Main landing page about the Web
- `1.html` - Page about HTML
- `2.html` - Page about CSS
- `3.html` - Page about JavaScript
- `web.jpg` - Image asset

### Navigation Pattern

All pages share an identical navigation structure:
- Header with link back to index.html
- Ordered list with links to all three topic pages (1.html, 2.html, 3.html)
- Main content area with topic-specific information

When adding new pages, maintain this consistent navigation structure across all files.

### Development

**Local Testing**: Open HTML files directly in a browser, or use:
```bash
python3 -m http.server 8000
# Then visit http://localhost:8000
```

**Editing**: Directly edit HTML files. No build step required.
