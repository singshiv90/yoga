"use client";

import { type ReactNode, useRef, useCallback } from "react";

/**
 * Infinite scrolling marquee using pure CSS animation.
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

  const pause = useCallback(() => {
    if (pauseOnHover && trackRef.current) {
      trackRef.current.style.animationPlayState = "paused";
    }
  }, [pauseOnHover]);

  const resume = useCallback(() => {
    if (pauseOnHover && trackRef.current) {
      trackRef.current.style.animationPlayState = "running";
    }
  }, [pauseOnHover]);

  return (
    <div
      className={`overflow-hidden ${className ?? ""}`}
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage:
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
        className="marquee-track flex w-max gap-6"
        style={{
          animation: `marquee-scroll ${speed}s linear infinite`,
          willChange: "transform",
          WebkitTransform: "translateZ(0)",
          transform: "translateZ(0)",
        }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
