"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import {
  onlineProgramWhatsappLink,
  onlineProgramContact,
} from "@/lib/config";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&w=1920&q=80"
          alt="Peaceful yoga and meditation setting"
          fill
          loading="lazy"
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 to-ink/40" />
      </div>

      <div className="container-luxe relative text-center text-white">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="kicker-teal justify-center text-teal-light"
        >
          <span className="h-px w-6 bg-teal-light" />
          Your Journey Begins Now
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mx-auto mt-5 max-w-3xl font-serif text-3xl font-semibold leading-tight sm:text-5xl"
        >
          Take the First Step Towards a Healthier and More Balanced Life
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-5 max-w-xl text-lg text-white/85"
        >
          Start with a free demo class. No commitment, no payment — just
          you, your mat, and an experienced guide.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex flex-col justify-center gap-4 sm:flex-row"
        >
          <a
            href={onlineProgramWhatsappLink(
              "Hi! I'd like to book a free demo class for the Online Yoga Program.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            <MessageCircle className="h-5 w-5" aria-hidden />
            Chat on WhatsApp
          </a>
          <a href="#op-pricing" className="btn-teal">
            <ArrowRight className="h-5 w-5" aria-hidden />
            View Plans &amp; Enroll
          </a>
        </motion.div>

        {/* Contact numbers */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 flex flex-col items-center justify-center gap-3 text-sm text-white/70 sm:flex-row sm:gap-6"
        >
          <a
            href={onlineProgramContact.phone1Href}
            className="inline-flex items-center gap-1.5 transition-colors hover:text-teal-light"
          >
            <Phone className="h-4 w-4" aria-hidden />
            {onlineProgramContact.phone1Display}
          </a>
          <a
            href={onlineProgramContact.phone2Href}
            className="inline-flex items-center gap-1.5 transition-colors hover:text-teal-light"
          >
            <Phone className="h-4 w-4" aria-hidden />
            {onlineProgramContact.phone2Display}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
