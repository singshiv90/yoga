import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { AmbientOrbs } from "@/components/ui/AmbientOrbs";
import { site, social } from "@/lib/config";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Yoga Classes, Meditation & Online Yoga Instructor`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "yoga classes",
    "meditation classes",
    "online yoga instructor",
    "pranayama coaching",
    "wellness coaching",
    "yoga near me",
    "Ashtanga yoga",
    "Vinyasa yoga",
    "Hatha yoga",
    "corporate yoga",
    "yoga for beginners",
    "stress relief yoga",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: `${site.name} — Transform Your Life Through Yoga & Meditation`,
    description: site.description,
    images: [
      {
        url: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: `${site.name} — Luxury Yoga & Meditation`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Yoga & Meditation`,
    description: site.description,
    images: [
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbf8f3" },
    { media: "(prefers-color-scheme: dark)", color: "#12100e" },
  ],
  width: "device-width",
  initialScale: 1,
};

// Local business + organization schema for rich SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: site.name,
  description: site.description,
  url: site.url,
  image:
    "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1200&q=80",
  address: {
    "@type": "PostalAddress",
    addressLocality: site.city,
    addressRegion: site.region,
    addressCountry: site.country,
  },
  sameAs: [social.instagram, social.youtube, social.facebook],
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "1000",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${serif.variable} ${sans.variable}`}>
      <body>
<script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ScrollProgress />
        <AmbientOrbs />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
