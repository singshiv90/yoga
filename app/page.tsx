import { Navbar } from "@/components/Navbar";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { BackToTop } from "@/components/ui/BackToTop";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { Hero } from "@/components/sections/Hero";
import { TrustSection } from "@/components/sections/TrustSection";
import { About } from "@/components/sections/About";
import { LogoMeaning } from "@/components/sections/LogoMeaning";
import { Services } from "@/components/sections/Services";
import { Benefits } from "@/components/sections/Benefits";
import { InstagramSection } from "@/components/sections/InstagramSection";
import { YouTubeSection } from "@/components/sections/YouTubeSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { Gallery } from "@/components/sections/Gallery";
import { BlogSection } from "@/components/sections/BlogSection";
import { FAQ } from "@/components/sections/FAQ";
import { WhatsAppCTA } from "@/components/sections/WhatsAppCTA";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustSection />
        <SectionDivider variant="curve" />
        <About />
        <SectionDivider variant="curve" />
        <LogoMeaning />
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
