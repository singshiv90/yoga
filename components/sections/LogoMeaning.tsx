"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { logoSymbols } from "@/lib/logo-symbols-data";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/*  Animation constants                                                */
/* ------------------------------------------------------------------ */
const EASE = [0.22, 1, 0.36, 1] as const;
const SPRING = { type: "spring" as const, stiffness: 300, damping: 25 };

/* ------------------------------------------------------------------ */
/*  Hotspot dot                                                        */
/* ------------------------------------------------------------------ */
function Hotspot({
  x,
  y,
  isActive,
  index,
  onClick,
}: {
  x: number;
  y: number;
  isActive: boolean;
  index: number;
  onClick: () => void;
}) {
  return (
    <motion.button
      onClick={onClick}
      className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${x}%`, top: `${y}%` }}
      animate={{
        scale: isActive ? 1 : 0.55,
        opacity: isActive ? 1 : 0.4,
      }}
      transition={SPRING}
      aria-label={`Show symbol: ${logoSymbols[index].title}`}
    >
      {/* Outer pulse ring 1 — large, slow */}
      {isActive && (
        <span
          className="absolute -inset-3 rounded-full border-2 border-gold/60 animate-pulse-ring"
          aria-hidden="true"
        />
      )}
      {/* Outer pulse ring 2 — staggered */}
      {isActive && (
        <span
          className="absolute -inset-2 rounded-full border border-gold/40 animate-pulse-ring"
          style={{ animationDelay: "0.6s" }}
          aria-hidden="true"
        />
      )}
      {/* Glow halo */}
      <motion.span
        className="absolute -inset-2 rounded-full"
        animate={{
          boxShadow: isActive
            ? [
                "0 0 8px 3px rgba(201,162,75,0.4)",
                "0 0 20px 8px rgba(201,162,75,0.6)",
                "0 0 8px 3px rgba(201,162,75,0.4)",
              ]
            : "0 0 0px 0px rgba(201,162,75,0)",
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        aria-hidden="true"
      />
      {/* Core dot */}
      <span
        className={cn(
          "relative block h-5 w-5 rounded-full border-2 transition-colors duration-300",
          isActive
            ? "border-gold bg-gold shadow-[0_0_18px_6px_rgba(201,162,75,0.5)]"
            : "border-gold/60 bg-gold/25",
        )}
      >
        {/* Inner bright center */}
        {isActive && (
          <span
            className="absolute inset-1 rounded-full bg-white/70"
            aria-hidden="true"
          />
        )}
      </span>
    </motion.button>
  );
}

/* ------------------------------------------------------------------ */
/*  Progress dots (navigation)                                         */
/* ------------------------------------------------------------------ */
function ProgressDots({
  count,
  activeIndex,
  onDotClick,
}: {
  count: number;
  activeIndex: number;
  onDotClick: (i: number) => void;
}) {
  return (
    <nav
      className="flex items-center gap-2.5 lg:flex-col"
      aria-label="Symbol navigation"
    >
      {Array.from({ length: count }, (_, i) => (
        <button
          key={i}
          onClick={() => onDotClick(i)}
          className="group relative flex items-center justify-center p-1"
          aria-label={`Go to ${logoSymbols[i].title}`}
          aria-current={i === activeIndex ? "step" : undefined}
        >
          <motion.span
            className="block rounded-full"
            animate={{
              width: i === activeIndex ? 10 : 6,
              height: i === activeIndex ? 10 : 6,
              backgroundColor:
                i === activeIndex ? "rgb(201,162,75)" : "rgba(201,162,75,0.3)",
            }}
            transition={SPRING}
          />
        </button>
      ))}
    </nav>
  );
}

/* ------------------------------------------------------------------ */
/*  Text panel (AnimatePresence)                                       */
/* ------------------------------------------------------------------ */
function TextPanel({ activeIndex }: { activeIndex: number }) {
  const symbol = logoSymbols[activeIndex];
  const Icon = symbol.icon;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={symbol.id}
        initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
        transition={{
          duration: 0.5,
          ease: EASE,
          exit: { duration: 0.3 },
        }}
        className="flex flex-col"
      >
        {/* Icon badge */}
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-gold/30 bg-gold/10">
          <Icon className="h-6 w-6 text-gold" />
        </div>

        {/* Counter */}
        <span className="mb-2 text-xs font-semibold uppercase tracking-luxe text-gold/70">
          {activeIndex + 1} / {logoSymbols.length}
        </span>

        {/* Title */}
        <h3 className="font-serif text-2xl font-semibold sm:text-3xl">
          {symbol.title}
        </h3>

        {/* Subtitle */}
        <p className="mt-1 text-sm font-medium text-gold">{symbol.subtitle}</p>

        {/* Description */}
        <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
          {symbol.description}
        </p>
      </motion.div>
    </AnimatePresence>
  );
}

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */
export function LogoMeaning() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  /* Scroll → active index mapping */
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const activeFloat = useTransform(
    scrollYProgress,
    [0, 1],
    [0, logoSymbols.length - 1],
  );

  useMotionValueEvent(activeFloat, "change", (v) => {
    const clamped = Math.max(0, Math.min(logoSymbols.length - 1, Math.round(v)));
    setActiveIndex(clamped);
  });

  /* Click-to-scroll for progress dots */
  const scrollToIndex = useCallback(
    (i: number) => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const containerTop = window.scrollY + rect.top;
      const scrollableHeight = el.scrollHeight - window.innerHeight;
      const fraction = i / (logoSymbols.length - 1);
      window.scrollTo({
        top: containerTop + scrollableHeight * fraction,
        behavior: "smooth",
      });
    },
    [],
  );

  const isOverall = activeIndex === logoSymbols.length - 1;
  const activeHotspot = logoSymbols[activeIndex].hotspot;

  return (
    <section id="logo-meaning" className="bg-radial-fade">
      {/* Normal-flow heading — scrolls away naturally */}
      <div className="section-pad pb-0">
        <div className="container-luxe">
          <SectionHeading
            kicker="Our Identity"
            title={
              <>
                The Symbol of{" "}
                <span className="text-gradient-gold">Pranava Yoga</span>
              </>
            }
            subtitle="Every element of our emblem carries deep spiritual significance — a visual language of transformation, balance, and inner awakening."
            ornament
          />
        </div>
      </div>

      {/* Scroll story container — creates the scroll distance */}
      <div
        ref={containerRef}
        className="relative h-[450vh] md:h-[500vh] lg:h-[600vh]"
      >
        {/* Sticky frame — pins to viewport */}
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <div className="container-luxe w-full">
            <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-16">
              {/* ---- Logo + Hotspots ---- */}
              <div className="relative mx-auto w-full max-w-[240px] flex-shrink-0 md:max-w-[320px] lg:max-w-[420px]">
                {/* Ambient glow */}
                <div
                  className="pointer-events-none absolute inset-0 -z-10 scale-110 rounded-full opacity-20 blur-3xl"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(201,162,75,0.5), transparent 70%)",
                  }}
                  aria-hidden="true"
                />

                {/* Overall-meaning gold ring */}
                <AnimatePresence>
                  {isOverall && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.92 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.92 }}
                      transition={{ duration: 0.6, ease: EASE }}
                      className="absolute -inset-3 rounded-full border-2 border-gold/50 animate-glow-pulse"
                      aria-hidden="true"
                    />
                  )}
                </AnimatePresence>

                {/* Spotlight overlay — subtle highlight on active area (dark mode only) */}
                <div
                  className="pointer-events-none absolute inset-0 z-10 rounded-full transition-all duration-700 dark:block hidden"
                  style={{
                    background: isOverall
                      ? "none"
                      : `radial-gradient(circle at ${activeHotspot.x}% ${activeHotspot.y}%, transparent 18%, rgba(0,0,0,0.25) 60%)`,
                  }}
                  aria-hidden="true"
                />

                {/* Logo wrapper — clips the square PNG to a circle, hiding white edges */}
                <div className="relative overflow-hidden rounded-full">
                  <Image
                    src="/logo.png"
                    alt="Pranava Yoga emblem — circular logo containing Trishul, Damru, Lotus, Sudarshan Chakra, and Om"
                    width={840}
                    height={840}
                    priority
                    className="block h-auto w-full"
                  />
                </div>

                {/* Hotspot markers (first 5 symbols only) */}
                {logoSymbols.slice(0, -1).map((s, i) => (
                  <Hotspot
                    key={s.id}
                    x={s.hotspot.x}
                    y={s.hotspot.y}
                    isActive={isOverall || i === activeIndex}
                    index={i}
                    onClick={() => scrollToIndex(i)}
                  />
                ))}
              </div>

              {/* ---- Text panel + Progress dots ---- */}
              <div className="flex w-full flex-1 items-center gap-6 lg:gap-10">
                {/* Text */}
                <div className="min-h-[220px] flex-1">
                  <TextPanel activeIndex={activeIndex} />
                </div>

                {/* Progress navigation */}
                <ProgressDots
                  count={logoSymbols.length}
                  activeIndex={activeIndex}
                  onDotClick={scrollToIndex}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
