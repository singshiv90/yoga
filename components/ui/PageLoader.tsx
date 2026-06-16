"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem("pranava-loaded")) {
        setVisible(false);
        return;
      }
    } catch {}

    const fadeTimer = setTimeout(() => setFading(true), 5500);
    const hideTimer = setTimeout(() => {
      setVisible(false);
      try { sessionStorage.setItem("pranava-loaded", "1"); } catch {}
    }, 6500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-ink"
      style={{
        opacity: fading ? 0 : 1,
        transition: fading ? "opacity 0.8s ease" : undefined,
        pointerEvents: fading ? "none" : "auto",
      }}
    >
      {/* Ambient gold glow behind image */}
      <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[80px]" />

      {/* Yoga woman image with breathing animation */}
      <div
        className="relative h-72 w-72 overflow-hidden rounded-full border border-gold/20 shadow-2xl"
        style={{ animation: "yogaBreathe 3s ease-in-out infinite" }}
      >
        <Image
          src="/Yoga woman having a yoga session.jpg"
          alt="Yoga session"
          fill
          className="object-cover object-top"
          priority
        />
        {/* Subtle dark vignette overlay */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
      </div>

      {/* Please wait text */}
      <p className="mt-8 animate-pulse text-xs uppercase tracking-[0.3em] text-gold/70">
        Please wait…
      </p>

      <style>{`
        @keyframes yogaBreathe {
          0%, 100% { transform: scale(1);    box-shadow: 0 0 0px rgba(201,162,75,0.1); }
          50%       { transform: scale(1.04); box-shadow: 0 0 40px rgba(201,162,75,0.25); }
        }
      `}</style>
    </div>
  );
}
