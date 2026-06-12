"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BadgeCheck, Sparkles } from "lucide-react";
import { instructor } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <section id="about" className="section-pad">
      <div className="container-luxe grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Image card */}
        <Reveal direction="right" className="relative mx-auto w-full max-w-md">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-luxe">
            <Image
              src={instructor.image}
              alt={`${instructor.name}, founder of Pranava Yoga`}
              fill
              sizes="(max-width: 1024px) 90vw, 40vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
          </div>

          {/* Floating glass credential card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="glass absolute -bottom-6 -left-4 rounded-2xl p-5 shadow-luxe sm:-left-8"
          >
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-gold/15 text-gold">
                <Sparkles className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <p className="font-serif text-2xl font-semibold leading-none">
                  2+ Years
                </p>
                <p className="text-sm text-muted">Of guiding transformations</p>
              </div>
            </div>
          </motion.div>
        </Reveal>

        {/* Text */}
        <div>
          <Reveal>
            <span className="kicker mb-4">
              <span className="h-px w-6 bg-gold" />
              Meet Your Guide
            </span>
            <h2 className="font-serif text-4xl font-semibold leading-tight sm:text-5xl">
              {instructor.name}
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {instructor.roles.map((role) => (
                <span
                  key={role}
                  className="rounded-full border border-gold/30 bg-gold/5 px-3.5 py-1.5 text-sm font-medium text-gold"
                >
                  {role}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
              {instructor.bio}
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {instructor.credentials.map((c) => (
                <li key={c} className="flex items-center gap-2.5 text-sm">
                  <BadgeCheck className="h-5 w-5 shrink-0 text-gold" aria-hidden />
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.4}>
            <a href="#contact" className="btn-primary mt-9">
              Start Your Transformation
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
