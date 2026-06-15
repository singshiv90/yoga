"use client";

import { motion } from "framer-motion";
import { enrollmentSteps } from "@/lib/online-program-data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGroup, staggerItem } from "@/components/ui/Reveal";

export function EnrollmentProcess() {
  return (
    <section id="op-enrollment" className="section-pad">
      <div className="container-luxe">
        <SectionHeading
          variant="teal"
          kicker="How to Join"
          title={
            <>
              Get Started in{" "}
              <span className="text-gradient-teal">4 Simple Steps</span>
            </>
          }
          subtitle="From your first free class to a consistent practice — we make it easy."
        />

        <StaggerGroup className="mx-auto mt-14 max-w-2xl">
          {enrollmentSteps.map((step, idx) => {
            const Icon = step.icon;
            const isLast = idx === enrollmentSteps.length - 1;

            return (
              <motion.div
                key={step.step}
                variants={staggerItem}
                className="relative flex gap-6"
              >
                {/* Vertical line + numbered circle */}
                <div className="flex flex-col items-center">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-teal text-sm font-bold text-white">
                    {step.step}
                  </span>
                  {!isLast && (
                    <span className="w-px flex-1 bg-teal/20" />
                  )}
                </div>

                {/* Content */}
                <div className={isLast ? "pb-0" : "pb-10"}>
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5 text-teal" aria-hidden />
                    <h3 className="text-lg font-semibold">{step.title}</h3>
                  </div>
                  <p className="mt-2 text-sm text-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
