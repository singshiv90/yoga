"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useMotionValue, useTransform } from "framer-motion";
import { galleryCategories, galleryItems } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

function TiltImage({ item }: { item: (typeof galleryItems)[number] }) {
  const ref = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useTransform(mouseY, [0, 1], [5, -5]);
  const rotateY = useTransform(mouseX, [0, 1], [-5, 5]);

  function handleMouseMove(e: React.MouseEvent) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  }

  function handleMouseLeave() {
    mouseX.set(0.5);
    mouseY.set(0.5);
  }

  return (
    <motion.figure
      ref={ref}
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, perspective: 800 }}
      className={cn(
        "group relative break-inside-avoid overflow-hidden rounded-2xl",
        item.span === "tall" && "aspect-[3/4]",
        item.span === "wide" && "aspect-[4/3]",
        item.span === "normal" && "aspect-square",
      )}
    >
      <Image
        src={item.image}
        alt={item.alt}
        fill
        loading="lazy"
        sizes="(max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/70 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-ink">
          {item.category}
        </span>
      </div>
    </motion.figure>
  );
}

export function Gallery() {
  const [active, setActive] =
    useState<(typeof galleryCategories)[number]>("All");

  const filtered =
    active === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === active);

  return (
    <section id="gallery" className="section-pad">
      <div className="container-luxe">
        <SectionHeading
          kicker="Transformation Gallery"
          title={
            <>
              Moments of{" "}
              <span className="text-gradient-gold">Stillness &amp; Strength</span>
            </>
          }
          subtitle="A glimpse into the practice, the peace, and the lifestyle our community cultivates."
        />

        {/* Filter pills */}
        <div className="mt-10 flex flex-wrap justify-center gap-2.5">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-all",
                active === cat
                  ? "bg-gold text-ink shadow-glow"
                  : "border border-current/15 text-muted hover:border-gold hover:text-gold",
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry via CSS columns */}
        <motion.div layout className="mt-10 columns-2 gap-4 lg:columns-3 [&>*]:mb-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <TiltImage key={item.image} item={item} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
