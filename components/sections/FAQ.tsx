"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { faqs } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";
import { whatsappLink } from "@/lib/config";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-pad bg-elevated/40">
      <div className="container-luxe grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <SectionHeading
          align="left"
          kicker="Questions & Answers"
          title={
            <>
              Everything You{" "}
              <span className="text-gradient-gold">Need to Know</span>
            </>
          }
          subtitle="Still curious? Message us on WhatsApp and we'll answer personally."
          className="lg:sticky lg:top-28 lg:self-start"
        />

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={faq.question} delay={i * 0.05}>
                <div
                  className={cn(
                    "overflow-hidden rounded-2xl border bg-elevated transition-shadow",
                    isOpen && "shadow-luxe",
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left"
                  >
                    <span className="font-medium sm:text-lg">
                      {faq.question}
                    </span>
                    <span
                      className={cn(
                        "grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gold/12 text-gold transition-transform duration-300",
                        isOpen && "rotate-45",
                      )}
                    >
                      <Plus className="h-5 w-5" aria-hidden />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <p className="px-5 pb-5 text-sm leading-relaxed text-muted sm:text-base">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}

          <Reveal delay={0.3}>
            <a
              href={whatsappLink("Hi! I have a question about your classes.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp mt-2 w-full sm:w-auto"
            >
              Ask Us on WhatsApp
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
