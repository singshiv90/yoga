import type { LucideIcon } from "lucide-react";
import { Heart, Wind, Flower2, Brain } from "lucide-react";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  icon: LucideIcon;
  content: string[];
  benefits: string[];
  conclusion: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "yoga-for-stress-relief",
    title: "How Yoga Helps You Beat Stress and Find Inner Peace",
    excerpt:
      "Explore the science-backed connection between yoga, relaxation, and emotional well-being. Discover how movement, breathwork, and mindfulness activate your body's natural relaxation response.",
    category: "Wellness",
    date: "June 10, 2026",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
    icon: Heart,
    content: [
      "Modern life often creates stress, anxiety, and mental fatigue. Between demanding work schedules, constant notifications, and the pressure to stay productive, our nervous systems are frequently stuck in fight-or-flight mode. Yoga combines movement, breathwork, and mindfulness to activate the body's relaxation response — shifting us from stress to calm, from tension to ease.",
      "Research shows that regular yoga practice can lower cortisol (the body's primary stress hormone), improve mood, enhance sleep quality, and support emotional resilience. A 2017 study published in the Journal of Clinical Psychology found that participants who practiced yoga twice a week for eight weeks experienced significant reductions in stress, anxiety, and depression symptoms.",
      "The magic lies in the combination of three elements: conscious movement that releases stored physical tension, deep breathing that signals the parasympathetic nervous system to relax, and mindful awareness that interrupts the cycle of anxious thoughts. Together, these create a powerful antidote to the chronic stress that plagues modern life.",
      "You don't need an hour-long session to feel the benefits. Even 15–20 minutes of gentle yoga — a few sun salutations, some seated twists, and a short savasana — can meaningfully shift your state. The key is consistency: a short daily practice delivers far more benefit than an occasional marathon session.",
      "Forward folds like Uttanasana calm the nervous system. Gentle inversions like Legs Up the Wall (Viparita Karani) redirect blood flow and ease tension headaches. Child's Pose (Balasana) provides a sense of safety and grounding. These poses are accessible to everyone, regardless of flexibility or experience.",
    ],
    benefits: [
      "Reduced cortisol and stress hormones",
      "Better emotional control and resilience",
      "Improved sleep quality and duration",
      "Increased self-awareness and mindfulness",
      "Greater mental clarity and focus",
      "Lower blood pressure and heart rate",
    ],
    conclusion:
      "Yoga offers a natural and effective path toward a calmer and healthier mind. By weaving even a short practice into your daily routine, you give your nervous system the reset it desperately needs — and over time, you'll find that the peace you cultivate on the mat begins to follow you off it.",
  },
  {
    slug: "pranayama-breathing-techniques",
    title: "5 Powerful Pranayama Techniques to Boost Your Health",
    excerpt:
      "Learn how simple breathing techniques can reduce stress, improve concentration, and bring inner peace. Master the ancient art of breath control for modern well-being.",
    category: "Breathing",
    date: "June 5, 2026",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?auto=format&fit=crop&w=800&q=80",
    icon: Wind,
    content: [
      "Pranayama is the ancient yogic practice of breath control — and it's far more than just \"taking deep breaths.\" The word itself comes from two Sanskrit roots: prana (life force or vital energy) and ayama (expansion or control). When practiced correctly, pranayama directly influences the nervous system and emotional state, offering one of the fastest paths to mental calm and physical vitality.",
      "The breath is unique among bodily functions: it operates automatically, yet we can consciously control it at any moment. This bridge between voluntary and involuntary systems gives us a powerful lever for influencing heart rate, blood pressure, digestion, and even immune function.",
      "Anulom Vilom (Alternate Nostril Breathing) balances the left and right hemispheres of the brain, reduces anxiety, and promotes deep calm. Sit comfortably, close your right nostril with your thumb, inhale through the left, then close the left nostril with your ring finger and exhale through the right. Alternate for 5–10 minutes.",
      "Bhramari (Bee Breath) creates a soothing vibration that calms the mind instantly. Close your ears with your thumbs, place fingers over your eyes, and exhale with a steady humming sound. This technique is especially effective for headaches, insomnia, and anger management.",
      "Kapalbhati (Skull Shining Breath) is an energizing technique that involves short, forceful exhales and passive inhales. It boosts metabolism, clears the sinuses, and increases alertness. Start with 30 rounds and gradually build to 100. Nadi Shodhana (Channel Purification) is a more refined version of alternate nostril breathing that deeply purifies the energy channels.",
    ],
    benefits: [
      "Mental clarity and sharper concentration",
      "Reduced anxiety and emotional balance",
      "Improved lung capacity and respiratory health",
      "Better sleep and relaxation",
      "Enhanced energy and metabolism",
    ],
    conclusion:
      "Mastering the breath is one of the fastest ways to improve both physical and mental well-being. These five pranayama techniques require no equipment, no special clothing, and no more than 10–15 minutes a day. Start with one technique, practice it consistently for a week, then add another. Within a month, you'll notice a profound shift in your energy, focus, and inner calm.",
  },
  {
    slug: "yoga-for-beginners",
    title:
      "Yoga for Beginners: Your Complete Guide to Starting a Yoga Practice",
    excerpt:
      "Everything you need to know before beginning your yoga journey — from choosing your first class to building a consistent practice that sticks.",
    category: "Getting Started",
    date: "May 28, 2026",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?auto=format&fit=crop&w=800&q=80",
    icon: Flower2,
    content: [
      "Starting yoga can feel overwhelming — there are dozens of styles, unfamiliar Sanskrit names, and social media feeds full of impossibly flexible bodies. But here's the truth: yoga is suitable for people of all ages, body types, and fitness levels. You don't need to touch your toes to start. You just need to show up.",
      "Begin with simple postures and focus on proper breathing rather than how deep you can go into a pose. Mountain Pose (Tadasana), Cat-Cow stretches, Downward Dog, and Warrior I are excellent foundations. These poses build awareness of alignment, strengthen major muscle groups, and teach you to coordinate breath with movement.",
      "Choose a style that matches your goals. Hatha yoga is slow and methodical — perfect for beginners who want to learn proper form. Vinyasa is more dynamic and flowing, ideal if you enjoy movement. Restorative yoga uses props to support deep relaxation. Don't be afraid to try several styles before committing to one.",
      "The most common mistake beginners make is doing too much too soon. Progress comes gradually through patience and dedication, not through forcing your body into advanced poses. A 20-minute practice three times a week is far more valuable than one intense 90-minute session that leaves you sore and discouraged.",
      "Invest in a good-quality yoga mat with adequate grip — this is the only essential equipment. Wear comfortable, stretchy clothing. A yoga block and a strap are helpful but not necessary for your first weeks. Most importantly, find a qualified teacher (in-person or online) who can guide your alignment and answer questions.",
    ],
    benefits: [
      "Practice regularly, even if only 15–20 minutes",
      "Focus on breathing before depth in poses",
      "Avoid comparing yourself to others",
      "Listen to your body and respect its limits",
      "Stay consistent — progress compounds over time",
    ],
    conclusion:
      "Every expert was once a beginner. The hardest part of yoga is rolling out your mat for the first time — after that, the practice takes care of itself. Start where you are, use what you have, and trust the process. Your body and mind will thank you.",
  },
  {
    slug: "meditation-for-mental-clarity",
    title: "Meditation for Mental Clarity: How Stillness Sharpens Your Mind",
    excerpt:
      "Discover how practicing yoga and meditation every day can improve flexibility, strength, posture, focus, energy levels, and overall well-being.",
    category: "Meditation",
    date: "May 20, 2026",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1506126279646-a697353d3166?auto=format&fit=crop&w=800&q=80",
    icon: Brain,
    content: [
      "Yoga and meditation are much more than physical exercise. A consistent daily practice helps improve flexibility, strengthen muscles, reduce stress, and enhance mental clarity. Regular practice also improves posture, supports healthy breathing habits, boosts immunity, and increases overall energy levels.",
      "In a world of constant distraction — notifications, deadlines, multitasking — our attention has become fragmented. Meditation is the antidote. By training the mind to focus on a single point (the breath, a mantra, or a sensation), we strengthen the neural pathways responsible for sustained attention and executive function.",
      "Neuroscience research has shown that regular meditators develop thicker prefrontal cortices — the brain region responsible for decision-making, planning, and emotional regulation. Even eight weeks of consistent practice can produce measurable changes in brain structure and function.",
      "Whether you are a beginner or an experienced practitioner, dedicating even 20–30 minutes daily can bring noticeable improvements to your physical and mental health. Meditation encourages mindfulness, helping practitioners remain calm and focused in their daily lives — at work, in relationships, and during challenging moments.",
      "Start simple: sit comfortably, close your eyes, and focus on the natural rhythm of your breath. When your mind wanders (and it will — that's normal), gently guide your attention back without judgment. This act of noticing and returning is the practice itself. Over time, the gaps between thoughts grow longer, and a sense of spacious clarity emerges.",
    ],
    benefits: [
      "Better flexibility and physical strength",
      "Improved posture and body awareness",
      "Reduced stress and anxiety",
      "Increased energy and vitality",
      "Enhanced focus and concentration",
      "Better sleep quality and emotional balance",
    ],
    conclusion:
      "Daily yoga and meditation are a powerful investment in long-term health and happiness. The practice doesn't ask you to empty your mind — it invites you to observe it. And in that observation, something remarkable happens: the noise quiets, clarity arises, and you discover a stillness that was always there beneath the surface.",
  },
];

/** Helper to find a blog post by slug. */
export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
