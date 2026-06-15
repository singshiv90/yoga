"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { benefits } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGroup, staggerItem } from "@/components/ui/Reveal";

export function Benefits() {
  return (
    <section id="benefits" className="section-pad">
      <div className="container-luxe">
        <SectionHeading
          kicker="Why Practice With Us"
          title={
            <>
              Feel the <span className="text-gradient-gold">Difference</span>{" "}
              in Body &amp; Mind
            </>
          }
          subtitle="Consistent practice rewires how you move, rest, and respond to life. Here's what students experience."
          ornament
        />

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-last aspect-square overflow-hidden rounded-[2rem] shadow-luxe lg:order-first"
          >
            <Image
              src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&w=900&q=80"
              alt="Yoga practitioner in a calm, balanced pose"
              fill
              loading="lazy"
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-cover"
            />
            <div className="glass absolute bottom-5 left-5 right-5 rounded-2xl p-5">
              <p className="font-serif text-lg font-semibold">
                &ldquo;A calmer mind in a stronger body.&rdquo;
              </p>
              <p className="mt-1 text-sm text-muted">
                The everyday promise of a steady practice.
              </p>
            </div>
          </motion.div>

          {/* Benefit grid */}
          <StaggerGroup className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  variants={staggerItem}
                  whileHover={{ y: -4 }}
                  className="group flex items-start gap-4 rounded-2xl border bg-elevated p-5 transition-shadow hover:shadow-luxe card-glow-border"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gold/12 text-gold transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-semibold">{benefit.title}</h3>
                    <p className="mt-1 text-sm text-muted">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
