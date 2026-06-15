/**
 * All page content lives here as typed sample data.
 * Edit copy, swap image URLs, or add items without touching component code.
 *
 * Images: royalty-free Unsplash URLs with explicit sizing params for fast,
 * optimized delivery. Replace freely with your own assets.
 */

import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Brain,
  Briefcase,
  Flower2,
  Heart,
  Leaf,
  Moon,
  Scale,
  Sparkles,
  Sun,
  User,
  Users,
  Video,
  Wind,
  Zap,
} from "lucide-react";

// ---------------------------------------------------------------------------
// SECTION 2 — Trust stats
// ---------------------------------------------------------------------------
export interface Stat {
  value: string;
  label: string;
  icon: LucideIcon;
  numericValue?: number;
  suffix?: string;
}

export const stats: Stat[] = [
  { value: "2+", label: "Years Experience", icon: Sparkles, numericValue: 2, suffix: "+" },
  { value: "1000+", label: "Students Guided", icon: Users, numericValue: 1000, suffix: "+" },
  { value: "Online", label: "Classes Worldwide", icon: Video },
  { value: "1:1", label: "Personalized Training", icon: User },
];

// ---------------------------------------------------------------------------
// SECTION 3 — Instructor
// ---------------------------------------------------------------------------
export const instructor = {
  name: "Shilpa Singh",
  image:
    "/15db5002-5e1d-44d3-a3aa-03177ced5558.jpg?auto=format&fit=crop&w=900&q=80",
  roles: [
    "Certified Yoga Instructor",
    "Meditation Guide",
    "Wellness Coach",
    "Transformation Mentor",
  ],
  bio: "For over fifteen years, Ananya has guided more than a thousand students from stress and stiffness toward strength, stillness, and self-mastery. Her approach blends classical Ashtanga and Hatha lineages with modern breath science — tailored to your body, your schedule, and your goals.",
  credentials: [
    "RYT 200 Certified Yoga Teacher",
    "Trained in Rishikesh, India",
    "Ashtanga 🕉️ Vinyasa 🕉️ Meditation",
  ],
};

// ---------------------------------------------------------------------------
// SECTION 4 — Services
// ---------------------------------------------------------------------------
export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
}

export const services: Service[] = [
  {
    title: "Ashtanga Yoga",
    description:
      "A dynamic, progressive sequence that builds strength, stamina, and discipline through synchronized breath and movement.",
    icon: Activity,
    image:
      "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Vinyasa Yoga",
    description:
      "Flowing, creative sequences that link breath to motion — graceful, energizing, and endlessly varied.",
    icon: Wind,
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Meditation",
    description:
      "Guided stillness practices to quiet the mind, release tension, and cultivate lasting inner peace.",
    icon: Brain,
    image:
      "https://images.unsplash.com/photo-1506126279646-a697353d3166?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Pranayama",
    description:
      "Ancient breathing techniques that regulate energy, calm the nervous system, and expand lung capacity.",
    icon: Wind,
    image:
      "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Weight Management Yoga",
    description:
      "Targeted, metabolism-boosting flows combined with mindful nutrition guidance for sustainable results.",
    icon: Scale,
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Corporate Yoga",
    description:
      "On-site and virtual sessions designed to reduce workplace stress and boost team focus and wellbeing.",
    icon: Briefcase,
    image:
      "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Online Yoga Classes",
    description:
      "Live, interactive classes streamed worldwide — practice with expert guidance from the comfort of home.",
    icon: Video,
    image:
      "https://images.unsplash.com/photo-1591291621164-2c6367723315?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Private Sessions",
    description:
      "Fully personalized 1:1 coaching crafted around your body, goals, and pace for the fastest transformation.",
    icon: User,
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
  },
];

// ---------------------------------------------------------------------------
// SECTION 5 — Benefits
// ---------------------------------------------------------------------------
export interface Benefit {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const benefits: Benefit[] = [
  {
    title: "Better Flexibility",
    description: "Release stiffness and move with ease and grace.",
    icon: Activity,
  },
  {
    title: "Better Sleep",
    description: "Calm an overactive mind and rest deeply each night.",
    icon: Moon,
  },
  {
    title: "Reduced Stress",
    description: "Lower cortisol and dissolve daily tension.",
    icon: Leaf,
  },
  {
    title: "Increased Energy",
    description: "Awaken vitality that carries through your day.",
    icon: Zap,
  },
  {
    title: "Mental Clarity",
    description: "Clear the fog and think with sharp focus.",
    icon: Sun,
  },
  {
    title: "Improved Focus",
    description: "Train sustained attention on and off the mat.",
    icon: Brain,
  },
  {
    title: "Emotional Balance",
    description: "Find steadiness and ease in every season of life.",
    icon: Heart,
  },
];

// ---------------------------------------------------------------------------
// SECTION 6 — Instagram gallery
// ---------------------------------------------------------------------------
export const instagramPosts: { image: string; alt: string }[] = [
  {
    image:
      "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?auto=format&fit=crop&w=600&q=80",
    alt: "Morning sun salutation on the beach",
  },
  {
    image:
      "https://images.unsplash.com/photo-1552286450-4a669f880062?auto=format&fit=crop&w=600&q=80",
    alt: "Seated meditation at sunrise",
  },
  {
    image:
      "https://images.unsplash.com/photo-1588286840104-8957b019727f?auto=format&fit=crop&w=600&q=80",
    alt: "Tree pose in nature",
  },
  {
    image:
      "https://images.unsplash.com/photo-1593164842264-854604db2260?auto=format&fit=crop&w=600&q=80",
    alt: "Group yoga class in a studio",
  },
  {
    image:
      "https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&w=600&q=80",
    alt: "Balancing posture outdoors",
  },
  {
    image:
      "https://images.unsplash.com/photo-1510894347713-fc3ed6fdf539?auto=format&fit=crop&w=600&q=80",
    alt: "Meditation candles and calm",
  },
];

// ---------------------------------------------------------------------------
// SECTION 7 — YouTube videos
// ---------------------------------------------------------------------------
export interface VideoCard {
  title: string;
  category: string;
  duration: string;
  thumbnail: string;
  // Real YouTube ID would go here; using a placeholder search link by default.
  url: string;
}

export const videos: VideoCard[] = [
  {
    title: "20-Minute Morning Yoga Flow",
    category: "Yoga Tutorial",
    duration: "20:14",
    thumbnail:
      "https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?auto=format&fit=crop&w=800&q=80",
    url: "https://youtube.com/@pranavayoga",
  },
  {
    title: "Deep Relaxation Guided Meditation",
    category: "Meditation Session",
    duration: "15:42",
    thumbnail:
      "https://images.unsplash.com/photo-1474418397713-7ede21d49118?auto=format&fit=crop&w=800&q=80",
    url: "https://youtube.com/@pranavayoga",
  },
  {
    title: "Pranayama: Breathe to Calm Anxiety",
    category: "Breathing Technique",
    duration: "12:08",
    thumbnail:
      "https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&w=800&q=80",
    url: "https://youtube.com/@pranavayoga",
  },
  {
    title: "5 Daily Habits for Lasting Wellness",
    category: "Wellness Tips",
    duration: "09:33",
    thumbnail:
      "https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?auto=format&fit=crop&w=800&q=80",
    url: "https://youtube.com/@pranavayoga",
  },
];

// ---------------------------------------------------------------------------
// SECTION 8 — Testimonials
// ---------------------------------------------------------------------------
export interface Testimonial {
  name: string;
  role: string;
  rating: number;
  image: string;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Priya Menon",
    role: "Software Engineer",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    quote:
      "After years of desk-job back pain, three months with Pranava Yoga changed everything. I sleep better, sit taller, and finally feel at home in my body.",
  },
  {
    name: "Rahul Verma",
    role: "Marketing Director",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    quote:
      "The corporate sessions transformed our team's energy. Ananya makes yoga accessible even for total beginners. Highly recommended for any busy professional.",
  },
  {
    name: "Sneha Kapoor",
    role: "Homemaker",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
    quote:
      "As a mother of two, I had no time for myself. The online classes fit my schedule perfectly — I'm calmer, stronger, and so much happier now.",
  },
  {
    name: "David Thompson",
    role: "Online Student, UK",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    quote:
      "Practicing live from London felt as personal as being in the room. The pranayama techniques alone were worth it — my anxiety has dropped dramatically.",
  },
  {
    name: "Aisha Rahman",
    role: "Doctor",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=200&q=80",
    quote:
      "I recommend Pranava Yoga to my own patients now. The personalized program respected my injuries and rebuilt my strength safely and steadily.",
  },
  {
    name: "Vikram Singh",
    role: "Entrepreneur",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
    quote:
      "The weight-management program delivered real results — 8 kg down and far more focus in my workday. This is luxury wellness done right.",
  },
];

// ---------------------------------------------------------------------------
// SECTION 9 — Transformation gallery (masonry)
// ---------------------------------------------------------------------------
export interface GalleryItem {
  image: string;
  category: "Yoga Practice" | "Meditation" | "Wellness Lifestyle" | "Nature & Mindfulness";
  alt: string;
  span: "tall" | "wide" | "normal";
}

export const galleryItems: GalleryItem[] = [
  {
    image:
      "/IMG_2777.jpg?auto=format&fit=crop&w=800&q=80",
    category: "Yoga Practice",
    alt: "Warrior pose at golden hour",
    span: "tall",
  },
  {
    image:
      "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=800&q=80",
    category: "Meditation",
    alt: "Peaceful meditation by the lake",
    span: "normal",
  },
  {
    image:
      "https://images.unsplash.com/photo-1540206395-68808572332f?auto=format&fit=crop&w=800&q=80",
    category: "Nature & Mindfulness",
    alt: "Sunrise over misty mountains",
    span: "wide",
  },
  {
    image:
      "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&w=800&q=80",
    category: "Wellness Lifestyle",
    alt: "Herbal tea and mindful morning",
    span: "normal",
  },
  {
    image:
      "https://images.unsplash.com/photo-1573384666290-3f0d80a48f73?auto=format&fit=crop&w=800&q=80",
    category: "Yoga Practice",
    alt: "Backbend stretch in studio",
    span: "normal",
  },
  {
    image:
      "/AC95F3AB-AE7D-4DB1-92FF-8F47E9209232.png?auto=format&fit=crop&w=800&q=80",
    category: "Nature & Mindfulness",
    alt: "Golden sunlight through forest",
    span: "tall",
  },
  {
    image:
      "https://images.unsplash.com/photo-1597452485677-d661670d9640?auto=format&fit=crop&w=800&q=80",
    category: "Meditation",
    alt: "Lotus pose with incense",
    span: "normal",
  },
  {
    image:
      "https://images.unsplash.com/photo-1532798442725-41036acc7489?auto=format&fit=crop&w=800&q=80",
    category: "Wellness Lifestyle",
    alt: "Calm spa and wellness setting",
    span: "wide",
  },
];

export const galleryCategories = [
  "All",
  "Yoga Practice",
  "Meditation",
  "Wellness Lifestyle",
  "Nature & Mindfulness",
] as const;

// ---------------------------------------------------------------------------
// SECTION 10 — FAQ
// ---------------------------------------------------------------------------
export const faqs: { question: string; answer: string }[] = [
  {
    question: "Can complete beginners join?",
    answer:
      "Absolutely. A large part of our community started with zero experience. Every class offers gentle modifications, and beginner-friendly programs build your foundation safely, step by step.",
  },
  {
    question: "Are online classes available worldwide?",
    answer:
      "Yes. We stream live, interactive classes to students across the globe. All you need is a stable internet connection — we'll handle the rest, across time zones.",
  },
  {
    question: "What equipment do I need to start?",
    answer:
      "Just a yoga mat and comfortable clothing to begin. As you progress we may suggest simple props like a block or strap, but nothing is required for your first sessions.",
  },
  {
    question: "How long is each session?",
    answer:
      "Group classes typically run 60 minutes, while private and corporate sessions can be tailored from 30 to 90 minutes based on your goals and schedule.",
  },
  {
    question: "Do you offer personal coaching?",
    answer:
      "Yes — our private 1:1 sessions are fully personalized to your body, experience, and goals, whether you want flexibility, stress relief, weight management, or a deeper practice.",
  },
];
