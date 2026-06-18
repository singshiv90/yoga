"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { logoSymbols } from "@/lib/logo-symbols-data";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/*  Shared style: force GPU layer on iOS Safari                        */
/* ------------------------------------------------------------------ */
const GPU_LAYER: React.CSSProperties = {
  WebkitBackfaceVisibility: "hidden",
  backfaceVisibility: "hidden",
  transform: "translateZ(0)",
};

/* ------------------------------------------------------------------ */
/*  Hotspot dot — pure CSS transitions, zero DOM mount/unmount         */
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
    <button
      onClick={onClick}
      className="absolute z-20 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-out"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        opacity: isActive ? 1 : 0.4,
        scale: isActive ? "1" : "0.55",
        ...GPU_LAYER,
      }}
      aria-label={`Show symbol: ${logoSymbols[index].title}`}
    >
      {/* Pulse ring — always in DOM, toggled via opacity */}
      <span
        className="absolute -inset-3 rounded-full border-2 border-gold/60 animate-pulse-ring"
        style={{ opacity: isActive ? 1 : 0, transition: "opacity 0.4s", ...GPU_LAYER }}
        aria-hidden="true"
      />
      {/* Glow halo — CSS animation class, toggled via opacity */}
      <span
        className={cn(
          "absolute -inset-2 rounded-full",
          isActive && "animate-glow-pulse",
        )}
        style={{ opacity: isActive ? 1 : 0, transition: "opacity 0.4s", ...GPU_LAYER }}
        aria-hidden="true"
      />
      {/* Core dot */}
      <span
        className={cn(
          "relative block h-5 w-5 rounded-full border-2 transition-all duration-300",
          isActive
            ? "border-gold bg-gold shadow-[0_0_18px_6px_rgba(201,162,75,0.5)]"
            : "border-gold/60 bg-gold/25",
        )}
        style={GPU_LAYER}
      >
        {/* Inner bright center — always in DOM */}
        <span
          className="absolute inset-1 rounded-full bg-white/70"
          style={{ opacity: isActive ? 1 : 0, transition: "opacity 0.3s", ...GPU_LAYER }}
          aria-hidden="true"
        />
      </span>
    </button>
  );
}

/* ------------------------------------------------------------------ */
/*  Progress dots — pure CSS transitions                               */
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
          <span
            className="block rounded-full transition-all duration-300"
            style={{
              width: i === activeIndex ? 10 : 6,
              height: i === activeIndex ? 10 : 6,
              backgroundColor:
                i === activeIndex ? "rgb(201,162,75)" : "rgba(201,162,75,0.3)",
            }}
          />
        </button>
      ))}
    </nav>
  );
}

/* ------------------------------------------------------------------ */
/*  Text panel — all panels always mounted, cross-fade via CSS         */
/*  No AnimatePresence = no DOM mount/unmount = no iOS flicker         */
/* ------------------------------------------------------------------ */
function TextPanel({ activeIndex }: { activeIndex: number }) {
  return (
    <div className="relative">
      {logoSymbols.map((symbol, i) => {
        const Icon = symbol.icon;
        const isActive = i === activeIndex;
        return (
          <div
            key={symbol.id}
            className={cn(
              "flex flex-col transition-all duration-500 ease-out",
              isActive
                ? "relative opacity-100"
                : "pointer-events-none absolute inset-0 opacity-0",
            )}
            style={{
              transform: isActive ? "translateY(0)" : "translateY(12px)",
              ...GPU_LAYER,
            }}
            aria-hidden={!isActive}
          >
            {/* Icon badge */}
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-gold/30 bg-gold/10">
              <Icon className="h-6 w-6 text-gold" />
            </div>

            {/* Counter */}
            <span className="mb-2 text-xs font-semibold uppercase tracking-luxe text-gold/70">
              {i + 1} / {logoSymbols.length}
            </span>

            {/* Title */}
            <h3 className="font-serif text-2xl font-semibold sm:text-3xl">
              {symbol.title}
            </h3>

            {/* Subtitle */}
            <p className="mt-1 text-sm font-medium text-gold">
              {symbol.subtitle}
            </p>

            {/* Description */}
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
              {symbol.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */
export function LogoMeaning() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollingToRef = useRef<number | null>(null);
  const scrollTimerRef = useRef<ReturnType<typeof setTimeout>>(undefined);

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
    // Skip intermediate updates during programmatic scroll
    if (scrollingToRef.current !== null && clamped !== scrollingToRef.current)
      return;
    if (scrollingToRef.current !== null && clamped === scrollingToRef.current) {
      scrollingToRef.current = null;
    }
    setActiveIndex(clamped);
  });

  /* Click-to-scroll for progress dots / hotspots */
  const scrollToIndex = useCallback((i: number) => {
    const el = containerRef.current;
    if (!el) return;

    setActiveIndex(i);
    scrollingToRef.current = i;
    clearTimeout(scrollTimerRef.current);
    scrollTimerRef.current = setTimeout(() => {
      scrollingToRef.current = null;
    }, 1200);

    const rect = el.getBoundingClientRect();
    const containerTop = window.scrollY + rect.top;
    const scrollableHeight = el.scrollHeight - window.innerHeight;
    const fraction = i / (logoSymbols.length - 1);
    window.scrollTo({
      top: containerTop + scrollableHeight * fraction,
      behavior: "smooth",
    });
  }, []);

  /* Cleanup timer on unmount */
  useEffect(() => {
    return () => clearTimeout(scrollTimerRef.current);
  }, []);

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
              <div
                className="relative mx-auto w-full max-w-[240px] flex-shrink-0 md:max-w-[320px] lg:max-w-[420px]"
                style={GPU_LAYER}
              >
                {/* Ambient glow */}
                <div
                  className="pointer-events-none absolute inset-0 -z-10 scale-110 rounded-full opacity-20 blur-3xl"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(201,162,75,0.5), transparent 70%)",
                  }}
                  aria-hidden="true"
                />

                {/* Overall-meaning gold ring — always mounted, toggled via CSS */}
                <div
                  className="absolute -inset-3 rounded-full border-2 border-gold/50 transition-opacity duration-500"
                  style={{
                    opacity: isOverall ? 1 : 0,
                    ...GPU_LAYER,
                  }}
                  aria-hidden="true"
                >
                  <span className="absolute inset-0 rounded-full animate-glow-pulse" />
                </div>

                {/* Spotlight overlay — dark mode only */}
                <div
                  className="pointer-events-none absolute inset-0 z-10 rounded-full transition-all duration-700 hidden dark:block"
                  style={{
                    background: isOverall
                      ? "none"
                      : `radial-gradient(circle at ${activeHotspot.x}% ${activeHotspot.y}%, transparent 18%, rgba(0,0,0,0.25) 60%)`,
                  }}
                  aria-hidden="true"
                />

                {/* Logo wrapper — clips the square PNG to a circle */}
                <div className="relative overflow-hidden rounded-full" style={GPU_LAYER}>
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
