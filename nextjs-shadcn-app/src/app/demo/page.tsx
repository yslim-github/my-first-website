"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DatePicker } from "@/components/ui/date-picker";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { useState } from "react";

export default function DemoPage() {
  const [showNotifications, setShowNotifications] = useState(true);
  const [showEmails, setShowEmails] = useState(false);
  const [switchEnabled, setSwitchEnabled] = useState(false);
  const [sliderValue, setSliderValue] = useState([50]);
  const [progress, setProgress] = useState(60);

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-4xl space-y-8">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Component Demo</h1>
          <p className="text-muted-foreground mt-2">
            Explore all shadcn/ui components: Avatars, Badges, Selects, Date Pickers, and more
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

        {/* Avatar Demo Section */}
        <Card>
          <CardHeader>
            <CardTitle>Avatar Component</CardTitle>
            <CardDescription>
              Display user profile pictures with fallback support
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex flex-col items-center gap-2">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <span className="text-xs text-muted-foreground">With Image</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Avatar>
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <span className="text-xs text-muted-foreground">Fallback</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Avatar className="h-16 w-16">
                  <AvatarImage src="https://github.com/vercel.png" alt="@vercel" />
                  <AvatarFallback>VC</AvatarFallback>
                </Avatar>
                <span className="text-xs text-muted-foreground">Large</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="text-xs">SM</AvatarFallback>
                </Avatar>
                <span className="text-xs text-muted-foreground">Small</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Badge Demo Section */}
        <Card>
          <CardHeader>
            <CardTitle>Badge Component</CardTitle>
            <CardDescription>
              Display status indicators and labels with different variants
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge>New ✨</Badge>
              <Badge variant="secondary">Beta</Badge>
              <Badge variant="destructive">Deprecated</Badge>
              <Badge variant="outline">v2.0.0</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Select Demo Section */}
        <Card>
          <CardHeader>
            <CardTitle>Select Component</CardTitle>
            <CardDescription>
              Dropdown selection with search and grouping support
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium">Choose a framework</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a framework" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="next">Next.js</SelectItem>
                    <SelectItem value="react">React</SelectItem>
                    <SelectItem value="vue">Vue</SelectItem>
                    <SelectItem value="svelte">Svelte</SelectItem>
                    <SelectItem value="angular">Angular</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Choose a theme</label>
                <Select defaultValue="dark">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* DatePicker Demo Section */}
        <Card>
          <CardHeader>
            <CardTitle>DatePicker Component</CardTitle>
            <CardDescription>
              Select dates with an interactive calendar popup
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <label className="text-sm font-medium">Pick a date</label>
              <DatePicker />
            </div>
          </CardContent>
        </Card>

        {/* Popover Demo Section */}
        <Card>
          <CardHeader>
            <CardTitle>Popover Component</CardTitle>
            <CardDescription>
              Display contextual information in a floating popup
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4 flex-wrap">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline">Open Popover</Button>
                </PopoverTrigger>
                <PopoverContent>
                  <div className="space-y-2">
                    <h4 className="font-medium leading-none">Dimensions</h4>
                    <p className="text-sm text-muted-foreground">
                      Set the dimensions for the layer.
                    </p>
                    <div className="grid gap-2">
                      <div className="grid grid-cols-3 items-center gap-4">
                        <label className="text-sm">Width</label>
                        <input
                          className="col-span-2 h-8 rounded-md border border-input bg-background px-3 text-sm"
                          defaultValue="100%"
                        />
                      </div>
                      <div className="grid grid-cols-3 items-center gap-4">
                        <label className="text-sm">Height</label>
                        <input
                          className="col-span-2 h-8 rounded-md border border-input bg-background px-3 text-sm"
                          defaultValue="25px"
                        />
                      </div>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </CardContent>
        </Card>

        {/* Dropdown Menu Demo Section */}
        <Card>
          <CardHeader>
            <CardTitle>Dropdown Menu Component</CardTitle>
            <CardDescription>
              Context menus with checkboxes, radio items, and sub-menus
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4 flex-wrap">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">Open Menu</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Team</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-destructive">
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">Preferences</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem
                    checked={showNotifications}
                    onCheckedChange={setShowNotifications}
                  >
                    Push Notifications
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={showEmails}
                    onCheckedChange={setShowEmails}
                  >
                    Email Notifications
                  </DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </CardContent>
        </Card>

        {/* Tooltip Demo Section */}
        <Card>
          <CardHeader>
            <CardTitle>Tooltip Component</CardTitle>
            <CardDescription>
              Show helpful hints on hover
            </CardDescription>
          </CardHeader>
          <CardContent>
            <TooltipProvider>
              <div className="flex gap-4 flex-wrap">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">Hover me</Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>This is a helpful tooltip!</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button>More info</Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Tooltips provide additional context</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </TooltipProvider>
          </CardContent>
        </Card>

        {/* Switch Demo Section */}
        <Card>
          <CardHeader>
            <CardTitle>Switch Component</CardTitle>
            <CardDescription>
              Toggle between enabled and disabled states
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Switch id="airplane-mode" checked={switchEnabled} onCheckedChange={setSwitchEnabled} />
                <Label htmlFor="airplane-mode">Airplane Mode</Label>
              </div>
              <span className="text-sm text-muted-foreground">
                {switchEnabled ? "Enabled" : "Disabled"}
              </span>
            </div>
          </CardContent>
        </Card>

        {/* Slider Demo Section */}
        <Card>
          <CardHeader>
            <CardTitle>Slider Component</CardTitle>
            <CardDescription>
              Select a value from a range
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label>Volume</Label>
                <span className="text-sm text-muted-foreground">{sliderValue[0]}%</span>
              </div>
              <Slider
                value={sliderValue}
                onValueChange={setSliderValue}
                max={100}
                step={1}
              />
            </div>
          </CardContent>
        </Card>

        {/* Progress Demo Section */}
        <Card>
          <CardHeader>
            <CardTitle>Progress Component</CardTitle>
            <CardDescription>
              Display progress of a task
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Uploading...</span>
                <span>{progress}%</span>
              </div>
              <Progress value={progress} />
            </div>
            <div className="flex gap-2">
              <Button size="sm" onClick={() => setProgress(Math.min(100, progress + 10))}>
                +10%
              </Button>
              <Button size="sm" onClick={() => setProgress(Math.max(0, progress - 10))}>
                -10%
              </Button>
              <Button size="sm" variant="outline" onClick={() => setProgress(0)}>
                Reset
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Separator Demo Section */}
        <Card>
          <CardHeader>
            <CardTitle>Separator Component</CardTitle>
            <CardDescription>
              Visually separate content sections
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div>
              <div className="space-y-1">
                <h4 className="text-sm font-medium leading-none">shadcn/ui</h4>
                <p className="text-sm text-muted-foreground">
                  Beautifully designed components built with Radix UI and Tailwind CSS.
                </p>
              </div>
              <Separator className="my-4" />
              <div className="flex h-5 items-center space-x-4 text-sm">
                <div>Blog</div>
                <Separator orientation="vertical" />
                <div>Docs</div>
                <Separator orientation="vertical" />
                <div>Source</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Sheet Demo Section */}
        <Card>
          <CardHeader>
            <CardTitle>Sheet Component</CardTitle>
            <CardDescription>
              Slide-in panels from any side of the screen
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2 flex-wrap">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline">Open Right</Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Sheet Panel</SheetTitle>
                    <SheetDescription>
                      This is a slide-in panel from the right side.
                    </SheetDescription>
                  </SheetHeader>
                  <div className="mt-4 space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Sheets are great for settings panels, filters, or additional information.
                    </p>
                    <Button className="w-full">Save Changes</Button>
                  </div>
                </SheetContent>
              </Sheet>

              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline">Open Left</Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <SheetHeader>
                    <SheetTitle>Left Panel</SheetTitle>
                    <SheetDescription>
                      Slide-in from the left side.
                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </div>
          </CardContent>
        </Card>

        {/* ScrollArea Demo Section */}
        <Card>
          <CardHeader>
            <CardTitle>ScrollArea Component</CardTitle>
            <CardDescription>
              Custom styled scrollable areas
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-72 w-full rounded-md border p-4">
              <div className="space-y-4">
                <h4 className="text-sm font-medium leading-none">Tags</h4>
                {Array.from({ length: 50 }).map((_, i) => (
                  <div key={i} className="text-sm">
                    Tag {i + 1}
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Accordion Demo Section */}
        <Card>
          <CardHeader>
            <CardTitle>Accordion Component</CardTitle>
            <CardDescription>
              Collapsible content sections
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern and uses semantic HTML.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Is it styled?</AccordionTrigger>
                <AccordionContent>
                  Yes. It comes with default styles that matches the other components' aesthetic.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Is it animated?</AccordionTrigger>
                <AccordionContent>
                  Yes. It's animated by default, but you can disable it if you prefer.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
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
