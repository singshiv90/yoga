"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { ReactNode } from "react";

export function Parallax({
  children,
  speed = 0.15,
  className,
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [speed * -100, speed * 100]);

  return (
    <div ref={ref} className={className} style={{ overflow: "hidden", position: "relative" }}>
      <motion.div
        style={{
          y,
          willChange: "transform",
          position: "relative",
          width: "100%",
          height: "100%",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
