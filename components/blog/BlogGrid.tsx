"use client";

import { useState, useMemo } from "react";
import { ImageWithLoader as Image } from "@/components/ui/ImageWithLoader";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { blogPosts } from "@/lib/blog-data";
import { cn } from "@/lib/utils";

export function BlogGrid() {
  const [active, setActive] = useState("All");

  const categories = useMemo(() => {
    const unique = Array.from(new Set(blogPosts.map((p) => p.category)));
    return ["All", ...unique];
  }, []);

  const filtered = active === "All"
    ? blogPosts
    : blogPosts.filter((p) => p.category === active);

  return (
    <>
      {/* Category filters */}
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={cn(
              "rounded-full border px-5 py-2 text-sm font-medium transition-all",
              active === cat
                ? "border-gold bg-gold text-ink shadow-sm"
                : "border-current/15 text-muted hover:border-gold/50 hover:text-gold",
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Article grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
        {filtered.map((post) => {
          const Icon = post.icon;
          return (
            <article
              key={post.slug}
              className="group overflow-hidden rounded-3xl border bg-elevated shadow-sm transition-all hover:-translate-y-1.5 hover:shadow-luxe"
            >
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
                  <span className="absolute left-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-ink">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                </div>

                <div className="p-5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-gold">
                    {post.category}
                  </span>
                  <h2 className="mt-1.5 line-clamp-2 font-serif text-lg font-semibold leading-snug">
                    {post.title}
                  </h2>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">
                    {post.excerpt}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-gold">
                    Read Article
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </span>
                  <div className="mt-3 flex items-center gap-3 border-t pt-3 text-xs text-muted">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" aria-hidden />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" aria-hidden />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          );
        })}
      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <p className="mt-8 text-center text-muted">
          No articles found in this category.
        </p>
      )}
    </>
  );
}
