"use client";

import { ImageWithLoader as Image } from "@/components/ui/ImageWithLoader";
import { Heart, Instagram, MessageCircle } from "lucide-react";
import { instagramPosts } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGroup } from "@/components/ui/Reveal";
import { social } from "@/lib/config";

export function InstagramSection() {
  return (
    <section id="instagram" className="section-pad bg-elevated/40">
      <div className="container-luxe">
        <SectionHeading
          kicker="Our Community"
          title={
            <>
              Join Our Growing{" "}
              <span className="text-gradient-gold">Wellness Community</span>
            </>
          }
          subtitle="Daily inspiration, mini-tutorials, and behind-the-scenes moments. Follow along and practice with thousands of mindful souls."
        />

        <StaggerGroup className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
          {instagramPosts.map((post, i) => (
            <a
              key={post.image}
              href={social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-2xl"
              aria-label={`View on Instagram: ${post.alt}`}
            >
              <Image
                src={post.image}
                alt={post.alt}
                fill
                loading="lazy"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center gap-4 bg-ink/55 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                <span className="flex items-center gap-1.5 text-sm font-semibold text-white">
                  <Heart className="h-5 w-5 fill-current" aria-hidden />
                  {120 + i * 37}
                </span>
                <span className="flex items-center gap-1.5 text-sm font-semibold text-white">
                  <MessageCircle className="h-5 w-5" aria-hidden />
                  {8 + i * 3}
                </span>
              </div>
            </a>
          ))}
        </StaggerGroup>

        <div className="mt-10 flex flex-col items-center gap-4 text-center">
          <a
            href={social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#feda75] via-[#d62976] to-[#962fbf] px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-transform hover:-translate-y-0.5"
          >
            <Instagram className="h-5 w-5" aria-hidden />
            Follow {social.instagramHandle}
          </a>
          <p className="text-sm text-muted">
            <strong className="text-gold">20K+</strong> mindful followers and
            growing every day
          </p>
        </div>
      </div>
    </section>
  );
}
