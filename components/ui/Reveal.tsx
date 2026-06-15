"use client";

import { useRef, useEffect, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Direction = "up" | "down" | "left" | "right" | "none";

const translateMap: Record<Direction, string> = {
  up: "translateY(40px)",
  down: "translateY(-40px)",
  left: "translateX(40px)",
  right: "translateX(-40px)",
  none: "none",
};

/**
 * Scroll-triggered reveal wrapper using pure CSS transitions + IntersectionObserver.
 *
 * SSR renders inline `opacity:0` so elements are hidden from the very first paint.
 * Above-fold elements are shown instantly (no transition) to prevent any flash.
 * The `revealed` ref ensures React re-renders never reset visible elements to hidden.
 */
export function Reveal({
  children,
  direction = "up",
  delay = 0,
  className,
}: {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const revealed = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || revealed.current) return;

    const rect = el.getBoundingClientRect();
    const inViewport = rect.top < window.innerHeight + 80 && rect.bottom > -80;

    if (inViewport) {
      // Above fold — show instantly, no animation, no blink
      revealed.current = true;
      el.style.transition = "none";
      el.style.opacity = "1";
      el.style.transform = "none";
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          revealed.current = true;
          el.style.opacity = "1";
          el.style.transform = "none";
          observer.unobserve(el);
        }
      },
      { rootMargin: "-80px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const translate = translateMap[direction];
  const initialTransform =
    translate === "none" ? "scale(0.97)" : `${translate} scale(0.97)`;

  // After reveal, render with visible styles so React re-renders never reset to hidden
  if (revealed.current) {
    return (
      <div ref={ref} className={className} style={{ opacity: 1, transform: "none" }}>
        {children}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: 0,
        transform: initialTransform,
        transition: `opacity 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

/**
 * Stagger container — children fade up in sequence.
 *
 * CSS (.stagger-children > *) hides children for SSR-safe initial state.
 * Above-fold content is shown instantly without stagger animation.
 * IntersectionObserver applies stagger delays for off-screen content.
 */
export function StaggerGroup({
  children,
  className,
  stagger = 0.1,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const revealed = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || revealed.current) return;

    const rect = el.getBoundingClientRect();
    const inViewport = rect.top < window.innerHeight + 60 && rect.bottom > -60;
    const kids = el.children;

    if (inViewport) {
      // Above fold — show all children instantly
      revealed.current = true;
      for (let i = 0; i < kids.length; i++) {
        const child = kids[i] as HTMLElement;
        child.style.transition = "none";
        child.style.opacity = "1";
        child.style.transform = "none";
      }
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          revealed.current = true;
          for (let i = 0; i < kids.length; i++) {
            const child = kids[i] as HTMLElement;
            child.style.transitionDelay = `${i * stagger}s`;
            child.style.opacity = "1";
            child.style.transform = "none";
          }
          observer.unobserve(el);
        }
      },
      { rootMargin: "-60px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [stagger]);

  return (
    <div ref={ref} className={cn("stagger-children", className)}>
      {children}
    </div>
  );
}

/** @deprecated No longer needed — kept for import compatibility. */
export const staggerItem = {};
