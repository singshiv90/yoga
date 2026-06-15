"use client";

import { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import type { ReactNode } from "react";

export function SpotlightCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  const background = useTransform(
    [mouseX, mouseY],
    ([px, py]: number[]) =>
      `radial-gradient(350px circle at ${px}px ${py}px, rgb(var(--accent) / 0.08), transparent 80%)`,
  );

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  function handleMouseLeave() {
    mouseX.set(-1000);
    mouseY.set(-1000);
  }

  return (
    <div
      ref={ref}
      className={`group relative ${className ?? ""}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background }}
      />
      {children}
    </div>
  );
}
