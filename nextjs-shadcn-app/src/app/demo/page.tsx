"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { toast } from "sonner";

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-4xl space-y-8">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Component Demo</h1>
          <p className="text-muted-foreground mt-2">
            Explore our new components: Navigation, Tabs, Alerts, and Toast notifications
          </p>
        </div>

        {/* Toast Demo Section */}
        <Card>
          <CardHeader>
            <CardTitle>Toast Notifications</CardTitle>
            <CardDescription>
              Click the buttons below to trigger different types of toast notifications
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-3">
              <Button
                onClick={() =>
                  toast.success("Success!", {
                    description: "Your action was completed successfully.",
                  })
                }
              >
                Success Toast
              </Button>
              <Button
                variant="destructive"
                onClick={() =>
                  toast.error("Error!", {
                    description: "Something went wrong. Please try again.",
                  })
                }
              >
                Error Toast
              </Button>
              <Button
                variant="outline"
                onClick={() =>
                  toast.info("Info", {
                    description: "Here's some useful information for you.",
                  })
                }
              >
                Info Toast
              </Button>
              <Button
                variant="secondary"
                onClick={() =>
                  toast.warning("Warning!", {
                    description: "Please be careful with this action.",
                  })
                }
              >
                Warning Toast
              </Button>
              <Button
                variant="outline"
                onClick={() =>
                  toast("Custom Toast", {
                    description: "This is a custom toast with an action button.",
                    action: {
                      label: "Undo",
                      onClick: () => toast.info("Undo clicked!"),
                    },
                  })
                }
              >
                Toast with Action
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  const promise = new Promise((resolve) =>
                    setTimeout(() => resolve({ name: "John" }), 2000)
                  );

                  toast.promise(promise, {
                    loading: "Loading...",
                    success: "Data loaded successfully!",
                    error: "Failed to load data",
                  });
                }}
              >
                Promise Toast
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Alert Demo Section */}
        <Card>
          <CardHeader>
            <CardTitle>Alert Components</CardTitle>
            <CardDescription>
              Static alert messages with different variants
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert>
              <AlertTitle>Default Alert</AlertTitle>
              <AlertDescription>
                This is a default alert with standard styling.
              </AlertDescription>
            </Alert>

            <Alert variant="success">
              <AlertTitle>Success Alert</AlertTitle>
              <AlertDescription>
                Your changes have been saved successfully!
              </AlertDescription>
            </Alert>

            <Alert variant="warning">
              <AlertTitle>Warning Alert</AlertTitle>
              <AlertDescription>
                Please review your information before submitting.
              </AlertDescription>
            </Alert>

            <Alert variant="destructive">
              <AlertTitle>Error Alert</AlertTitle>
              <AlertDescription>
                There was an error processing your request. Please try again.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Tabs Demo Section */}
        <Card>
          <CardHeader>
            <CardTitle>Tabs Component</CardTitle>
            <CardDescription>
              Organize content into tabbed sections
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="pricing">Pricing</TabsTrigger>
                <TabsTrigger value="support">Support</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-4">
                <div className="rounded-lg border p-4">
                  <h3 className="text-lg font-semibold mb-2">Welcome to our platform</h3>
                  <p className="text-muted-foreground">
                    This is the overview section where you can find general information
                    about our services and offerings. We provide modern, scalable solutions
                    built with the latest technologies.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="features" className="space-y-4">
                <div className="rounded-lg border p-4">
                  <h3 className="text-lg font-semibold mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      <span>Fast and responsive user interface</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      <span>Dark mode support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      <span>Comprehensive component library</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary">✓</span>
                      <span>Built with TypeScript for type safety</span>
                    </li>
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="pricing" className="space-y-4">
                <div className="rounded-lg border p-4">
                  <h3 className="text-lg font-semibold mb-2">Pricing Plans</h3>
                  <p className="text-muted-foreground mb-4">
                    Choose the plan that best fits your needs
                  </p>
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="rounded-lg border p-4 text-center">
                      <div className="font-bold text-lg">Free</div>
                      <div className="text-3xl font-bold my-2">$0</div>
                      <div className="text-sm text-muted-foreground">per month</div>
                    </div>
                    <div className="rounded-lg border p-4 text-center bg-primary text-primary-foreground">
                      <div className="font-bold text-lg">Pro</div>
                      <div className="text-3xl font-bold my-2">$29</div>
                      <div className="text-sm">per month</div>
                    </div>
                    <div className="rounded-lg border p-4 text-center">
                      <div className="font-bold text-lg">Enterprise</div>
                      <div className="text-3xl font-bold my-2">$99</div>
                      <div className="text-sm text-muted-foreground">per month</div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="support" className="space-y-4">
                <div className="rounded-lg border p-4">
                  <h3 className="text-lg font-semibold mb-2">Need Help?</h3>
                  <p className="text-muted-foreground mb-4">
                    We're here to help you succeed. Contact our support team through any of these channels:
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span>📧</span>
                      <span>Email: support@example.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>💬</span>
                      <span>Live Chat: Available 24/7</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>📚</span>
                      <span>Documentation: Comprehensive guides</span>
                    </div>
                  </div>
                  <Button className="mt-4 w-full">Contact Support</Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Navigation Info */}
        <Card>
          <CardHeader>
            <CardTitle>Navigation Bar</CardTitle>
            <CardDescription>
              A sticky navigation bar is now available on all pages
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              The navigation bar at the top of this page includes:
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="text-primary">▸</span>
                <span>Links to all main pages (Home, About, Contact, Demo)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">▸</span>
                <span>Active page highlighting</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">▸</span>
                <span>Dark mode toggle</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">▸</span>
                <span>Responsive design with mobile menu</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
