import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import { blogPosts } from "@/lib/blog-data";
import { site } from "@/lib/config";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { BackToTop } from "@/components/ui/BackToTop";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: `Yoga & Wellness Articles — ${site.name}`,
  description:
    "Read expert insights, wellness tips, yoga guidance, and practical techniques to support your journey toward a healthier and more balanced life.",
  alternates: { canonical: "/blog" },
};

export default function BlogListingPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero banner */}
        <div className="relative flex h-64 items-end overflow-hidden sm:h-80">
          <Image
            src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1600&q=80"
            alt="Yoga journal"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/40 to-transparent" />
          <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-ink/50 to-transparent" />
          <div className="container-luxe relative pb-8 sm:pb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-gold-light">
              Our Journal
            </p>
            <h1 className="mt-1 font-serif text-3xl font-semibold text-white sm:text-4xl">
              Yoga &amp; Wellness Articles
            </h1>
          </div>
        </div>

        {/* Article grid */}
        <section className="section-pad">
          <div className="container-luxe">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
              {blogPosts.map((post) => {
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

            <div className="mt-12 text-center">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full border-2 border-gold px-7 py-3.5 text-sm font-semibold text-gold transition-all hover:-translate-y-0.5 hover:bg-gold hover:text-ink"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden />
                Back to Home
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
      <BackToTop />
    </>
  );
}
