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
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        maskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        touchAction: "pan-y",
        WebkitTransform: "translate3d(0,0,0)",
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
          WebkitAnimation: `marquee-scroll ${speed}s linear infinite`,
          animation: `marquee-scroll ${speed}s linear infinite`,
        }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
