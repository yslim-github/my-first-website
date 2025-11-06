import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-4xl space-y-8">
        <h1 className="text-4xl font-bold tracking-tight">About Us</h1>

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
              <li className="flex items-center gap-2">
                <span className="text-primary">▸</span>
                <span>TanStack Table</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">▸</span>
                <span>Recharts for data visualization</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Separator />

        <div>
          <h2 className="text-3xl font-bold tracking-tight mb-6">Our Team</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src="https://github.com/shadcn.png" alt="Sarah Johnson" />
                    <AvatarFallback>SJ</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-lg">Sarah Johnson</h3>
                    <p className="text-sm text-muted-foreground mb-2">Lead Developer</p>
                    <div className="flex gap-2 justify-center flex-wrap">
                      <Badge variant="secondary">React</Badge>
                      <Badge variant="secondary">Next.js</Badge>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Full-stack developer with 8+ years of experience building scalable web applications.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src="https://github.com/vercel.png" alt="Mike Chen" />
                    <AvatarFallback>MC</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-lg">Mike Chen</h3>
                    <p className="text-sm text-muted-foreground mb-2">UI/UX Designer</p>
                    <div className="flex gap-2 justify-center flex-wrap">
                      <Badge variant="secondary">Figma</Badge>
                      <Badge variant="secondary">Design</Badge>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Creative designer focused on user-centered design and modern aesthetics.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <Avatar className="h-20 w-20">
                    <AvatarFallback>EP</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-lg">Emily Park</h3>
                    <p className="text-sm text-muted-foreground mb-2">DevOps Engineer</p>
                    <div className="flex gap-2 justify-center flex-wrap">
                      <Badge variant="secondary">AWS</Badge>
                      <Badge variant="secondary">Docker</Badge>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Infrastructure specialist ensuring high availability and performance.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Separator />

        <Card>
          <CardHeader>
            <CardTitle>Our Values</CardTitle>
            <CardDescription>
              The principles that guide our work
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <h4 className="font-semibold flex items-center gap-2">
                  <span className="text-xl">💡</span>
                  Innovation
                </h4>
                <p className="text-sm text-muted-foreground">
                  We embrace new technologies and approaches to solve problems in creative ways.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold flex items-center gap-2">
                  <span className="text-xl">🤝</span>
                  Collaboration
                </h4>
                <p className="text-sm text-muted-foreground">
                  Working together as a team and with our clients to achieve the best results.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold flex items-center gap-2">
                  <span className="text-xl">🎯</span>
                  Quality
                </h4>
                <p className="text-sm text-muted-foreground">
                  Delivering high-quality code and design that stands the test of time.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold flex items-center gap-2">
                  <span className="text-xl">📚</span>
                  Learning
                </h4>
                <p className="text-sm text-muted-foreground">
                  Continuous improvement and staying current with industry trends.
                </p>
              </div>
            </div>
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
