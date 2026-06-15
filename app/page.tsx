import dynamic from "next/dynamic";
import { Navbar } from "@/components/Navbar";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { BackToTop } from "@/components/ui/BackToTop";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { Hero } from "@/components/sections/Hero";
import { TrustSection } from "@/components/sections/TrustSection";
import { About } from "@/components/sections/About";

// Below-fold sections — dynamically imported to reduce initial JS bundle
const Services = dynamic(
  () => import("@/components/sections/Services").then((m) => m.Services),
);
const Benefits = dynamic(
  () => import("@/components/sections/Benefits").then((m) => m.Benefits),
);
const InstagramSection = dynamic(
  () =>
    import("@/components/sections/InstagramSection").then(
      (m) => m.InstagramSection,
    ),
);
const YouTubeSection = dynamic(
  () =>
    import("@/components/sections/YouTubeSection").then(
      (m) => m.YouTubeSection,
    ),
);
const Testimonials = dynamic(
  () =>
    import("@/components/sections/Testimonials").then((m) => m.Testimonials),
);
const Gallery = dynamic(
  () => import("@/components/sections/Gallery").then((m) => m.Gallery),
);
const BlogSection = dynamic(
  () =>
    import("@/components/sections/BlogSection").then((m) => m.BlogSection),
);
const FAQ = dynamic(
  () => import("@/components/sections/FAQ").then((m) => m.FAQ),
);
const WhatsAppCTA = dynamic(
  () => import("@/components/sections/WhatsAppCTA").then((m) => m.WhatsAppCTA),
);
const Contact = dynamic(
  () => import("@/components/sections/Contact").then((m) => m.Contact),
);
const Footer = dynamic(
  () => import("@/components/sections/Footer").then((m) => m.Footer),
);

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustSection />
        <SectionDivider variant="curve" />
        <About />
        <SectionDivider variant="wave" flip />
        <Services />
        <SectionDivider variant="curve" />
        <Benefits />
        <SectionDivider variant="wave" flip />
        <InstagramSection />
        <YouTubeSection />
        <Testimonials />
        <SectionDivider variant="curve" />
        <Gallery />
        <SectionDivider variant="wave" flip />
        <BlogSection />
        <FAQ />
        <WhatsAppCTA />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <BackToTop />
    </>
  );
}
