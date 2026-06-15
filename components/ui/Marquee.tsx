"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

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
      <motion.div
        className={`flex w-max gap-6 ${pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""}`}
        animate={{ x: [0, "-50%"] }}
        transition={{
          x: {
            duration: speed,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}
