"use client";

import { useEffect, useRef, useCallback, type ReactNode } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface PolicyItem {
  icon: ReactNode;
  text: string;
}

interface PolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  items: PolicyItem[];
  accentColor?: "teal" | "gold";
  headerEmoji?: string;
  footerNote?: string;
}

export function PolicyModal({
  isOpen,
  onClose,
  title,
  items,
  accentColor = "teal",
  headerEmoji,
  footerNote,
}: PolicyModalProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const isTeal = accentColor === "teal";

  /* ── Escape key ── */
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  /* ── Body scroll lock ── */
  useEffect(() => {
    if (!isOpen) return;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [isOpen]);

  /* ── Focus close button on open ── */
  useEffect(() => {
    if (!isOpen) return;
    const t = setTimeout(() => closeBtnRef.current?.focus(), 60);
    return () => clearTimeout(t);
  }, [isOpen]);

  /* ── Focus trap ── */
  useEffect(() => {
    if (!isOpen || !panelRef.current) return;
    const el = panelRef.current;
    const onTab = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      const nodes = Array.from(
        el.querySelectorAll<HTMLElement>(
          'button,[href],input,select,textarea,[tabindex]:not([tabindex="-1"])',
        ),
      ).filter((n) => !n.hasAttribute("disabled"));
      if (!nodes.length) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onTab);
    return () => window.removeEventListener("keydown", onTab);
  }, [isOpen]);

  /* ── Click backdrop to close ── */
  const handleBackdrop = useCallback(() => onClose(), [onClose]);

  const emoji = headerEmoji ?? (isTeal ? "🪷" : "📜");

  return (
    <>
      {/* ── Backdrop: instant show/hide, zero opacity animation ── */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[200]"
          style={{ backgroundColor: "rgba(6, 4, 2, 0.82)" }}
          onClick={handleBackdrop}
          aria-hidden="true"
        />
      )}

      {/*
        ── Panel: always in DOM, CSS transform transition only ──
        Keeping the panel in the DOM avoids React mount/unmount repaints on iOS.
        CSS `transform` transitions run on the compositor thread — no opacity,
        no new layers, no blink.
      */}
      <div
        className={cn(
          "fixed inset-0 z-[201] flex items-center justify-center p-4 sm:p-8",
          !isOpen && "pointer-events-none invisible",
        )}
      >
        <div
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="policy-modal-title"
          className="relative flex w-full max-w-[520px] flex-col overflow-hidden rounded-3xl border border-white/[0.07] shadow-[0_32px_80px_rgba(0,0,0,0.6)]"
          style={{
            background: "rgb(var(--bg-elevated))",
            maxHeight: "88vh",
            /* Only transform — no opacity — so iOS never creates a new compositor layer */
            transform: isOpen
              ? "scale(1) translateY(0px)"
              : "scale(0.93) translateY(24px)",
            transition: "transform 0.38s cubic-bezier(0.22, 1, 0.36, 1)",
            willChange: "transform",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Gradient accent bar */}
          <div
            className={cn(
              "h-[3px] w-full shrink-0",
              isTeal
                ? "bg-gradient-to-r from-teal-dark via-teal-light to-teal"
                : "bg-gradient-to-r from-gold-dark via-gold-light to-gold",
            )}
          />

          {/* Header */}
          <div className="flex shrink-0 items-start justify-between gap-4 px-6 pt-5 pb-4">
            <div className="flex items-center gap-3">
              <div
                className={cn(
                  "flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl text-xl",
                  isTeal ? "bg-teal/10" : "bg-gold/10",
                )}
                aria-hidden="true"
              >
                {emoji}
              </div>
              <h2
                id="policy-modal-title"
                className="font-serif text-[1.2rem] font-bold leading-snug"
              >
                {title}
              </h2>
            </div>

            <button
              ref={closeBtnRef}
              onClick={onClose}
              aria-label="Close dialog"
              className={cn(
                "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 text-muted transition-all duration-200",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1",
                isTeal
                  ? "hover:border-teal/30 hover:bg-teal/10 hover:text-teal focus-visible:ring-teal"
                  : "hover:border-gold/30 hover:bg-gold/10 hover:text-gold focus-visible:ring-gold",
              )}
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>

          {/* Hairline divider */}
          <div className="mx-6 h-px shrink-0 bg-border/40" />

          {/* Scrollable content */}
          <div
            className="overflow-y-auto px-6 py-5"
            style={{ scrollbarWidth: "thin" }}
          >
            <ol role="list" className="flex flex-col">
              {items.map((item, i) => (
                <li key={i} className="flex items-stretch gap-3">
                  {/* Timeline: number circle + connector line */}
                  <div className="flex shrink-0 flex-col items-center">
                    <div
                      className={cn(
                        "flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold text-white",
                        isTeal ? "bg-teal" : "bg-gold",
                      )}
                    >
                      {i + 1}
                    </div>
                    {i < items.length - 1 && (
                      <div
                        className={cn(
                          "mt-1 w-px flex-1",
                          isTeal ? "bg-teal/20" : "bg-gold/20",
                        )}
                        style={{ minHeight: "12px" }}
                      />
                    )}
                  </div>

                  {/* Icon + text */}
                  <div className="flex flex-1 items-start gap-2 pb-4">
                    <span
                      className={cn(
                        "mt-0.5 shrink-0",
                        isTeal ? "text-teal" : "text-gold",
                      )}
                      aria-hidden="true"
                    >
                      {item.icon}
                    </span>
                    <p className="text-sm leading-relaxed text-muted">
                      {item.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            {footerNote && (
              <p
                className={cn(
                  "mt-3 rounded-2xl px-4 py-3 text-xs leading-relaxed",
                  isTeal
                    ? "bg-teal/[0.07] text-teal/70"
                    : "bg-gold/[0.07] text-gold/70",
                )}
              >
                {footerNote}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
