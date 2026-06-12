"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { testimonials } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGroup, staggerItem } from "@/components/ui/Reveal";

export function Testimonials() {
  return (
    <section id="testimonials" className="section-pad bg-elevated/40">
      <div className="container-luxe">
        <SectionHeading
          kicker="Student Stories"
          title={
            <>
              Real People,{" "}
              <span className="text-gradient-gold">Real Transformations</span>
            </>
          }
          subtitle="Join a community of professionals, parents, and seekers who reclaimed their health and calm."
        />

        <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <motion.figure
              key={t.name}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              className="relative flex flex-col rounded-3xl border bg-elevated p-7 shadow-sm transition-shadow hover:shadow-luxe"
            >
              <Quote
                className="absolute right-6 top-6 h-9 w-9 text-gold/20"
                aria-hidden
              />
              <div
                className="flex items-center gap-0.5 text-gold"
                aria-label={`${t.rating} out of 5 stars`}
              >
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" aria-hidden />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t pt-5">
                <span className="relative h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </span>
                <span>
                  <span className="block font-semibold">{t.name}</span>
                  <span className="block text-sm text-muted">{t.role}</span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
