"use client";

import { type ReactNode, useRef, useEffect, useCallback } from "react";

/**
 * Infinite scrolling marquee using requestAnimationFrame.
 * Works reliably on all devices including iOS Safari.
 * Pauses on hover (desktop) and touch (mobile), resumes on release.
 */
export function Marquee({
  children,
  speed = 30,
  pauseOnHover = true,
  className,
}: {
  children: ReactNode;
  speed?: number;
  pauseOnHover?: boolean;
  className?: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const pausedRef = useRef(false);
  const rafRef = useRef<number>(0);
  const lastTimeRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Wait a frame so the browser can measure the duplicated content
    const measure = requestAnimationFrame(() => {
      const halfWidth = track.scrollWidth / 2;
      // pixels per second — higher speed value = slower scroll
      const pxPerSec = halfWidth / speed;

      const step = (timestamp: number) => {
        if (!lastTimeRef.current) lastTimeRef.current = timestamp;
        const delta = timestamp - lastTimeRef.current;
        lastTimeRef.current = timestamp;

        if (!pausedRef.current) {
          offsetRef.current -= pxPerSec * (delta / 1000);
          if (offsetRef.current <= -halfWidth) {
            offsetRef.current += halfWidth;
          }
          track.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
        }

        rafRef.current = requestAnimationFrame(step);
      };

      rafRef.current = requestAnimationFrame(step);
    });

    return () => {
      cancelAnimationFrame(measure);
      cancelAnimationFrame(rafRef.current);
    };
  }, [speed]);

  const pause = useCallback(() => {
    if (pauseOnHover) pausedRef.current = true;
  }, [pauseOnHover]);

  const resume = useCallback(() => {
    if (pauseOnHover) {
      pausedRef.current = false;
      lastTimeRef.current = 0; // reset so no jump after pause
    }
  }, [pauseOnHover]);

  return (
    <div
      className={`overflow-hidden ${className ?? ""}`}
      style={{
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        maskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        touchAction: "pan-y",
      }}
      onMouseEnter={pause}
      onMouseLeave={resume}
      onTouchStart={pause}
      onTouchEnd={resume}
    >
      <div
        ref={trackRef}
        className="flex w-max gap-6"
        style={{ willChange: "transform" }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
