"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/config";
import { MagneticButton } from "@/components/ui/MagneticButton";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/cd112699-fe8c-4c69-a6ea-7af933dae165.jpg"
          alt="Woman practicing yoga at sunrise by the ocean"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Cinematic gradient for text legibility in both themes */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/60 to-ink/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-ink/30" />
      </div>

      <div className="container-luxe relative w-full pt-28 pb-20 text-white">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="kicker text-gold-light"
          >
            <span className="h-px w-6 bg-gold-light" />
            Yoga &bull; Meditation &bull; Inner Balance
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.1 }}
            className="mt-6 font-serif text-4xl font-semibold leading-[1.08] sm:text-6xl lg:text-7xl"
          >
            Transform Your Life Through{" "}
            <span className="text-shimmer">Yoga, Meditation</span> &amp;
            Inner Balance
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.25 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/85"
          >
            Experience strength, flexibility, mindfulness, and peace through
            personalized yoga practices — online, for every body
            and every schedule.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.4 }}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <MagneticButton as="a" href="#contact" className="btn-primary">
              Book Free Consultation
              <ArrowRight className="h-4 w-4" aria-hidden />
            </MagneticButton>
            <MagneticButton
              as="a"
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              Join on WhatsApp
            </MagneticButton>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 sm:block"
      >
        <span className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/50 p-1.5">
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="h-2 w-1 rounded-full bg-white/80"
          />
        </span>
      </motion.div>
    </section>
  );
}
