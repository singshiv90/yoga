# Pranava Yoga — Luxury Yoga & Meditation Landing Page

A world-class, production-ready landing page for a premium yoga & wellness brand.
Built for lead generation, WhatsApp bookings, Instagram growth, and online class enrollment.

Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **next-themes** (dark/light mode).

---

## ✨ Features

- **13 conversion-focused sections** — Hero, Trust, About, Services, Benefits, Instagram, YouTube, Testimonials, Gallery, FAQ, WhatsApp CTA, Contact, Footer
- **Dark & Light mode** with no flash (`next-themes`, class strategy)
- **Framer Motion** scroll reveals, staggered grids, animated mobile menu & accordion
- **Glassmorphism** surfaces, luxury serif/sans typography, gold-on-sand palette
- **Floating WhatsApp CTA** + every service/FAQ/contact funnels into a pre-filled WhatsApp chat (no backend needed)
- **SEO**: metadata, OpenGraph/Twitter cards, JSON-LD `HealthAndBeautyBusiness` schema, `sitemap.xml`, `robots.txt`, semantic HTML
- **Performance**: `next/image` with AVIF/WebP, font `display: swap`, lazy-revealed sections — built to score 90+ on Lighthouse
- **Accessibility**: keyboard-friendly, ARIA labels, focus rings, `prefers-reduced-motion` support
- **Mobile-first** responsive layout throughout

---

## 📁 Project Structure

```
pranava-yoga/
├── app/
│   ├── globals.css          # Tailwind layers, theme tokens, component classes
│   ├── layout.tsx           # Fonts, metadata, JSON-LD schema, ThemeProvider
│   ├── page.tsx             # Assembles all sections in order
│   ├── robots.ts            # robots.txt
│   └── sitemap.ts           # sitemap.xml
├── components/
│   ├── Navbar.tsx           # Sticky glass navbar + mobile menu
│   ├── FloatingWhatsApp.tsx # Floating WhatsApp button with chat bubble
│   ├── providers/
│   │   └── ThemeProvider.tsx
│   ├── ui/
│   │   ├── Reveal.tsx       # Scroll-reveal + stagger helpers (Framer Motion)
│   │   ├── SectionHeading.tsx
│   │   └── ThemeToggle.tsx
│   └── sections/
│       ├── Hero.tsx             # 1  — full-screen hero
│       ├── TrustSection.tsx     # 2  — stats
│       ├── About.tsx            # 3  — instructor
│       ├── Services.tsx         # 4  — service cards
│       ├── Benefits.tsx         # 5  — animated benefits
│       ├── InstagramSection.tsx # 6  — IG gallery + follow CTA
│       ├── YouTubeSection.tsx   # 7  — featured videos
│       ├── Testimonials.tsx     # 8  — 6 testimonials
│       ├── Gallery.tsx          # 9  — filterable masonry
│       ├── FAQ.tsx              # 10 — accordion
│       ├── WhatsAppCTA.tsx      # 11 — conversion CTA
│       ├── Contact.tsx          # 12 — form → WhatsApp
│       └── Footer.tsx           # 13 — footer
├── lib/
│   ├── config.ts            # 🔧 Brand, contact, WhatsApp number, socials, nav
│   ├── data.ts              # 📝 All copy, images, services, testimonials, FAQ
│   └── utils.ts             # cn() classname helper
├── tailwind.config.ts       # Luxury palette, fonts, animations
├── next.config.mjs          # Image domains, compression
└── tsconfig.json
```

---

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev
# → http://localhost:3000

# 3. Production build
npm run build
npm run start
```

> Requires **Node.js 18.17+**.

---

## 🔧 Customization (start here)

Everything you need to make it *yours* lives in two files:

### `lib/config.ts`
- `WHATSAPP_NUMBER` — **set your real number** (international format, no `+`/spaces). This powers the floating button, every CTA, and the contact form.
- `contact` — email, phone, WhatsApp display values
- `social` — Instagram / YouTube / Facebook URLs + handles
- `site` — brand name, description, URL, city/region (for "yoga near me" SEO)

### `lib/data.ts`
- Swap image URLs (currently royalty-free Unsplash), edit services, testimonials, FAQ, videos, gallery, benefits, and stats.

### Branding
- Colors & fonts: `tailwind.config.ts` + theme tokens in `app/globals.css`
- Replace the OG/Twitter share image in `app/layout.tsx`

---

## 🖼️ Images

All images are royalty-free Unsplash URLs embedded directly in `lib/data.ts` and the section components, so the site looks complete with **zero uploads**. Allowed remote hosts are configured in `next.config.mjs` (`images.unsplash.com`, `images.pexels.com`, `plus.unsplash.com`). Replace any URL with your own assets when ready.

---

## 🌐 Deployment

### Vercel (recommended — zero config)
1. Push this repo to GitHub/GitLab/Bitbucket.
2. Import it at [vercel.com/new](https://vercel.com/new).
3. Vercel auto-detects Next.js — click **Deploy**. Done.

```bash
# Or from the CLI:
npm i -g vercel
vercel
```

### Netlify
- Build command: `npm run build`
- Publish directory: `.next` (use the official Next.js Netlify plugin)

### Self-host / Docker / Node
```bash
npm run build
npm run start   # serves on PORT (default 3000)
```

After deploying, update `site.url` in `lib/config.ts` so canonical URLs, sitemap, and OG tags point to your domain.

---

## ✅ Lighthouse / Quality Checklist

- [x] Optimized images (`next/image`, AVIF/WebP, responsive `sizes`)
- [x] Fonts with `display: swap` + variable fonts
- [x] Semantic landmarks (`header`/`main`/`section`/`footer`), single `h1`
- [x] ARIA labels, focus-visible rings, reduced-motion support
- [x] Metadata, OG/Twitter, JSON-LD, sitemap, robots
- [x] No layout shift on theme load (`suppressHydrationWarning`)

---

Crafted with ♥ for mindful living.
