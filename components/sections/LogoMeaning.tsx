import Image from "next/image";
import { ZoomIn } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function LogoMeaning() {
  return (
    <section id="logo-meaning" className="section-pad bg-radial-fade">
      <div className="container-luxe">
        <SectionHeading
          kicker="Our Identity"
          title={
            <>
              The Symbol of{" "}
              <span className="text-gradient-gold">Pranava Yoga</span>
            </>
          }
          subtitle="Every element of our emblem carries deep spiritual significance — a visual language of transformation, balance, and inner awakening."
          ornament
        />

        <Reveal delay={0.2}>
          <div className="relative mx-auto mt-14 max-w-3xl">
            {/* Ambient gold glow behind the card */}
            <div
              className="pointer-events-none absolute inset-0 -z-10 scale-90 rounded-full opacity-20 blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, rgba(201,162,75,0.55), transparent 70%)",
              }}
              aria-hidden="true"
            />

            {/* Decorative corner accents */}
            <span
              className="absolute -left-3 -top-3 z-10 h-8 w-8 rounded-tl-2xl border-l-2 border-t-2 border-gold/50"
              aria-hidden="true"
            />
            <span
              className="absolute -right-3 -top-3 z-10 h-8 w-8 rounded-tr-2xl border-r-2 border-t-2 border-gold/50"
              aria-hidden="true"
            />
            <span
              className="absolute -bottom-3 -left-3 z-10 h-8 w-8 rounded-bl-2xl border-b-2 border-l-2 border-gold/50"
              aria-hidden="true"
            />
            <span
              className="absolute -bottom-3 -right-3 z-10 h-8 w-8 rounded-br-2xl border-b-2 border-r-2 border-gold/50"
              aria-hidden="true"
            />

            {/* Image card — links to full-size view */}
            <a
              href="/about_logo.png"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block overflow-hidden rounded-3xl border border-gold/35 shadow-glow"
              aria-label="View Pranava Yoga symbol meaning at full size"
            >
              <Image
                src="/about_logo.png"
                alt="Pranava Yoga symbol meaning — each element of the emblem explained: Trishul (Shiva's trident), Damru (Shiva's drum), Lotus, Sudarshan Chakra, and Om/Aum"
                width={1400}
                height={1400}
                loading="lazy"
                className="h-auto w-full"
              />

              {/* Desktop hover overlay */}
              <div
                className="absolute inset-0 flex items-center justify-center bg-ink/0 transition-colors duration-300 group-hover:bg-ink/30"
                aria-hidden="true"
              >
                <span className="flex items-center gap-2 rounded-full bg-white/90 px-5 py-2.5 text-sm font-semibold text-ink opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100">
                  <ZoomIn className="h-4 w-4" />
                  View full size
                </span>
              </div>
            </a>

            {/* Caption */}
            <p className="mt-4 text-center text-xs italic text-muted">
              Tap the image to view full size
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
