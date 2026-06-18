"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { navLinks, site, whatsappLink } from "@/lib/config";
import { ThemeToggle } from "./ui/ThemeToggle";

/** Prefix hash links with "/" when not on the home page so they navigate home first. */
function resolveHref(href: string, pathname: string) {
  if (href.startsWith("#")) {
    return pathname === "/" ? href : `/${href}`;
  }
  return href;
}

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  // IntersectionObserver for active section tracking
  useEffect(() => {
    if (pathname !== "/") return;

    const sections = document.querySelectorAll("section[id]");
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        }
      },
      { rootMargin: "-40% 0px -50% 0px" },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  /**
   * Force scroll to section even when the hash URL hasn't changed.
   * Without this, clicking "#benefits" while already at "/#benefits" does nothing.
   */
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (!href.startsWith("#") || pathname !== "/") return;
    e.preventDefault();
    const el = document.getElementById(href.slice(1));
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        // When not scrolled and menu closed, use white text over dark hero images
        !scrolled && !open && "text-white",
      )}
      style={
        scrolled || open
          ? {
              background: "rgb(var(--bg-elevated) / 0.85)",
              backdropFilter: "blur(24px) saturate(180%)",
              WebkitBackdropFilter: "blur(24px) saturate(180%)",
              borderBottom: "1px solid rgb(var(--accent) / 0.1)",
              boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.05)",
            }
          : {
              background: "transparent",
              borderBottom: "1px solid transparent",
              boxShadow: "none",
            }
      }
    >
      <nav className="container-luxe flex h-20 items-center justify-between py-4">
        <Link
          href="/"
          onClick={(e) => {
            if (pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="flex items-center gap-2.5 font-serif text-xl font-semibold"
          aria-label={`${site.name} home`}
        >
          <Image
            src="/logo.png"
            alt={`${site.name} logo`}
            width={60}
            height={60}
            className="h-[60px] w-[60px] rounded-full object-contain"
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => {
            const isActive = link.href.startsWith("#")
              ? activeSection === link.href
              : pathname === link.href;
            return (
              <li key={link.href} className="relative">
                <Link
                  href={resolveHref(link.href, pathname)}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-gold",
                    isActive
                      ? "text-gold"
                      : scrolled
                        ? "text-muted"
                        : "text-white/80",
                  )}
                >
                  {link.label}
                </Link>
                {isActive && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-gold"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary hidden sm:inline-flex"
          >
            Join on WhatsApp
          </a>
          <button
            type="button"
            className={cn(
              "grid h-10 w-10 place-items-center rounded-full border lg:hidden",
              scrolled ? "border-current/20" : "border-white/30",
            )}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu — CSS-only animation to avoid iOS Safari compositing blink */}
      <div
        className={cn(
          "glass overflow-hidden border-t transition-[grid-template-rows,opacity] duration-300 ease-out lg:hidden",
          open
            ? "grid grid-rows-[1fr] opacity-100"
            : "grid grid-rows-[0fr] opacity-0 pointer-events-none",
        )}
        aria-hidden={!open}
      >
        <div className="overflow-hidden">
          <ul className="container-luxe flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={resolveHref(link.href, pathname)}
                  onClick={(e) => { handleNavClick(e, link.href); setOpen(false); }}
                  className="block rounded-xl px-4 py-3 text-base font-medium text-[rgb(var(--fg))] transition-colors hover:bg-gold/10"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="px-4 pt-2">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full"
                onClick={() => setOpen(false)}
              >
                Join on WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
