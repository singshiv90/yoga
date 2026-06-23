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
        <section className="relative flex min-h-[100svh] items-center overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <Image
              src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1920&q=80"
              alt="Yoga journal"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/60 to-ink/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-ink/30" />
          </div>

          <div className="container-luxe relative w-full pt-28 pb-20 text-white">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-widest text-gold-light">
                Our Journal
              </p>
              <h1 className="mt-6 font-serif text-4xl font-semibold leading-[1.08] text-white sm:text-6xl lg:text-7xl">
                Yoga &amp; Wellness{" "}
                <span className="text-gradient-gold">Articles</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">
                Read expert insights, wellness tips, yoga guidance, and practical techniques to support your journey toward a healthier and more balanced life.
              </p>
            </div>
          </div>
        </section>

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
