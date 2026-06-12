"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGroup, staggerItem } from "@/components/ui/Reveal";
import { whatsappLink } from "@/lib/config";

export function Services() {
  return (
    <section id="services" className="section-pad bg-elevated/40">
      <div className="container-luxe">
        <SectionHeading
          kicker="What We Offer"
          title={
            <>
              Premium Practices for{" "}
              <span className="text-gradient-gold">Every Journey</span>
            </>
          }
          subtitle="From dynamic flows to deep stillness — choose the path that fits your body, goals, and lifestyle."
        />

        <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                variants={staggerItem}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative overflow-hidden rounded-3xl border bg-elevated shadow-sm transition-shadow hover:shadow-luxe"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
                  <span className="absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white/90 text-ink backdrop-blur">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>
                  <a
                    href={whatsappLink(
                      `Hi Pranava Yoga! I'm interested in ${service.title}. Could you share the details?`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold transition-colors hover:text-gold-dark"
                  >
                    Enquire now
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
