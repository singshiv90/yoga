import type { Metadata } from "next";
import { site } from "@/lib/config";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Hero } from "@/components/sections/online-program/Hero";
import { WhyJoin } from "@/components/sections/online-program/WhyJoin";
import { FreeDemo } from "@/components/sections/online-program/FreeDemo";
import { ClassSchedule } from "@/components/sections/online-program/ClassSchedule";
import { Pricing } from "@/components/sections/online-program/Pricing";
import { EnrollmentProcess } from "@/components/sections/online-program/EnrollmentProcess";
import { ProgramTrust } from "@/components/sections/online-program/ProgramTrust";
import { FinalCTA } from "@/components/sections/online-program/FinalCTA";

export const metadata: Metadata = {
  title: "Online Yoga Program — Live Classes, Pranayama & Meditation",
  description:
    "Join live online yoga classes with Pranava Yoga. Expert-led Yoga, Pranayama & Meditation sessions via Zoom. Flexible batches, affordable pricing. Book a free demo class today.",
  keywords: [
    "online yoga classes",
    "live yoga classes",
    "online yoga program",
    "yoga via Zoom",
    "pranayama online",
    "meditation classes online",
    "yoga for beginners online",
    "affordable online yoga",
    "yoga classes from home",
    "online yoga India",
  ],
  alternates: { canonical: "/online-program" },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: `${site.url}/online-program`,
    siteName: site.name,
    title: `Online Yoga Program — ${site.name}`,
    description:
      "Live interactive yoga, pranayama & meditation classes via Zoom. Book a free demo class today.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: `${site.name} — Online Yoga Program`,
      },
    ],
  },
};

export default function OnlineProgramPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyJoin />
        <FreeDemo />
        <ClassSchedule />
        <Pricing />
        <EnrollmentProcess />
        <ProgramTrust />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
