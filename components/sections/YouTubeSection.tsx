"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Play, Youtube } from "lucide-react";
import { videos } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGroup, staggerItem } from "@/components/ui/Reveal";
import { social } from "@/lib/config";

export function YouTubeSection() {
  return (
    <section id="youtube" className="section-pad">
      <div className="container-luxe">
        <SectionHeading
          kicker="Free Yoga Content"
          title={
            <>
              Watch, Breathe &amp;{" "}
              <span className="text-gradient-gold">Grow With Us</span>
            </>
          }
          subtitle="Tutorials, guided meditations, breathing techniques, and wellness tips — all free on our YouTube channel."
        />

        <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {videos.map((video) => (
            <motion.a
              key={video.title}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={staggerItem}
              whileHover={{ y: -6 }}
              className="group overflow-hidden rounded-3xl border bg-elevated shadow-sm transition-shadow hover:shadow-luxe"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-ink/25 transition-colors group-hover:bg-ink/40" />
                <span className="absolute inset-0 grid place-items-center">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-red-600/95 text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <Play className="h-6 w-6 translate-x-0.5 fill-current" aria-hidden />
                  </span>
                </span>
                <span className="absolute bottom-2 right-2 rounded-md bg-ink/80 px-2 py-0.5 text-xs font-medium text-white">
                  {video.duration}
                </span>
              </div>
              <div className="p-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-gold">
                  {video.category}
                </span>
                <h3 className="mt-1.5 font-medium leading-snug">
                  {video.title}
                </h3>
              </div>
            </motion.a>
          ))}
        </StaggerGroup>

        <div className="mt-10 text-center">
          <a
            href={social.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-red-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-red-700"
          >
            <Youtube className="h-5 w-5" aria-hidden />
            Subscribe for Free Yoga Content
          </a>
        </div>
      </div>
    </section>
  );
}
