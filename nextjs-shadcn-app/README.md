# Next.js + shadcn/ui App

A comprehensive, modern web application built with Next.js 16, TypeScript, and shadcn/ui components. This project demonstrates best practices for building scalable web applications with advanced features.

![Next.js](https://img.shields.io/badge/Next.js-16-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8)
![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-latest-black)

## ✨ Features

### Core Features
- ⚡ **Next.js 16** with App Router and Turbopack
- 🎯 **TypeScript** for type safety
- 🎨 **Tailwind CSS v4** for modern styling
- 🧩 **shadcn/ui** component library
- 🌙 **Dark Mode** with system preference detection
- 📱 **Fully Responsive** design
- ⚡ **Command Palette** (⌘K) for quick navigation
- 🔍 **SEO Optimized** with metadata

### Pages & Features

#### 🏠 Home (`/`)
- Component showcase
- Feature highlights
- Navigation to all sections

#### 📖 About (`/about`)
- Company information
- Technology stack
- Mission and values

#### 📧 Contact (`/contact`)
- Contact form with validation
- React Hook Form + Zod schema
- Success dialog on submission
- Form error handling

#### 🎨 Demo (`/demo`)
- Toast notification examples (Success, Error, Info, Warning)
- Alert component variants
- Tabs interface demonstration
- Interactive component playground

#### 📝 Blog (`/blog`)
- MDX-powered blog posts
- Syntax highlighting for code blocks
- Tag system
- Author and date metadata
- Individual post pages with navigation

#### 📊 Data Management (`/data`)
- Advanced data table with TanStack Table
- Sorting, filtering, and pagination
- Row selection with checkboxes
- Bulk actions
- Status badges
- CRUD operations

#### 📈 Dashboard (`/dashboard`)
- Analytics overview with statistics cards
- Interactive charts (Recharts):
  - Line chart (Revenue/Expenses/Profit)
  - Pie chart (Device distribution)
  - Bar chart (User activity)
  - Area chart (Traffic data)
- Tabbed interface
- Responsive visualizations

### UI Components

#### Basic Components
- **Button** - Multiple variants and sizes
- **Card** - Container with header, content, footer
- **Input** - Form input with validation
- **Label** - Accessible labels
- **Checkbox** - Selection component
- **Tabs** - Tabbed content organization
- **Table** - Data table base component
- **Alert** - Status messages (success, warning, error)
- **Dialog** - Modal dialogs with animations

#### Advanced Components
- **Form** - Complete form system with react-hook-form
- **Toast** - Notification system (Sonner)
- **Command Menu** - Quick navigation (⌘K)
- **Navigation Bar** - Sticky navigation with active states
- **Theme Toggle** - Dark/Light mode switcher

### API Routes

- `GET /api/stats` - Dashboard statistics
- `GET /api/users` - User list
- `POST /api/users` - Create user
- `GET /api/health` - Health check

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yslim-github/my-first-website.git
cd my-first-website
```

2. Checkout the working branch:
```bash
git checkout claude/init-project-011CUqzNcYmj8smUDmc3pTBi
```

3. Navigate to the Next.js app:
```bash
cd nextjs-shadcn-app
```

4. Install dependencies:
```bash
npm install
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

```bash
# Development
npm run dev          # Start dev server with Turbopack
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint

# Production Build
npm run build && npm start
```

## 📁 Project Structure

```
nextjs-shadcn-app/
├── src/
│   ├── app/
│   │   ├── about/              # About page
│   │   ├── blog/               # Blog with MDX
│   │   │   └── [slug]/         # Dynamic blog post pages
│   │   ├── contact/            # Contact form
│   │   ├── dashboard/          # Analytics dashboard
│   │   ├── data/               # Data table page
│   │   ├── demo/               # Component demo
│   │   ├── api/                # API routes
│   │   │   ├── health/         # Health check
│   │   │   ├── stats/          # Statistics
│   │   │   └── users/          # User CRUD
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home page
│   │   └── globals.css         # Global styles
│   ├── components/
│   │   ├── ui/                 # shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   ├── form.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── tabs.tsx
│   │   │   ├── table.tsx
│   │   │   ├── alert.tsx
│   │   │   ├── checkbox.tsx
│   │   │   └── sonner.tsx      # Toast component
│   │   ├── navigation.tsx      # Navigation bar
│   │   ├── theme-provider.tsx  # Theme provider
│   │   ├── theme-toggle.tsx    # Theme switcher
│   │   └── command-menu.tsx    # Command palette
│   ├── content/
│   │   └── blog/               # MDX blog posts
│   └── lib/
│       ├── utils.ts            # Utility functions
│       └── blog.ts             # Blog helpers
├── public/                     # Static assets
├── components.json             # shadcn/ui config
├── tailwind.config.ts          # Tailwind config
├── tsconfig.json               # TypeScript config
└── next.config.ts              # Next.js config
```

## 🎨 Tech Stack

### Core
- **Framework**: Next.js 16 (App Router, Turbopack)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4
- **UI Library**: shadcn/ui (Radix UI + Tailwind)

### State & Forms
- **Forms**: React Hook Form
- **Validation**: Zod
- **Theme**: next-themes

### Data & Tables
- **Tables**: TanStack Table (React Table v8)
- **Charts**: Recharts
- **Date Handling**: date-fns

### Content
- **MDX**: @next/mdx, @mdx-js/loader
- **Markdown**: react-markdown, rehype-highlight
- **Frontmatter**: gray-matter

### UI Components
- **Components**: Radix UI primitives
- **Icons**: Lucide React
- **Toasts**: Sonner
- **Command**: cmdk
- **Utilities**: class-variance-authority, clsx, tailwind-merge

## ⌨️ Keyboard Shortcuts

- `⌘K` or `Ctrl+K` - Open Command Palette
- `Esc` - Close dialogs/modals
- `↑` `↓` - Navigate command palette
- `Enter` - Select command

## 🎯 Key Features Explained

### Command Palette (⌘K)
Quick navigation to any page in the app. Try pressing `⌘K` or `Ctrl+K` anywhere in the app!

### Dark Mode
Automatic dark mode based on system preferences, with manual toggle available in the navigation bar.

### Form Validation
Contact form uses Zod schema validation with React Hook Form for robust error handling.

### Data Table
Fully featured table with:
- Column sorting (ascending/descending)
- Global and column filters
- Pagination
- Row selection
- Bulk actions

### Blog System
MDX-powered blog with:
- Frontmatter metadata
- Syntax highlighting
- Tag categorization
- Static generation for performance

### Dashboard
Analytics dashboard with multiple chart types powered by Recharts, fully responsive and interactive.

## 🎨 Customization

### Theme Colors

Edit `src/app/globals.css` to customize colors:

```css
@theme {
  --color-primary: hsl(240 5.9% 10%);
  --color-secondary: hsl(240 4.8% 95.9%);
  /* ... more colors */
}
```

### Add New Components

1. Install component if needed:
```bash
npm install @radix-ui/react-[component]
```

2. Create in `src/components/ui/[component].tsx`

3. Use the `cn()` utility for className merging

### Add Blog Posts

Create new MDX files in `src/content/blog/`:

```mdx
---
title: "Your Post Title"
date: "2024-01-01"
author: "Your Name"
excerpt: "Post description"
tags: ["tag1", "tag2"]
---

# Your content here
```

## 📝 API Documentation

### GET /api/stats
Returns dashboard statistics.

**Response:**
```json
{
  "totalRevenue": 45231,
  "activeUsers": 2350,
  "sales": 12234,
  "conversionRate": 24.5
}
```

### GET /api/users
Returns list of users.

### POST /api/users
Create a new user.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "role": "User"
}
```

## 🚢 Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms

Build the production bundle:
```bash
npm run build
```

The output will be in `.next/` directory.

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [TanStack Table](https://tanstack.com/table)
- [Recharts](https://recharts.org)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- [shadcn](https://twitter.com/shadcn) for the amazing component library
- [Vercel](https://vercel.com) for Next.js
- All the open source contributors

---

Built with ❤️ using Next.js and shadcn/ui
