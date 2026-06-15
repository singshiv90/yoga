"use client";

import { CheckCircle, ArrowRight } from "lucide-react";
import { pricingPlans } from "@/lib/online-program-data";
import { onlineProgramWhatsappLink } from "@/lib/config";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGroup } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export function Pricing() {
  return (
    <section id="op-pricing" className="section-pad bg-radial-fade-teal">
      <div className="container-luxe">
        <SectionHeading
          variant="teal"
          kicker="Pricing"
          title={
            <>
              Simple, Transparent{" "}
              <span className="text-gradient-teal">Pricing</span>
            </>
          }
          subtitle="No hidden fees. No long-term lock-in. Start with a free demo, then choose the plan that works for you."
        />

        <StaggerGroup className="mx-auto mt-14 grid max-w-3xl gap-6 sm:grid-cols-2">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative flex flex-col rounded-3xl border p-8",
                plan.popular
                  ? "border-teal shadow-glow-teal"
                  : "glass",
              )}
            >
              {plan.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-teal px-4 py-1 text-xs font-semibold text-white">
                  Most Popular
                </span>
              )}

              <h3 className="text-lg font-semibold">{plan.name}</h3>

              <div className="mt-4 flex items-baseline gap-1">
                <span
                  className={cn(
                    "font-serif text-4xl font-bold",
                    plan.popular && "text-gradient-teal",
                  )}
                >
                  {plan.price}
                </span>
                <span className="text-sm text-muted">{plan.period}</span>
              </div>

              {plan.savings && (
                <span className="mt-2 inline-block w-fit rounded-full bg-teal/10 px-3 py-1 text-xs font-semibold text-teal">
                  {plan.savings}
                </span>
              )}

              <ul className="mt-6 flex flex-1 flex-col gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-teal" aria-hidden />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={onlineProgramWhatsappLink(
                  `Hi! I'd like to enroll in the ${plan.name} plan for the Online Yoga Program.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "mt-8",
                  plan.popular ? "btn-teal" : "btn-teal-secondary",
                )}
              >
                Get Started
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
            </div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
