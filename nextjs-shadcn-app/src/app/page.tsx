import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">
            Next.js + shadcn/ui
          </h1>
          <p className="text-muted-foreground text-lg">
            A modern web application with beautiful UI components
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Button Variants</CardTitle>
              <CardDescription>
                Different styles of buttons available
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button className="w-full">Default Button</Button>
              <Button variant="secondary" className="w-full">
                Secondary
              </Button>
              <Button variant="outline" className="w-full">
                Outline
              </Button>
              <Button variant="ghost" className="w-full">
                Ghost
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Features</CardTitle>
              <CardDescription>Built with modern tools</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>✓ Next.js 16 with App Router</li>
                <li>✓ TypeScript for type safety</li>
                <li>✓ Tailwind CSS for styling</li>
                <li>✓ shadcn/ui components</li>
                <li>✓ Dark mode support</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Get Started</CardTitle>
              <CardDescription>Start building your app</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Edit <code className="bg-muted px-1 py-0.5 rounded">src/app/page.tsx</code> to
                customize this page.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="link" className="w-full">
                Learn More →
              </Button>
            </CardFooter>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Button Sizes</CardTitle>
            <CardDescription>
              Buttons come in different sizes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3 items-center">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
              <Button size="icon">🚀</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>New Components</CardTitle>
            <CardDescription>
              Explore our new Input, Form, and Dialog components
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Visit the Contact page to see a fully functional form with validation,
              input components, and a success dialog.
            </p>
            <Link href="/contact">
              <Button className="w-full">Try the Contact Form →</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
