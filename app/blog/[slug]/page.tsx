import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  CheckCircle2,
  Clock,
  MessageCircle,
} from "lucide-react";
import { blogPosts, getBlogPost } from "@/lib/blog-data";
import { site, whatsappLink } from "@/lib/config";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { BackToTop } from "@/components/ui/BackToTop";


// ---------------------------------------------------------------------------
// Static export — pre-render all blog slugs at build time
// ---------------------------------------------------------------------------
export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

// ---------------------------------------------------------------------------
// SEO metadata
// ---------------------------------------------------------------------------
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: `${post.title} — ${site.name}`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      locale: site.locale,
      url: `${site.url}/blog/${post.slug}`,
      siteName: site.name,
      title: post.title,
      description: post.excerpt,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

// ---------------------------------------------------------------------------
// Page component
// ---------------------------------------------------------------------------
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return (
      <>
        <Navbar />
        <main className="section-pad text-center">
          <div className="container-luxe">
            <h1 className="font-serif text-4xl font-semibold">
              Post Not Found
            </h1>
            <p className="mt-4 text-muted">
              The article you&apos;re looking for doesn&apos;t exist.
            </p>
            <Link
              href="/blog"
              className="mt-6 inline-flex items-center gap-2 text-gold hover:text-gold-dark"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Articles
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const Icon = post.icon;

  return (
    <>
      <Navbar />
      <main>
        {/* Hero image */}
        <div className="relative h-[400px] w-full overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/40 to-transparent" />
          {/* Top overlay so fixed navbar + logo match other pages */}
          <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-ink/60 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
            <div className="container-luxe">
              <div className="flex flex-wrap items-center gap-3 text-sm text-white/80">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-gold/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                  <Icon className="h-3.5 w-3.5" aria-hidden />
                  {post.category}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" aria-hidden />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" aria-hidden />
                  {post.readTime}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Article + Sidebar grid */}
        <div className="section-pad">
          <div className="container-luxe">
            <article className="mx-auto max-w-3xl">
              <h1 className="font-serif text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
                {post.title}
              </h1>

              <div className="mt-8 space-y-5">
                {post.content.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-base leading-relaxed text-muted sm:text-lg"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Benefits */}
              <div className="mt-10 rounded-2xl border bg-elevated p-6 sm:p-8">
                <h2 className="font-serif text-2xl font-semibold">
                  Key Benefits
                </h2>
                <ul className="mt-4 space-y-3">
                  {post.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2
                        className="mt-0.5 h-5 w-5 shrink-0 text-gold"
                        aria-hidden
                      />
                      <span className="text-muted">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Conclusion */}
              <div className="mt-10">
                <h2 className="font-serif text-2xl font-semibold">
                  Conclusion
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
                  {post.conclusion}
                </p>
              </div>

              {/* Footer CTA */}
              <div className="mt-12 flex flex-col items-center gap-4 border-t pt-8 sm:flex-row sm:justify-between">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-gold-dark"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to Articles
                </Link>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp inline-flex items-center gap-2"
                >
                  <MessageCircle className="h-5 w-5" aria-hidden />
                  Start Your Yoga Journey
                </a>
              </div>
            </article>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
      <BackToTop />
    </>
  );
}
