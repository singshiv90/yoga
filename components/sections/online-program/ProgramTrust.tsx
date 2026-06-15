"use client";

import { programTrustPoints } from "@/lib/online-program-data";
import { StaggerGroup } from "@/components/ui/Reveal";

export function ProgramTrust() {
  return (
    <section className="relative border-y border-teal/10 bg-elevated/40">
      <StaggerGroup className="container-luxe grid grid-cols-2 gap-6 py-14 lg:grid-cols-5">
        {programTrustPoints.map((point) => {
          const Icon = point.icon;
          return (
            <div
              key={point.title}
              className="flex flex-col items-center gap-2 text-center"
            >
              <span className="grid h-12 w-12 place-items-center rounded-full bg-teal/12 text-teal">
                <Icon className="h-6 w-6" aria-hidden />
              </span>
              <span className="font-semibold">{point.title}</span>
              <span className="text-xs text-muted">{point.description}</span>
            </div>
          );
        })}
      </StaggerGroup>
    </section>
  );
}
