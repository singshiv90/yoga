"use client";

import { motion } from "framer-motion";
import { Gift, ArrowRight } from "lucide-react";
import { onlineProgramWhatsappLink } from "@/lib/config";
import { Reveal } from "@/components/ui/Reveal";

export function FreeDemo() {
  return (
    <section
      id="op-free-demo"
      className="section-pad bg-radial-fade-teal"
    >
      <div className="container-luxe">
        <Reveal>
          <div className="glass mx-auto max-w-2xl rounded-3xl p-10 text-center sm:p-14">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
              className="mx-auto mb-6 grid h-16 w-16 place-items-center rounded-2xl bg-teal/12 text-teal"
            >
              <Gift className="h-8 w-8" aria-hidden />
            </motion.div>

            <h2 className="font-serif text-3xl font-semibold leading-tight sm:text-4xl">
              Try a{" "}
              <span className="text-gradient-teal">Free Demo Class</span>
            </h2>

            <p className="mx-auto mt-4 max-w-md text-base text-muted sm:text-lg">
              Experience a complimentary live session before you commit.
              No payment required — just bring your mat and curiosity.
            </p>

            <a
              href={onlineProgramWhatsappLink(
                "Hi! I'd like to book a free demo class for the Online Yoga Program.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-teal mt-8"
            >
              Book Free Demo
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
