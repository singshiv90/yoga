import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function SectionHeading({
  kicker,
  title,
  subtitle,
  align = "center",
  className,
  variant = "gold",
  ornament = false,
}: {
  kicker?: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
  variant?: "gold" | "teal";
  ornament?: boolean;
}) {
  const kickerCls = variant === "teal" ? "kicker-teal" : "kicker";
  const lineCls = variant === "teal" ? "bg-teal" : "bg-gold";
  const ornamentColor = variant === "teal" ? "bg-teal" : "bg-gold";

  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {kicker && (
        <span className={cn(kickerCls, "mb-4")}>
          <span className={cn("h-px w-6", lineCls)} />
          {kicker}
        </span>
      )}
      <h2 className="font-serif text-4xl font-semibold leading-tight sm:text-5xl">
        {title}
      </h2>
      {ornament && align === "center" && (
        <div className="mt-5 flex items-center justify-center gap-3">
          <span className={cn("h-px w-12", ornamentColor, "opacity-40")} />
          <span className={cn("h-2 w-2 rotate-45", ornamentColor, "opacity-60")} />
          <span className={cn("h-px w-12", ornamentColor, "opacity-40")} />
        </div>
      )}
      {subtitle && (
        <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
