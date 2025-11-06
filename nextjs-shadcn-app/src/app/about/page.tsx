import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold tracking-tight">About Us</h1>
          <div className="flex gap-2">
            <ThemeToggle />
            <Link href="/">
              <Button variant="outline">← Back to Home</Button>
            </Link>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Our Mission</CardTitle>
            <CardDescription>
              Building modern web applications with cutting-edge technology
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              We are dedicated to creating beautiful, performant, and accessible web applications
              using the latest technologies and best practices. Our team leverages modern tools
              like Next.js, TypeScript, and shadcn/ui to deliver exceptional user experiences.
            </p>
            <p className="text-muted-foreground">
              With a focus on developer experience and user satisfaction, we strive to build
              products that not only look great but also perform exceptionally well across all
              devices and platforms.
            </p>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>🚀 Fast</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Optimized for performance with Next.js and Turbopack
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>🎨 Beautiful</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Styled with Tailwind CSS and shadcn/ui components
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>♿ Accessible</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Built with accessibility in mind using Radix UI primitives
              </p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Technology Stack</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid gap-2 md:grid-cols-2">
              <li className="flex items-center gap-2">
                <span className="text-primary">▸</span>
                <span>Next.js 16 with App Router</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">▸</span>
                <span>TypeScript for type safety</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">▸</span>
                <span>Tailwind CSS v4</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">▸</span>
                <span>shadcn/ui component library</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">▸</span>
                <span>React Hook Form</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">▸</span>
                <span>Radix UI primitives</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <div className="flex justify-center gap-4">
          <Link href="/contact">
            <Button>Contact Us →</Button>
          </Link>
          <Link href="/">
            <Button variant="outline">View Components</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
