import type { Metadata } from "next";
import { site } from "@/lib/config";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { BackToTop } from "@/components/ui/BackToTop";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { Hero } from "@/components/sections/our-programs/Hero";
import { WhyJoin } from "@/components/sections/our-programs/WhyJoin";
import { FreeDemo } from "@/components/sections/our-programs/FreeDemo";
import { ClassSchedule } from "@/components/sections/our-programs/ClassSchedule";
import { Pricing } from "@/components/sections/our-programs/Pricing";
import { EnrollmentProcess } from "@/components/sections/our-programs/EnrollmentProcess";
import { ProgramTrust } from "@/components/sections/our-programs/ProgramTrust";
import { FinalCTA } from "@/components/sections/our-programs/FinalCTA";

export const metadata: Metadata = {
  title: "Our Programs — Yoga Classes, Pranayama & Meditation | Online & Offline",
  description:
    "Join live yoga classes with Pranava Yoga — online and offline. Expert-led Yoga, Pranayama & Meditation sessions. Flexible batches, affordable pricing. Book a free demo class today.",
  keywords: [
    "yoga classes",
    "online yoga classes",
    "offline yoga classes",
    "live yoga classes",
    "yoga programs",
    "yoga via Zoom",
    "pranayama classes",
    "meditation classes",
    "yoga for beginners",
    "affordable yoga",
    "yoga classes India",
  ],
  alternates: { canonical: "/our-programs" },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: `${site.url}/our-programs`,
    siteName: site.name,
    title: `Our Programs — ${site.name}`,
    description:
      "Live interactive yoga, pranayama & meditation classes — online and offline. Book a free demo class today.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: `${site.name} — Our Programs`,
      },
    ],
  },
};

export default function OurProgramsPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SectionDivider variant="curve" />
        <WhyJoin />
        <SectionDivider variant="wave" flip />
        <FreeDemo />
        <SectionDivider variant="curve" />
        <ClassSchedule />
        <Pricing />
        <SectionDivider variant="wave" flip />
        <EnrollmentProcess />
        <ProgramTrust />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <BackToTop />
    </>
  );
}
