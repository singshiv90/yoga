import { cn } from "@/lib/utils";

type Variant = "wave" | "curve" | "slant";

const paths: Record<Variant, string> = {
  wave: "M0,64 C320,128 640,0 960,64 C1280,128 1600,0 1920,64 L1920,320 L0,320 Z",
  curve: "M0,160 Q960,0 1920,160 L1920,320 L0,320 Z",
  slant: "M0,320 L1920,160 L1920,320 L0,320 Z",
};

export function SectionDivider({
  variant = "curve",
  flip = false,
  className,
}: {
  variant?: Variant;
  flip?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "pointer-events-none select-none overflow-hidden leading-none",
        flip && "rotate-180",
        className,
      )}
      aria-hidden="true"
      style={{ height: "clamp(40px, 6vw, 96px)" }}
    >
      <svg
        viewBox="0 0 1920 320"
        preserveAspectRatio="none"
        className="block h-full w-full"
      >
        <path d={paths[variant]} fill="rgb(var(--bg))" />
      </svg>
    </div>
  );
}
