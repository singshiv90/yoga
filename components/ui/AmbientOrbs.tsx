"use client";

/**
 * Lightweight ambient background orbs using pure CSS.
 * No JS animation — uses CSS `animation` for GPU-composited transforms only.
 */
export function AmbientOrbs() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      <div
        className="absolute h-[300px] w-[300px] rounded-full opacity-[0.07] dark:opacity-[0.04]"
        style={{
          left: "10%",
          top: "15%",
          background: "radial-gradient(circle, #c9a24b, transparent 70%)",
          animation: "float 20s ease-in-out infinite",
        }}
      />
      <div
        className="absolute h-[250px] w-[250px] rounded-full opacity-[0.06] dark:opacity-[0.03]"
        style={{
          right: "10%",
          top: "5%",
          background: "radial-gradient(circle, #a3bd9c, transparent 70%)",
          animation: "float 25s ease-in-out infinite reverse",
        }}
      />
      <div
        className="absolute h-[280px] w-[280px] rounded-full opacity-[0.06] dark:opacity-[0.03]"
        style={{
          left: "35%",
          bottom: "10%",
          background: "radial-gradient(circle, #14b8a6, transparent 70%)",
          animation: "float 22s ease-in-out infinite 3s",
        }}
      />
    </div>
  );
}
