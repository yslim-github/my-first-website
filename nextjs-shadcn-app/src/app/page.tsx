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
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="mx-auto max-w-4xl text-center space-y-6">
          <div className="space-y-2">
            <Badge variant="secondary" className="mb-4">
              Next.js 16 + shadcn/ui
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Build Beautiful Web Apps
              <span className="block text-primary mt-2">Lightning Fast</span>
            </h1>
          </div>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            A comprehensive Next.js template with 30+ pre-built components, dark mode,
            data visualization, and everything you need to ship faster.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/demo">
              <Button size="lg" className="w-full sm:w-auto">
                Explore Components
              </Button>
            </Link>
            <Link href="/blog">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Read Docs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y bg-muted/50">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="text-3xl font-bold">30+</div>
              <div className="text-sm text-muted-foreground">Components</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">5</div>
              <div className="text-sm text-muted-foreground">Blog Posts</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">100%</div>
              <div className="text-sm text-muted-foreground">Type Safe</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">Dark</div>
              <div className="text-sm text-muted-foreground">Mode Ready</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-4xl space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">
              Everything You Need
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Built with modern tools and best practices for building production-ready applications
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <div className="text-4xl mb-2">⚡</div>
                <CardTitle>Lightning Fast</CardTitle>
                <CardDescription>
                  Powered by Next.js 16 and Turbopack
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Experience blazing fast hot reloads and optimized production builds with the latest Next.js features.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="text-4xl mb-2">🎨</div>
                <CardTitle>Beautiful UI</CardTitle>
                <CardDescription>30+ shadcn/ui components</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Pre-built, accessible components styled with Tailwind CSS. Ready to use and fully customizable.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="text-4xl mb-2">🔒</div>
                <CardTitle>Type Safe</CardTitle>
                <CardDescription>100% TypeScript coverage</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Catch errors before runtime with full TypeScript support and excellent IDE integration.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="text-4xl mb-2">📊</div>
                <CardTitle>Data Visualization</CardTitle>
                <CardDescription>Charts and tables included</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Built-in Recharts integration and TanStack Table for powerful data display and manipulation.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="text-4xl mb-2">🌙</div>
                <CardTitle>Dark Mode</CardTitle>
                <CardDescription>System preference support</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Automatic dark mode with next-themes. Respects user's system preferences out of the box.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="text-4xl mb-2">♿</div>
                <CardTitle>Accessible</CardTitle>
                <CardDescription>WAI-ARIA compliant</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Built on Radix UI primitives ensuring keyboard navigation and screen reader support.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-y bg-muted/50">
        <div className="container mx-auto px-4 py-20">
          <Card className="border-2 max-w-4xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl">Ready to Get Started?</CardTitle>
              <CardDescription className="text-lg">
                Explore all components, read the documentation, or start building your next project
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/demo">
                  <Button size="lg" className="w-full sm:w-auto">
                    View All Components
                  </Button>
                </Link>
                <Link href="/dashboard">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    See Dashboard
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold mb-8 text-center">Explore Features</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <Link href="/blog">
              <Card className="hover:border-primary transition-colors cursor-pointer h-full">
                <CardHeader>
                  <CardTitle>📝 Blog</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Read tutorials and guides about Next.js, React, and modern web development.
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/data">
              <Card className="hover:border-primary transition-colors cursor-pointer h-full">
                <CardHeader>
                  <CardTitle>📋 Data Tables</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Advanced tables with sorting, filtering, pagination, and CSV export.
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/dashboard">
              <Card className="hover:border-primary transition-colors cursor-pointer h-full">
                <CardHeader>
                  <CardTitle>📊 Dashboard</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Interactive charts and data visualization with Recharts.
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
