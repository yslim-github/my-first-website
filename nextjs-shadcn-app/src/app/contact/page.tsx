"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export default function ContactPage() {
  const [showDialog, setShowDialog] = useState(false);
  const [submittedData, setSubmittedData] = useState<z.infer<typeof formSchema> | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setSubmittedData(values);
    setShowDialog(true);
    form.reset();
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-2xl space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold tracking-tight">Contact Us</h1>
          <div className="flex gap-2">
            <ThemeToggle />
            <Link href="/">
              <Button variant="outline">← Back to Home</Button>
            </Link>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Get in Touch</CardTitle>
            <CardDescription>
              Fill out the form below and we'll get back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormDescription>
                        Your full name or preferred name.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="john@example.com"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        We'll never share your email with anyone else.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input placeholder="How can we help?" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Input placeholder="Your message here..." {...field} />
                      </FormControl>
                      <FormDescription>
                        Please provide as much detail as possible.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex gap-4">
                  <Button type="submit" className="flex-1">
                    Send Message
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => form.reset()}
                  >
                    Reset
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Other Ways to Reach Us</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📧</span>
              <div>
                <p className="font-medium">Email</p>
                <p className="text-sm text-muted-foreground">contact@example.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">📱</span>
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">🏢</span>
              <div>
                <p className="font-medium">Office</p>
                <p className="text-sm text-muted-foreground">
                  123 Web Street, Internet City, 12345
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Message Sent Successfully! 🎉</DialogTitle>
            <DialogDescription>
              Thank you for contacting us. We've received your message and will get back to you soon.
            </DialogDescription>
          </DialogHeader>
          {submittedData && (
            <div className="space-y-2 rounded-md bg-muted p-4">
              <p className="text-sm">
                <strong>Name:</strong> {submittedData.name}
              </p>
              <p className="text-sm">
                <strong>Email:</strong> {submittedData.email}
              </p>
              <p className="text-sm">
                <strong>Subject:</strong> {submittedData.subject}
              </p>
              <p className="text-sm">
                <strong>Message:</strong> {submittedData.message}
              </p>
            </div>
          )}
          <div className="flex justify-end gap-2">
            <Button onClick={() => setShowDialog(false)}>Close</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
