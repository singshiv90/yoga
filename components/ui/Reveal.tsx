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
 * Renders with inline `opacity: 0` from the very first paint (SSR included),
 * so there is never a visible-to-invisible flash on iOS Safari during hydration.
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

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
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
 * Uses CSS initial state (.stagger-children > *) for SSR-safe hidden state,
 * then IntersectionObserver sets inline styles with stagger delays on reveal.
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

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const kids = el.children;
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
