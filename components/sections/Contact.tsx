"use client";

import { useState, type FormEvent } from "react";
import {
  Instagram,
  Mail,
  MessageCircle,
  Phone,
  Send,
  Youtube,
  CheckCircle2,
  Facebook,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { contact, social, whatsappLink } from "@/lib/config";

export function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const goal = String(data.get("goal") || "");
    const message = String(data.get("message") || "");
    // Funnel the form straight into a pre-filled WhatsApp chat (no backend needed).
    const text = `Hi Pranava Yoga! I'm ${name}.\nGoal: ${goal}\n${message}`;
    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  const channels = [
    {
      icon: Mail,
      label: "Email",
      value: contact.email,
      href: `mailto:${contact.email}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: contact.phoneDisplay,
      href: contact.phoneHref,
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: contact.whatsappDisplay,
      href: whatsappLink(),
    },
  ];

  return (
    <section id="contact" className="section-pad">
      <div className="container-luxe">
        <SectionHeading
          kicker="Get In Touch"
          title={
            <>
              Let&apos;s Start Your{" "}
              <span className="text-gradient-gold">Practice</span>
            </>
          }
          subtitle="Send a message and we'll reply on WhatsApp — usually within the hour."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Form */}
          <Reveal>
            <form
              onSubmit={handleSubmit}
              className="glass rounded-3xl p-7 shadow-luxe sm:p-9"
            >
              {sent ? (
                <div className="flex flex-col items-center gap-3 py-10 text-center">
                  <CheckCircle2 className="h-12 w-12 text-gold" aria-hidden />
                  <h3 className="font-serif text-2xl font-semibold">
                    Thank you!
                  </h3>
                  <p className="text-muted">
                    We&apos;ve opened WhatsApp so you can send your message.
                    We&apos;ll be in touch shortly. 🙏
                  </p>
                </div>
              ) : (
                <div className="grid gap-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field name="name" label="Your name" required />
                    <Field
                      name="phone"
                      label="Phone / WhatsApp"
                      type="tel"
                      required
                    />
                  </div>
                  <Field name="email" label="Email" type="email" />
                  <div>
                    <label
                      htmlFor="goal"
                      className="mb-1.5 block text-sm font-medium"
                    >
                      Your goal
                    </label>
                    <select
                      id="goal"
                      name="goal"
                      className="w-full rounded-xl border bg-elevated px-4 py-3 text-sm outline-none transition-colors focus:border-gold"
                    >
                      <option>Stress relief & relaxation</option>
                      <option>Flexibility & mobility</option>
                      <option>Weight management</option>
                      <option>Beginner foundations</option>
                      <option>Online classes</option>
                      <option>Corporate / team sessions</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-sm font-medium"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Tell us a little about what you're looking for…"
                      className="w-full resize-none rounded-xl border bg-elevated px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted/70 focus:border-gold"
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full">
                    <Send className="h-4 w-4" aria-hidden />
                    Send via WhatsApp
                  </button>
                </div>
              )}
            </form>
          </Reveal>

          {/* Channels + socials */}
          <Reveal delay={0.15} className="flex flex-col justify-center gap-4">
            {channels.map((c) => {
              const Icon = c.icon;
              return (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.label !== "Phone" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border bg-elevated p-5 transition-all hover:-translate-y-0.5 hover:shadow-luxe"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-gold/12 text-gold transition-transform group-hover:scale-110">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-sm text-muted">{c.label}</span>
                    <span className="block font-medium">{c.value}</span>
                  </span>
                </a>
              );
            })}

            <div className="mt-2 flex items-center gap-3">
              <span className="text-sm font-medium text-muted">Follow us</span>
              <div className="flex gap-3">
                <SocialIcon href={social.instagram} label="Instagram">
                  <Instagram className="h-5 w-5" aria-hidden />
                </SocialIcon>
                <SocialIcon href={social.youtube} label="YouTube">
                  <Youtube className="h-5 w-5" aria-hidden />
                </SocialIcon>
                <SocialIcon href={social.facebook} label="Facebook">
                  <Facebook className="h-5 w-5" aria-hidden />
                </SocialIcon>
                <SocialIcon href={whatsappLink()} label="WhatsApp">
                  <MessageCircle className="h-5 w-5" aria-hidden />
                </SocialIcon>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  type = "text",
  required,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium">
        {label}
        {required && <span className="text-gold"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl border bg-elevated px-4 py-3 text-sm outline-none transition-colors focus:border-gold"
      />
    </div>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="grid h-11 w-11 place-items-center rounded-full border border-current/15 transition-colors hover:bg-gold/10 hover:text-gold"
    >
      {children}
    </a>
  );
}
