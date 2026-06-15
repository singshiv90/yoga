"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CalendarHeart, MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/config";

export function WhatsAppCTA() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?auto=format&fit=crop&w=1920&q=80"
          alt="Serene sunrise over a calm landscape"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 to-ink/40" />
      </div>

      <div className="container-luxe relative text-center text-white flourish-corners">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="kicker justify-center text-gold-light"
        >
          <span className="h-px w-6 bg-gold-light" />
          Your Journey Begins Now
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mx-auto mt-5 max-w-3xl font-serif text-4xl font-semibold leading-tight sm:text-6xl"
        >
          Begin Your Yoga Journey Today
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-5 max-w-xl text-lg text-white/85"
        >
          Take the first step toward strength, calm, and clarity. Your free
          consultation is one message away.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex flex-col justify-center gap-4 sm:flex-row"
        >
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            <MessageCircle className="h-5 w-5" aria-hidden />
            Chat on WhatsApp
          </a>
          <a href="#contact" className="btn-primary">
            <CalendarHeart className="h-5 w-5" aria-hidden />
            Book Your First Session
          </a>
        </motion.div>
      </div>
    </section>
  );
}
