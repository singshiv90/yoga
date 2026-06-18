"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { testimonials } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Marquee } from "@/components/ui/Marquee";

function TestimonialCard({ t }: { t: (typeof testimonials)[number] }) {
  return (
    <figure className="relative flex h-full w-[280px] shrink-0 flex-col rounded-3xl border bg-elevated p-7 shadow-sm transition-shadow hover:shadow-luxe card-glow-border sm:w-[340px]">
      <span
        className="absolute right-6 top-4 font-serif text-6xl leading-none text-gold/15 select-none"
        aria-hidden
      >
        &ldquo;
      </span>
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
            loading="lazy"
            sizes="48px"
            className="object-cover"
          />
        </span>
        <span>
          <span className="block font-semibold">{t.name}</span>
          <span className="block text-sm text-muted">{t.role}</span>
        </span>
      </figcaption>
    </figure>
  );
}

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
          ornament
        />
      </div>

      <div className="mt-14">
        <Marquee speed={40} pauseOnHover>
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
