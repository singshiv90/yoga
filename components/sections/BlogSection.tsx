"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { blogPosts } from "@/lib/blog-data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGroup } from "@/components/ui/Reveal";

export function BlogSection() {
  return (
    <section id="blog" className="section-pad">
      <div className="container-luxe">
        <SectionHeading
          kicker="From Our Journal"
          title={
            <>
              Explore Our{" "}
              <span className="text-gradient-gold">Yoga Knowledge Hub</span>
            </>
          }
          subtitle="Read expert insights, wellness tips, yoga guidance, and practical techniques to support your journey toward a healthier and more balanced life."
        />

        <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {blogPosts.slice(0, 4).map((post) => {
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
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
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
                    <h3 className="mt-1.5 line-clamp-2 font-serif text-lg font-semibold leading-snug">
                      {post.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">
                      {post.excerpt}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-gold hover:text-gold-dark">
                      Read More
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
        </StaggerGroup>

        <div className="mt-10 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full border-2 border-gold px-7 py-3.5 text-sm font-semibold text-gold transition-all hover:-translate-y-0.5 hover:bg-gold hover:text-ink"
          >
            View All Articles
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
