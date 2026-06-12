import { Facebook, Flower2, Instagram, Mail, MessageCircle, Phone, Youtube } from "lucide-react";
import { contact, navLinks, site, social, whatsappLink } from "@/lib/config";
import { services } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t bg-elevated/60">
      <div className="container-luxe py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:pr-6">
            <a
              href="#hero"
              className="flex items-center gap-2.5 font-serif text-xl font-semibold"
            >
              <span className="grid h-9 w-9 place-items-center rounded-full bg-gold/15 text-gold">
                <Flower2 className="h-5 w-5" aria-hidden />
              </span>
              {site.name}
            </a>
            <p className="mt-4 text-sm leading-relaxed text-muted">
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
                  <a
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
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
                  <a
                    href="#services"
                    className="text-sm text-muted transition-colors hover:text-gold"
                  >
                    {s.title}
                  </a>
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
            © {year} {site.name}. All rights reserved.
          </p>
          <p>
            Crafted with <span className="text-gold">♥</span> for mindful living.
          </p>
        </div>
      </div>
    </footer>
  );
}
