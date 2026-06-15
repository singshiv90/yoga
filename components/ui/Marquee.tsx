"use client";

import type { ReactNode } from "react";

/**
 * Infinite scrolling marquee using pure CSS animation.
 * Runs on the compositor thread (GPU) — zero JS animation overhead.
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
  return (
    <div
      className={`group overflow-hidden ${className ?? ""}`}
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
    >
      <div
        className={`flex w-max gap-6 ${pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""}`}
        style={{
          animation: `marquee-scroll ${speed}s linear infinite`,
          willChange: "transform",
        }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
