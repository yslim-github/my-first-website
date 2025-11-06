import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";
import { CommandMenu } from "@/components/command-menu";

export const metadata: Metadata = {
  title: {
    default: "Next.js + shadcn/ui App",
    template: "%s | Next.js + shadcn/ui",
  },
  description: "A modern, full-featured web application built with Next.js 16, TypeScript, shadcn/ui components, and Tailwind CSS. Features include dark mode, data tables, charts, blog with MDX, and more.",
  keywords: ["Next.js", "React", "TypeScript", "shadcn/ui", "Tailwind CSS", "Radix UI", "Dark Mode", "Web Development"],
  authors: [{ name: "Sarah Johnson" }, { name: "Mike Chen" }, { name: "Emily Park" }],
  creator: "Next.js shadcn/ui Team",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://example.com",
    title: "Next.js + shadcn/ui App",
    description: "A modern web application with shadcn/ui components",
    siteName: "Next.js + shadcn/ui App",
  },
  twitter: {
    card: "summary_large_image",
    title: "Next.js + shadcn/ui App",
    description: "A modern web application with shadcn/ui components",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased flex flex-col min-h-screen">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
          <Toaster />
          <CommandMenu />
        </ThemeProvider>
      </body>
    </html>
  );
}
