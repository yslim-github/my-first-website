import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-8">
      <Card className="max-w-md w-full">
        <CardHeader className="text-center">
          <div className="text-6xl mb-4">404</div>
          <CardTitle className="text-2xl">Page Not Found</CardTitle>
          <CardDescription>
            The page you're looking for doesn't exist or has been moved.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground text-center">
            Don't worry, here are some helpful links instead:
          </p>
          <div className="grid gap-2">
            <Link href="/" className="w-full">
              <Button variant="default" className="w-full">
                Go to Home
              </Button>
            </Link>
            <Link href="/blog" className="w-full">
              <Button variant="outline" className="w-full">
                Browse Blog
              </Button>
            </Link>
            <Link href="/dashboard" className="w-full">
              <Button variant="outline" className="w-full">
                View Dashboard
              </Button>
            </Link>
          </div>
          <div className="pt-4 text-center">
            <p className="text-sm text-muted-foreground">
              Or use <kbd className="px-2 py-1 text-xs rounded bg-muted">⌘K</kbd> to search
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
