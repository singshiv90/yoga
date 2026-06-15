"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Mail, MessageCircle, Phone, Youtube } from "lucide-react";
import { contact, navLinks, site, social, whatsappLink } from "@/lib/config";
import { services } from "@/lib/data";

/** Prefix hash links with "/" when not on the home page so they navigate home first. */
function resolveHref(href: string, pathname: string) {
  if (href.startsWith("#")) {
    return pathname === "/" ? href : `/${href}`;
  }
  return href;
}

export function Footer() {
  const pathname = usePathname();
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t overflow-hidden">
      {/* Gradient mesh background */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute -left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-gold/5 blur-[120px]" />
        <div className="absolute right-0 top-1/4 h-[400px] w-[400px] rounded-full bg-sage-300/5 blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 h-[450px] w-[450px] rounded-full bg-teal-400/5 blur-[120px]" />
      </div>

      <div className="container-luxe py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col items-center lg:items-center lg:pr-6">
            <Link
              href={pathname === "/" ? "#hero" : "/"}
            >
              <Image
                src="/logo.png"
                alt={`${site.name} logo`}
                width={140}
                height={140}
                loading="lazy"
                className="h-[130px] w-[130px] rounded-full object-contain bg-ink/90 p-1 dark:bg-transparent dark:p-0"
              />
            </Link>
            <p className="mt-4 text-center text-sm leading-relaxed text-muted">
              {site.tagline}. Personalized yoga, meditation &amp; pranayama
              coaching — online, for every body.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="grid h-10 w-10 place-items-center rounded-full border border-current/15 transition-colors hover:bg-gold/10 hover:text-gold"
              >
                <Instagram className="h-5 w-5" aria-hidden />
              </a>
              <a
                href={social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="grid h-10 w-10 place-items-center rounded-full border border-current/15 transition-colors hover:bg-gold/10 hover:text-gold"
              >
                <Youtube className="h-5 w-5" aria-hidden />
              </a>
              <a
                href={social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="grid h-10 w-10 place-items-center rounded-full border border-current/15 transition-colors hover:bg-gold/10 hover:text-gold"
              >
                <Facebook className="h-5 w-5" aria-hidden />
              </a>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="grid h-10 w-10 place-items-center rounded-full border border-current/15 transition-colors hover:bg-gold/10 hover:text-gold"
              >
                <MessageCircle className="h-5 w-5" aria-hidden />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={resolveHref(link.href, pathname)}
                    className="text-sm text-muted transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5">
              {services.slice(0, 6).map((s) => (
                <li key={s.title}>
                  <Link
                    href={resolveHref("#services", pathname)}
                    className="text-sm text-muted transition-colors hover:text-gold"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold">
              Contact
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-2.5 text-sm text-muted transition-colors hover:text-gold"
                >
                  <Mail className="h-4 w-4 shrink-0" aria-hidden />
                  {contact.email}
                </a>
              </li>
              <li>
                <a
                  href={contact.phoneHref}
                  className="flex items-center gap-2.5 text-sm text-muted transition-colors hover:text-gold"
                >
                  <Phone className="h-4 w-4 shrink-0" aria-hidden />
                  {contact.phoneDisplay}
                </a>
              </li>
              <li className="text-sm text-muted">
                {site.city}, {site.region}, {site.country}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-sm text-muted sm:flex-row">
          <p>
            &copy; {year} {site.name}. All rights reserved.
          </p>
          <p>
            Crafted with <span className="text-gold">&hearts;</span> for mindful living.
          </p>
        </div>
      </div>
    </footer>
  );
}
