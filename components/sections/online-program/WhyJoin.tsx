"use client";

import { motion } from "framer-motion";
import { onlineProgramBenefits } from "@/lib/online-program-data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGroup, staggerItem } from "@/components/ui/Reveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

export function WhyJoin() {
  return (
    <section id="op-why-join" className="section-pad">
      <div className="container-luxe">
        <SectionHeading
          variant="teal"
          kicker="Why Join"
          title={
            <>
              Everything You Need for a{" "}
              <span className="text-gradient-teal">Complete Practice</span>
            </>
          }
          subtitle="Our online program is designed to fit your lifestyle while delivering real, lasting results."
          ornament
        />

        <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {onlineProgramBenefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <SpotlightCard key={benefit.title}>
                <motion.div
                  variants={staggerItem}
                  whileHover={{ y: -4 }}
                  className="group flex items-start gap-4 rounded-2xl border bg-elevated p-6 transition-shadow hover:shadow-luxe card-glow-border"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-teal/12 text-teal transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-semibold">{benefit.title}</h3>
                    <p className="mt-1 text-sm text-muted">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              </SpotlightCard>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
