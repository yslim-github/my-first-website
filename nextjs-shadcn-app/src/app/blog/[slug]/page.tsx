import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import "highlight.js/styles/github-dark.css";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <article className="mx-auto max-w-3xl">
        <Link href="/blog">
          <Button variant="ghost" size="sm" className="mb-8">
            ← Back to Blog
          </Button>
        </Link>

        <header className="mb-8 space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">{post.title}</h1>
          <div className="flex items-center gap-4 text-muted-foreground">
            <span className="font-medium">{post.author}</span>
            <span>•</span>
            <time dateTime={post.date}>
              {format(new Date(post.date), "MMMM d, yyyy")}
            </time>
          </div>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className="prose prose-gray dark:prose-invert max-w-none">
          <ReactMarkdown rehypePlugins={[rehypeHighlight, rehypeRaw]}>
            {post.content}
          </ReactMarkdown>
        </div>

        <footer className="mt-12 pt-8 border-t">
          <Link href="/blog">
            <Button variant="outline">← Back to all posts</Button>
          </Link>
        </footer>
      </article>
    </div>
  );
}
