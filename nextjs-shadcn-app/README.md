# Next.js + shadcn/ui App

A modern web application built with Next.js 16 and shadcn/ui components.

## Features

- **Next.js 16** with App Router
- **TypeScript** for type safety
- **Tailwind CSS v4** for styling
- **shadcn/ui** component library
- **Dark mode** support via CSS variables
- **Responsive design**

## Getting Started

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Build for Production

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles with Tailwind v4 theme
├── components/
│   └── ui/             # shadcn/ui components
│       ├── button.tsx
│       └── card.tsx
└── lib/
    └── utils.ts        # Utility functions (cn helper)
```

## shadcn/ui Components

This project includes the following shadcn/ui components:

- **Button** - Multiple variants (default, secondary, outline, ghost, link) and sizes
- **Card** - Card container with Header, Title, Description, Content, and Footer

## Adding More Components

To add more shadcn/ui components manually:

1. Create component files in `src/components/ui/`
2. Use the `cn()` utility from `@/lib/utils` for className merging
3. Follow the shadcn/ui component patterns

## Customization

### Theme Colors

Edit `src/app/globals.css` to customize the color palette. The theme uses CSS variables defined in the `@theme` block.

### Components

All UI components are located in `src/components/ui/` and can be customized as needed.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs)
