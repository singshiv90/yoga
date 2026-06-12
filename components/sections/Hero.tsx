"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Star } from "lucide-react";
import { whatsappLink } from "@/lib/config";

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
            Yoga • Meditation • Inner Balance
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.1 }}
            className="mt-6 font-serif text-4xl font-semibold leading-[1.08] sm:text-6xl lg:text-7xl"
          >
            Transform Your Life Through{" "}
            <span className="text-gradient-gold">Yoga, Meditation</span> &amp;
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
            <a href="#contact" className="btn-primary">
              Book Free Consultation
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              Join on WhatsApp
            </a>
          </motion.div>

          {/* Mini social proof */}
          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-10 flex items-center gap-4"
          >
            <div className="flex -space-x-3">
              {[
                "1494790108377-be9c29b29330",
                "1438761681033-6461ffad8d80",
                "1500648767791-00dcc994a43e",
                "1531123897727-8f129e1688ce",
              ].map((id) => (
                <span
                  key={id}
                  className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-white/80"
                >
                  <Image
                    src={`https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=80&q=80`}
                    alt=""
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </span>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-0.5 text-gold-light">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" aria-hidden />
                ))}
              </div>
              <p className="text-sm text-white/80">Loved by <strong>1000+</strong> students worldwide</p>
            </div>
          </motion.div> */}
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
