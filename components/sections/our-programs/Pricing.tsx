"use client";

import { useState } from "react";
import {
  CheckCircle,
  ArrowRight,
  FileText,
  ClipboardList,
  CreditCard,
  Ban,
  Lock,
  CalendarX,
  VideoOff,
  AlertTriangle,
  RefreshCw,
  FileCheck,
  Clock,
  Wifi,
  Home,
  Shirt,
  Camera,
  BookOpen,
  Target,
  Heart,
  Users,
  Activity,
  TrendingUp,
  MapPin,
  Backpack,
  HandHeart,
} from "lucide-react";
import { pricingPlans } from "@/lib/programs-data";
import { programsWhatsappLink } from "@/lib/config";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGroup } from "@/components/ui/Reveal";
import { PolicyModal, type PolicyItem } from "@/components/ui/PolicyModal";
import { cn } from "@/lib/utils";

/* ── Modal content ─────────────────────────────────────── */

const paymentTermsItems: PolicyItem[] = [
  {
    icon: <CreditCard className="h-4 w-4" />,
    text: "All fees must be paid in advance before joining the program.",
  },
  {
    icon: <Ban className="h-4 w-4" />,
    text: "Program fees are non-refundable once payment has been completed.",
  },
  {
    icon: <Lock className="h-4 w-4" />,
    text: "Membership plans are non-transferable and cannot be assigned to another participant.",
  },
  {
    icon: <CalendarX className="h-4 w-4" />,
    text: "Missed classes will not be compensated or refunded.",
  },
  {
    icon: <VideoOff className="h-4 w-4" />,
    text: "For online classes, recorded sessions are provided for personal learning purposes only and must not be shared, distributed, or sold.",
  },
  {
    icon: <AlertTriangle className="h-4 w-4" />,
    text: "Access to classes, recordings, and community groups may be suspended for violation of program policies.",
  },
  {
    icon: <RefreshCw className="h-4 w-4" />,
    text: "Shilpapranava Yoga reserves the right to update schedules or program details when necessary.",
  },
  {
    icon: <FileCheck className="h-4 w-4" />,
    text: "By enrolling in the program, participants agree to all terms and conditions.",
  },
];

const sessionGuidelinesItems: PolicyItem[] = [
  {
    icon: <Clock className="h-4 w-4" />,
    text: "For online classes, please join the session 5 minutes before the scheduled time.",
  },
  {
    icon: <Wifi className="h-4 w-4" />,
    text: "For online classes, ensure a stable internet connection for an uninterrupted experience.",
  },
  {
    icon: <Home className="h-4 w-4" />,
    text: "For online classes, practice in a quiet, clean, and distraction-free environment.",
  },
  {
    icon: <Shirt className="h-4 w-4" />,
    text: "Wear comfortable clothing suitable for yoga practice.",
  },
  {
    icon: <Camera className="h-4 w-4" />,
    text: "For online classes, keep your camera on whenever possible for better posture guidance and corrections.",
  },
  {
    icon: <BookOpen className="h-4 w-4" />,
    text: "Follow the instructor's instructions carefully throughout the session.",
  },
  {
    icon: <Target className="h-4 w-4" />,
    text: "Stay focused and actively participate during the class.",
  },
  {
    icon: <Heart className="h-4 w-4" />,
    text: "Inform the instructor beforehand if you have any injuries, medical conditions, or physical limitations.",
  },
  {
    icon: <Users className="h-4 w-4" />,
    text: "Maintain respectful and positive behavior toward all participants.",
  },
  {
    icon: <VideoOff className="h-4 w-4" />,
    text: "Avoid recording, redistributing, or sharing class content without permission.",
  },
  {
    icon: <Activity className="h-4 w-4" />,
    text: "Listen to your body and practice within your personal limits.",
  },
  {
    icon: <TrendingUp className="h-4 w-4" />,
    text: "Consistency and regular attendance will help you achieve the best results.",
  },
  {
    icon: <MapPin className="h-4 w-4" />,
    text: "For in-studio classes, please arrive at least 10 minutes before the scheduled time.",
  },
  {
    icon: <Backpack className="h-4 w-4" />,
    text: "Bring your own yoga mat and water bottle for in-studio sessions.",
  },
  {
    icon: <HandHeart className="h-4 w-4" />,
    text: "Maintain studio etiquette — keep phones on silent, avoid loud conversations, and keep the space clean.",
  },
];

type ModalType = "payment" | "guidelines" | null;

/* ── Component ─────────────────────────────────────────── */

export function Pricing() {
  const [openModal, setOpenModal] = useState<ModalType>(null);

  return (
    <>
      <section id="op-pricing" className="section-pad bg-radial-fade">
        <div className="container-luxe">
          <SectionHeading
            variant="gold"
            kicker="Pricing"
            title={
              <>
                Simple, Transparent{" "}
                <span className="text-gradient-gold">Pricing</span>
              </>
            }
            subtitle="No hidden fees. No long-term lock-in. Start with a free demo, then choose the plan that works for you."
          />

          <StaggerGroup className="mx-auto mt-14 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={cn(
                  "relative flex flex-col rounded-3xl border p-8",
                  plan.popular ? "border-gold shadow-glow" : "glass",
                )}
              >
                {plan.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1 text-xs font-semibold text-ink">
                    Most Popular
                  </span>
                )}

                <h3 className="flex items-center gap-2 text-lg font-semibold">
                  <plan.icon className="h-5 w-5 text-gold" aria-hidden />
                  {plan.name}
                </h3>
                <p className="mt-1 text-sm text-muted">{plan.tagline}</p>

                <div className="mt-4 flex items-baseline gap-1">
                  <span
                    className={cn(
                      "font-serif text-4xl font-bold",
                      plan.popular && "text-gradient-gold",
                    )}
                  >
                    {plan.price}
                  </span>
                  <span className="text-sm text-muted">{plan.period}</span>
                </div>

                {plan.savings && (
                  <span className="mt-2 inline-block w-fit rounded-full bg-gold/10 px-3 py-1 text-xs font-semibold text-gold">
                    {plan.savings}
                  </span>
                )}

                <ul className="mt-6 flex flex-1 flex-col gap-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <CheckCircle
                        className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                        aria-hidden
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={programsWhatsappLink(
                    `Hi! I'd like to enroll in the ${plan.name} plan for the Yoga Program.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "mt-8",
                    plan.popular ? "btn-primary" : "btn-secondary",
                  )}
                >
                  Get Started
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </a>
              </div>
            ))}
          </StaggerGroup>

          {/* Policy links */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            <button
              type="button"
              onClick={() => setOpenModal("payment")}
              className="group inline-flex items-center gap-1.5 rounded text-sm text-muted transition-colors duration-200 hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
            >
              <FileText
                className="h-3.5 w-3.5 shrink-0 opacity-60 transition-opacity duration-200 group-hover:opacity-100"
                aria-hidden
              />
              <span className="underline decoration-dotted underline-offset-4 decoration-gold/40 transition-all duration-200 group-hover:decoration-gold/80">
                Payment Terms &amp; Conditions
              </span>
            </button>

            <span
              className="hidden h-4 w-px bg-border/50 sm:block"
              aria-hidden="true"
            />

            <button
              type="button"
              onClick={() => setOpenModal("guidelines")}
              className="group inline-flex items-center gap-1.5 rounded text-sm text-muted transition-colors duration-200 hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
            >
              <ClipboardList
                className="h-3.5 w-3.5 shrink-0 opacity-60 transition-opacity duration-200 group-hover:opacity-100"
                aria-hidden
              />
              <span className="underline decoration-dotted underline-offset-4 decoration-gold/40 transition-all duration-200 group-hover:decoration-gold/80">
                Session Guidelines
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Modals rendered outside the section so z-index stacking is clean */}
      <PolicyModal
        isOpen={openModal === "payment"}
        onClose={() => setOpenModal(null)}
        title="Payment Terms & Conditions"
        accentColor="gold"
        headerEmoji="📜"
        items={paymentTermsItems}
        footerNote="By enrolling in our program, you acknowledge that you have read and agree to these terms."
      />
      <PolicyModal
        isOpen={openModal === "guidelines"}
        onClose={() => setOpenModal(null)}
        title="Session Guidelines"
        accentColor="gold"
        headerEmoji="🪷"
        items={sessionGuidelinesItems}
        footerNote="These guidelines are designed to ensure the best experience for all participants. Thank you for your cooperation."
      />
    </>
  );
}
