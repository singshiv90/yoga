"use client";

import { programBenefits } from "@/lib/programs-data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGroup } from "@/components/ui/Reveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

export function WhyJoin() {
  return (
    <section id="op-why-join" className="section-pad">
      <div className="container-luxe">
        <SectionHeading
          variant="gold"
          kicker="Why Join"
          title={
            <>
              Everything You Need for a{" "}
              <span className="text-gradient-gold">Complete Practice</span>
            </>
          }
          subtitle="Our programs are designed to fit your lifestyle while delivering real, lasting results — online or in person."
          ornament
        />

        <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {programBenefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <SpotlightCard key={benefit.title}>
                <div
                  className="group flex items-start gap-4 rounded-2xl border bg-elevated p-6 transition-all hover:-translate-y-1 hover:shadow-luxe card-glow-border"
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
                </div>
              </SpotlightCard>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
