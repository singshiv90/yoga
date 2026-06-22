/**
 * Central brand + contact configuration.
 * Update these values in ONE place and they propagate across the whole site.
 */

export const site = {
  name: "Pranava Yoga",
  tagline: "Yoga • Meditation • Inner Balance",
  description:
    "Pranava Yoga offers premium yoga classes, meditation, and pranayama coaching — online and offline. Personalized training for working professionals, beginners, and wellness seekers worldwide.",
  url: "https://www.pranavayoga.com",
  locale: "en_US",
  // Used for "Yoga near me" SEO + local business schema
  city: "Mumbai",
  region: "Maharashtra",
  country: "India",
};

// --- Contact / conversion endpoints ---------------------------------------
// Replace with your real number in international format, no "+" or spaces.
export const WHATSAPP_NUMBER = "917058155564";

export const WHATSAPP_DEFAULT_MESSAGE =
  "Hi Pranava Yoga! I'd love to learn more about your yoga & meditation classes.";

/** Build a wa.me deep link with a pre-filled message. */
export function whatsappLink(message: string = WHATSAPP_DEFAULT_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// --- Programs dedicated contact ---
export const PROGRAMS_WHATSAPP_NUMBER = "917058155564";

export const PROGRAMS_WHATSAPP_MESSAGE =
  "Hi! I'm interested in the Yoga Programs. I'd like to know more about the classes and schedule.";

/** Build a wa.me deep link for programs. */
export function programsWhatsappLink(
  message: string = PROGRAMS_WHATSAPP_MESSAGE,
) {
  return `https://wa.me/${PROGRAMS_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const programsContact = {
  phone1Display: "+91 7058155564",
  phone1Href: "tel:+917058155564",
  phone2Display: "+91 7058155564",
  phone2Href: "tel:+917058155564",
};

export const contact = {
  email: "shilpa.pranavayoga@gmail.com",
  phoneDisplay: "+91 7058155564",
  phoneHref: "tel:+91 7058155564",
  whatsappDisplay: "+91 7058155564",
};

export const social = {
  instagram: "https://instagram.com/shilpa.pranavayoga",
  instagramHandle: "@shilpa.pranavayoga",
  youtube: "https://youtube.com/@shilpa.pranavayoga",
  youtubeHandle: "@pranavayoga",
  facebook: "https://facebook.com/shilpa.pranavayoga",
};

// Navigation anchors used by the navbar + footer
export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Benefits", href: "#benefits" },
  { label: "Community", href: "#instagram" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Blog", href: "#blog" },
  { label: "FAQ", href: "#faq" },
  { label: "Our Programs", href: "/our-programs" },
  { label: "Contact", href: "#contact" },
];
