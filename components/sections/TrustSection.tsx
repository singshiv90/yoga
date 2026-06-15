"use client";

import { stats } from "@/lib/data";
import { StaggerGroup } from "@/components/ui/Reveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export function TrustSection() {
  return (
    <section className="relative border-y border-gold/10 bg-elevated/40">
      <StaggerGroup className="container-luxe grid grid-cols-2 gap-6 py-14 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-2 text-center"
            >
              <span className="grid h-12 w-12 place-items-center rounded-full bg-gold/12 text-gold">
                <Icon className="h-6 w-6" aria-hidden />
              </span>
              <span className="font-serif text-2xl font-semibold sm:text-3xl">
                {stat.numericValue != null ? (
                  <AnimatedCounter
                    value={stat.numericValue}
                    suffix={stat.suffix}
                  />
                ) : (
                  stat.value
                )}
              </span>
              <span className="text-sm text-muted">{stat.label}</span>
            </div>
          );
        })}
      </StaggerGroup>
    </section>
  );
}
