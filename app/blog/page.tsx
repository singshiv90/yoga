import type { Metadata } from "next";
import { ImageWithLoader as Image } from "@/components/ui/ImageWithLoader";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { site } from "@/lib/config";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { BackToTop } from "@/components/ui/BackToTop";
import { BlogGrid } from "@/components/blog/BlogGrid";

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
            <BlogGrid />

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
