/**
 * Content data for the Online Yoga Program page.
 * All copy, pricing, and schedule info in one place.
 */

import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Brain,
  Clock,
  Gift,
  Globe,
  Heart,
  Leaf,
  MessageCircle,
  Phone,
  Shield,
  Sparkles,
  Star,
  Users,
  Video,
  Zap,
} from "lucide-react";

// ---------------------------------------------------------------------------
// Why Join — 7 benefits
// ---------------------------------------------------------------------------
export interface OnlineProgramBenefit {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const onlineProgramBenefits: OnlineProgramBenefit[] = [
  {
    title: "Live Interactive Sessions",
    description:
      "Real-time guidance and corrections from an experienced instructor — not pre-recorded videos.",
    icon: Video,
  },
  {
    title: "Practice From Anywhere",
    description:
      "Join from the comfort of your home, office, or while travelling. All you need is a mat and Wi-Fi.",
    icon: Globe,
  },
  {
    title: "Suitable for All Levels",
    description:
      "Whether you're a complete beginner or an advanced practitioner, every session is adapted to your pace.",
    icon: Users,
  },
  {
    title: "Holistic Wellness",
    description:
      "Combines Yoga, Pranayama, and Meditation for a complete mind-body-energy transformation.",
    icon: Heart,
  },
  {
    title: "Boost Energy & Focus",
    description:
      "Start your day with vitality and mental clarity that carries through work and life.",
    icon: Zap,
  },
  {
    title: "Stress & Anxiety Relief",
    description:
      "Scientifically-backed breathing and movement techniques to calm the nervous system.",
    icon: Leaf,
  },
  {
    title: "Build Strength & Flexibility",
    description:
      "Progressive sequences that safely improve your range of motion and core stability.",
    icon: Activity,
  },
];

// ---------------------------------------------------------------------------
// Class Schedule
// ---------------------------------------------------------------------------
export interface TimeSlot {
  time: string;
  label: string;
}

export const classSchedule = {
  days: "Monday to Saturday",
  platform: "Live via Zoom",
  slots: [
    { time: "6:00 – 7:00 AM", label: "Early Morning Batch" },
    { time: "7:00 – 8:00 AM", label: "Morning Batch" },
    { time: "8:00 – 9:00 AM", label: "Mid-Morning Batch" },
    { time: "5:00 – 6:00 PM", label: "Evening Batch" },
  ] as TimeSlot[],
};

// ---------------------------------------------------------------------------
// Pricing Plans
// ---------------------------------------------------------------------------
export interface PricingPlan {
  name: string;
  label: string;
  tagline: string;
  price: string;
  period: string;
  popular: boolean;
  savings?: string;
  features: string[];
}

export const pricingPlans: PricingPlan[] = [
  {
    name: "Silver Membership",
    label: "Silver",
    tagline: "Short-term trial for beginners",
    price: "₹1,200",
    period: "/month",
    popular: false,
    features: [
      "All live group classes",
      "Monday to Friday access",
      "Yoga + Pranayama + Meditation",
      "Flexible batch timing",
      "WhatsApp support",
    ],
  },
  {
    name: "Gold Membership",
    label: "Gold",
    tagline: "Ideal for advanced trainers",
    price: "₹3,000",
    period: "/3 months",
    popular: true,
    savings: "Save ₹600",
    features: [
      "All live group classes",
      "Monday to Friday access",
      "Yoga + Pranayama + Meditation",
      "Flexible batch timing",
      "WhatsApp support",
    ],
  },
  {
    name: "Platinum Membership",
    label: "Platinum",
    tagline: "Personal trainer",
    price: "₹3,000",
    period: "/month",
    popular: false,
    features: [
      "1-on-1 personal training sessions",
      "Customised yoga plan",
      "Monday to Friday access",
      "Yoga + Pranayama + Meditation",
      "Priority WhatsApp support",
    ],
  },
];

// ---------------------------------------------------------------------------
// Enrollment Steps
// ---------------------------------------------------------------------------
export interface EnrollmentStep {
  step: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const enrollmentSteps: EnrollmentStep[] = [
  {
    step: 1,
    title: "Book a Free Demo Class",
    description:
      "Experience a complimentary session to see if the program is right for you.",
    icon: Gift,
  },
  {
    step: 2,
    title: "Choose Your Batch & Plan",
    description:
      "Pick a time slot that fits your schedule and select Monthly or Quarterly.",
    icon: Clock,
  },
  {
    step: 3,
    title: "Get Your Zoom Link",
    description:
      "Receive your private class link and welcome guide on WhatsApp.",
    icon: MessageCircle,
  },
  {
    step: 4,
    title: "Start Your Transformation",
    description:
      "Show up on the mat and experience the change from day one.",
    icon: Sparkles,
  },
];

// ---------------------------------------------------------------------------
// Trust Points
// ---------------------------------------------------------------------------
export interface TrustPoint {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const programTrustPoints: TrustPoint[] = [
  {
    title: "Certified Instructor",
    description: "RYT 200 certified with 2+ years of teaching experience.",
    icon: Shield,
  },
  {
    title: "20+ Students",
    description: "Trusted by students across India and worldwide.",
    icon: Users,
  },
  {
    title: "Live & Interactive",
    description: "Real-time corrections, not pre-recorded content.",
    icon: Video,
  },
  {
    title: "5-Star Rated",
    description: "Consistently rated excellent by our community.",
    icon: Star,
  },
  {
    title: "Personal Attention",
    description: "Small batch sizes for individualized guidance.",
    icon: Phone,
  },
];
