import { ImageWithLoader as Image } from "@/components/ui/ImageWithLoader";
import Link from "next/link";
import { Calendar } from "lucide-react";
import { blogPosts } from "@/lib/blog-data";
import { cn } from "@/lib/utils";

/** Derive unique categories with icon + post count. */
function getCategories() {
  const map = new Map<string, { icon: typeof blogPosts[0]["icon"]; count: number }>();
  for (const post of blogPosts) {
    const entry = map.get(post.category);
    if (entry) {
      entry.count++;
    } else {
      map.set(post.category, { icon: post.icon, count: 1 });
    }
  }
  return Array.from(map, ([name, { icon, count }]) => ({ name, icon, count }));
}

export function BlogSidebar({ currentSlug }: { currentSlug: string }) {
  const categories = getCategories();

  return (
    <aside className="space-y-8 lg:sticky lg:top-28">
      {/* Categories */}
      <div className="rounded-2xl border bg-elevated p-6">
        <h2 className="font-serif text-lg font-semibold">Categories</h2>
        <ul className="mt-4 space-y-2">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <li key={cat.name}>
                <Link
                  href="/#blog"
                  className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition-colors hover:bg-gold/10"
                >
                  <Icon className="h-4 w-4 text-gold" aria-hidden />
                  <span className="flex-1">{cat.name}</span>
                  <span className="rounded-full bg-gold/12 px-2 py-0.5 text-xs font-semibold text-gold">
                    {cat.count}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* All Articles */}
      <div className="rounded-2xl border bg-elevated p-6">
        <h2 className="font-serif text-lg font-semibold">All Articles</h2>
        <ul className="mt-4 space-y-2">
          {blogPosts.map((post) => {
            const isCurrent = post.slug === currentSlug;
            return (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  aria-current={isCurrent ? "page" : undefined}
                  className={cn(
                    "flex items-start gap-3 rounded-xl px-3 py-2 transition-colors hover:bg-gold/10",
                    isCurrent && "bg-gold/10 border-l-2 border-gold",
                  )}
                >
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="line-clamp-2 text-sm font-medium leading-snug">
                      {post.title}
                    </p>
                    <span className="mt-1 flex items-center gap-1 text-xs text-muted">
                      <Calendar className="h-3 w-3" aria-hidden />
                      {post.date}
                    </span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
