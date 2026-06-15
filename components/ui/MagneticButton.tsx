"use client";

import { useRef, useState } from "react";
import { motion, useSpring } from "framer-motion";
import type { ReactNode, ElementType } from "react";

export function MagneticButton({
  children,
  as: Tag = "button",
  className,
  ...props
}: {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  [key: string]: unknown;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const x = useSpring(0, { stiffness: 300, damping: 20 });
  const y = useSpring(0, { stiffness: 300, damping: 20 });

  function handleMouseMove(e: React.MouseEvent) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    x.set(dx * 0.15);
    y.set(dy * 0.15);
  }

  function handleMouseLeave() {
    setHovered(false);
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      <Tag className={className} {...props}>
        {children}
      </Tag>
    </motion.div>
  );
}
