# Pranava Yoga — Luxury Yoga & Meditation Website

A world-class, production-ready website for a premium yoga & wellness brand.
Built for lead generation, WhatsApp bookings, Instagram growth, and online class enrollment.

Built with **Next.js 16.2.9 (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **next-themes** (dark/light mode).

---

## ✨ Features

- **15 conversion-focused sections** — Hero, Trust, About, Logo Meaning, Services, Benefits, Instagram, YouTube, Testimonials, Gallery, Blog, FAQ, WhatsApp CTA, Contact, Footer
- **Online Program page** — dedicated page with Hero, Why Join, Free Demo, Class Schedule, Pricing (with policy modals), Enrollment Process, Trust badges, Final CTA
- **Policy Modals** — Payment Terms & Conditions and Online Session Guidelines with elegant timeline UI
- **Logo Meaning section** — interactive infographic explaining each symbol of the Pranava Yoga emblem
- **Dark & Light mode** with no flash (`next-themes`, class strategy)
- **iOS blink-free interactions** — FAQ accordion and modals use compositor-thread CSS animations (no opacity transitions)
- **Glassmorphism** surfaces, luxury serif/sans typography, teal/gold/cream palette
- **Floating WhatsApp CTA** + every service/FAQ/contact funnels into a pre-filled WhatsApp chat (no backend needed)
- **SEO**: metadata, OpenGraph/Twitter cards, JSON-LD `HealthAndBeautyBusiness` schema, `sitemap.xml`, `robots.txt`, semantic HTML
- **Performance**: `next/image` with AVIF/WebP, font `display: swap`, lazy-revealed sections
- **Accessibility**: keyboard-friendly, ARIA labels, focus rings, focus trap in modals, `prefers-reduced-motion` support
- **Mobile-first** responsive layout throughout

---

## 📁 Project Structure

```
pranava-yoga/
├── app/
│   ├── globals.css              # Tailwind layers, theme tokens, component classes
│   ├── layout.tsx               # Fonts, metadata, JSON-LD schema, ThemeProvider
│   ├── page.tsx                 # Home page — assembles all sections in order
│   ├── online-program/
│   │   └── page.tsx             # Online program dedicated page
│   ├── blog/
│   │   └── [slug]/page.tsx      # Dynamic blog post pages
│   ├── robots.ts                # robots.txt
│   └── sitemap.ts               # sitemap.xml
├── components/
│   ├── Navbar.tsx               # Sticky glass navbar + mobile menu
│   ├── FloatingWhatsApp.tsx     # Floating WhatsApp button with chat bubble
│   ├── providers/
│   │   └── ThemeProvider.tsx
│   ├── ui/
│   │   ├── Reveal.tsx           # Scroll-reveal + stagger helpers
│   │   ├── PolicyModal.tsx      # Reusable policy/terms modal (iOS-safe, no opacity animation)
│   │   ├── SectionHeading.tsx
│   │   ├── SpotlightCard.tsx
│   │   ├── MagneticButton.tsx
│   │   └── ThemeToggle.tsx
│   └── sections/
│       ├── Hero.tsx                    # 1  — full-screen hero
│       ├── TrustSection.tsx            # 2  — stats & trust badges
│       ├── About.tsx                   # 3  — instructor profile
│       ├── LogoMeaning.tsx             # 4  — symbol/logo explanation infographic
│       ├── Services.tsx                # 5  — service cards
│       ├── Benefits.tsx                # 6  — animated benefits
│       ├── InstagramSection.tsx        # 7  — IG gallery + follow CTA
│       ├── YouTubeSection.tsx          # 8  — featured videos
│       ├── Testimonials.tsx            # 9  — testimonials
│       ├── Gallery.tsx                 # 10 — filterable gallery
│       ├── BlogSection.tsx             # 11 — blog preview cards
│       ├── FAQ.tsx                     # 12 — accordion (CSS grid-template-rows, iOS-safe)
│       ├── WhatsAppCTA.tsx             # 13 — conversion CTA
│       ├── Contact.tsx                 # 14 — contact form → WhatsApp
│       ├── Footer.tsx                  # 15 — footer
│       └── online-program/
│           ├── Hero.tsx
│           ├── WhyJoin.tsx
│           ├── FreeDemo.tsx
│           ├── ClassSchedule.tsx
│           ├── Pricing.tsx             # Pricing cards + Policy modal links
│           ├── EnrollmentProcess.tsx
│           ├── ProgramTrust.tsx
│           └── FinalCTA.tsx
├── lib/
│   ├── config.ts                # 🔧 Brand, contact, WhatsApp numbers, socials, nav
│   ├── data.ts                  # 📝 Home page copy, services, testimonials, FAQ
│   ├── online-program-data.ts   # 📝 Online program pricing, schedule, benefits
│   └── utils.ts                 # cn() classname helper
├── public/
│   └── about_logo.png           # Logo meaning infographic
├── tailwind.config.ts           # Luxury palette, fonts, animations
├── next.config.mjs              # Static export, image domains, compression
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

# 3. Production build (generates /out folder)
npm run build
```

> Requires **Node.js 20+**.

---

## 🔧 Customization (start here)

Everything you need to make it *yours* lives in two files:

### `lib/config.ts`
- `WHATSAPP_NUMBER` — set your real number (international format, no `+`/spaces). Powers the floating button, every CTA, and the contact form.
- `ONLINE_PROGRAM_WHATSAPP` — separate WhatsApp number for online program enquiries
- `contact` — email, phone, WhatsApp display values
- `social` — Instagram / YouTube / Facebook URLs + handles
- `site` — brand name, description, URL, city/region (for SEO)

### `lib/data.ts`
- Swap image URLs, edit services, testimonials, FAQ answers, videos, gallery, benefits, and stats.

### `lib/online-program-data.ts`
- Edit pricing plans, class schedule, enrollment steps, and trust badges for the online program page.

### Branding
- Colors & fonts: `tailwind.config.ts` + theme tokens in `app/globals.css`
- Logo meaning image: replace `public/about_logo.png`

---

## 🖼️ Images

All default images are royalty-free Unsplash/Pexels URLs embedded in `lib/data.ts` and section components. Allowed remote hosts are configured in `next.config.mjs`. Replace any URL with your own assets when ready.

---

## 🌐 Deployment

### Cloudflare Pages via GitHub (current setup)

The project is configured as a **static export** (`output: "export"` in `next.config.mjs`), generating a static `out` folder on every build.

**Build settings in Cloudflare Pages:**

| Setting | Value |
|---|---|
| Build command | `npm run build` |
| Build output directory | `out` |
| Node.js version | `20` |
| Deploy command | `npx wrangler pages deploy out --project-name=yoga` |

**Auto-deploy:** Every `git push origin main` triggers a full rebuild and redeploy automatically.

**Manual deploy from CLI:**
```bash
npm run build
npx wrangler pages deploy out --project-name=yoga
```

### Local production preview

```bash
npm run build
npx serve out
```

After deploying, update `site.url` in `lib/config.ts` so canonical URLs, sitemap, and OG tags point to your live domain.

---

## 📱 iOS Compatibility

All interactive animations are built to be blink-free on iOS Safari:

- **FAQ accordion** — uses CSS `grid-template-rows: 0fr → 1fr` transition (compositor thread, no opacity)
- **Policy modals** — CSS `transform` only (no opacity animation, no Framer Motion mount/unmount flash)
- **All buttons/links** — `-webkit-tap-highlight-color: transparent` globally applied
- **Body scroll lock** — `overflow: hidden` on `<html>` (no `position: fixed` reflow)

---

## ✅ Quality Checklist

- [x] Optimized images (`next/image`, AVIF/WebP, responsive `sizes`)
- [x] Fonts with `display: swap`
- [x] Semantic landmarks (`header`/`main`/`section`/`footer`), single `h1`
- [x] ARIA labels, focus-visible rings, focus trap in modals, reduced-motion support
- [x] Metadata, OG/Twitter, JSON-LD, sitemap, robots
- [x] No layout shift on theme load (`suppressHydrationWarning`)
- [x] iOS-safe animations (no compositor layer flash)
- [x] Static export — works on any CDN with zero server required

---

Crafted with ♥ for mindful living.
