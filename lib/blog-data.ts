import type { LucideIcon } from "lucide-react";
import { Activity, Brain, Flower2, Heart, Leaf, Sun, Wind, Zap } from "lucide-react";

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
    slug: "morning-yoga-routine",
    title: "Start Your Day Right: The Perfect Morning Yoga Routine",
    excerpt:
      "A simple, energising morning yoga sequence that takes just 20 minutes — designed to wake up your body, clear your mind, and set a positive tone for the entire day.",
    category: "Daily Practice",
    date: "June 16, 2026",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&w=800&q=80",
    icon: Sun,
    content: [
      "How you begin your morning shapes the entire trajectory of your day. A 20-minute yoga practice before breakfast — before checking your phone or diving into the day's demands — creates a sense of groundedness and intention that carries forward into everything you do.",
      "Start in Child's Pose (Balasana) for two minutes. Let your breath deepen and your body soften after sleep. This gentle inversion calms the nervous system and signals to your mind that this time is yours. Move slowly into Cat-Cow stretches to awaken the spine — these simple movements release overnight stiffness and begin lubricating the joints.",
      "Flow through three rounds of Sun Salutations (Surya Namaskar). This sequence touches every major muscle group, improves circulation, and elevates core body temperature. If you are new to yoga, take your time with each pose — do not rush the transitions. Each posture is an opportunity to breathe and feel.",
      "Follow with Warrior I and Warrior II to build strength and stability. These standing poses cultivate a sense of power and confidence that carries over into your interactions throughout the day. Close with a supine twist (lying down, draw one knee across the body) to release the lower back and stimulate digestion.",
      "End with five minutes of Savasana or seated meditation. Resist the urge to skip this — it is the integration phase where the benefits of movement settle into the body and mind. Set a simple intention for the day before you open your eyes.",
    ],
    benefits: [
      "Increased energy and alertness without caffeine",
      "Reduced morning stiffness and joint pain",
      "Better posture and spinal alignment throughout the day",
      "Improved digestion and metabolism",
      "A calmer, more focused mindset from the start",
      "Stronger sense of daily routine and self-discipline",
    ],
    conclusion:
      "A morning yoga practice doesn't need to be long to be powerful. Twenty minutes of mindful movement before the world pulls you in a hundred directions is one of the most valuable gifts you can give yourself. Commit to it for just two weeks — the results will make the habit stick.",
  },
  {
    slug: "yoga-for-back-pain",
    title: "Yoga for Back Pain: Gentle Poses to Heal and Strengthen Your Spine",
    excerpt:
      "Back pain affects millions of people worldwide. Discover the most effective yoga poses for relieving back pain, improving posture, and building the core strength to prevent it from returning.",
    category: "Therapeutic Yoga",
    date: "June 15, 2026",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
    icon: Activity,
    content: [
      "Lower back pain is one of the leading causes of missed work and reduced quality of life globally. Whether yours stems from hours at a desk, poor posture, muscle imbalance, or stress-related tension, yoga offers a gentle, evidence-backed approach to healing — without medication or surgery.",
      "The most important principle: never force. In therapeutic yoga, the goal is to move with awareness rather than push through pain. Begin with Knees-to-Chest pose (Apanasana) — lying on your back, draw both knees toward your chest and rock gently side to side. This decompresses the lumbar spine and provides immediate relief.",
      "Cat-Cow stretches mobilize the entire spine and are particularly effective for chronic lower back pain. Moving slowly with the breath — arching on the inhale, rounding on the exhale — improves circulation to the spinal discs and relieves muscle tension. Practice 10–15 rounds daily.",
      "Sphinx Pose (Salamba Bhujangasana) gently strengthens the erector spinae muscles along the spine without compression. Lying on your stomach, prop yourself onto your forearms and breathe deeply, letting the lower back release downward. Hold for 1–2 minutes. Bridge Pose (Setu Bandhasana) strengthens the glutes and hamstrings — the muscles that support a healthy lumbar curve.",
      "For sustainable relief, combine these poses with core-strengthening practices. A weak core forces the back muscles to compensate, creating the tension cycle that perpetuates pain. Even simple exercises like Bird-Dog (extending the opposite arm and leg in a tabletop position) significantly improve lumbar stability.",
    ],
    benefits: [
      "Reduced lower back pain and muscle tension",
      "Improved spinal flexibility and range of motion",
      "Stronger core, glutes, and back muscles",
      "Better posture and body alignment",
      "Decreased reliance on pain medication",
      "Improved quality of sleep and daily comfort",
    ],
    conclusion:
      "Yoga treats the root cause of back pain — not just the symptoms. With consistent, gentle practice, most people experience significant relief within four to six weeks. Always listen to your body, and if you have a specific spinal condition, consult a qualified yoga therapist who can personalise a program for your needs.",
  },
  {
    slug: "ayurvedic-nutrition-for-yogis",
    title: "Ayurvedic Nutrition: Eat According to Your Body and Enhance Your Practice",
    excerpt:
      "Ayurveda and yoga are sister sciences rooted in the same ancient wisdom. Learn how eating according to your Dosha type can transform your energy, digestion, and yoga practice.",
    category: "Nutrition",
    date: "June 14, 2026",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    icon: Leaf,
    content: [
      "In Ayurveda — India's 5,000-year-old science of life — food is considered medicine. What you eat, when you eat it, and how you eat it profoundly influences your physical health, mental clarity, and spiritual practice. Ayurvedic nutrition is not a diet; it is a relationship with food rooted in self-knowledge and seasonal wisdom.",
      "Ayurveda identifies three fundamental constitutions, or Doshas: Vata (air and space), Pitta (fire and water), and Kapha (earth and water). Most people are a combination of two, with one dominant. Understanding your Dosha helps you choose foods, meal timings, and preparation methods that bring your unique system into balance.",
      "Vata types tend to run cold, dry, and anxious — they thrive on warm, cooked, slightly oily foods like soups, stews, root vegetables, and warming spices like ginger and cinnamon. Pitta types run hot, sharp, and intense — cooling foods like cucumber, coconut, mint, and sweet fruits help balance their fiery nature. Kapha types run heavy and slow — light, spicy, warm, and dry foods stimulate their metabolism.",
      "For yoga practitioners, meal timing matters as much as content. Practice on an empty stomach (or 2–3 hours after a light meal). A heavy meal before yoga dulls the body and mind, makes inversions uncomfortable, and redirects prana toward digestion rather than movement. After practice, give your body 30 minutes before eating — this allows the nervous system to settle and digestion to restart gently.",
      "Certain Ayurvedic foods are especially beneficial for yogis: ghee (clarified butter) lubricates the joints and nourishes the nervous system; turmeric reduces inflammation; ashwagandha supports energy and recovery; warm lemon water in the morning stimulates digestion and liver function. These simple additions can noticeably improve how you feel on and off the mat.",
    ],
    benefits: [
      "Improved digestion and reduced bloating",
      "Steadier energy levels throughout the day",
      "Enhanced flexibility and joint comfort",
      "Better sleep and recovery after practice",
      "Clearer skin and improved vitality",
      "Greater mental focus and emotional stability",
    ],
    conclusion:
      "When you align your diet with your constitution and your yoga practice, something remarkable happens: food becomes fuel in the truest sense. You feel lighter, more energised, and more present on the mat. Start by identifying your dominant Dosha and making one small dietary adjustment — the shift can be surprisingly profound.",
  },
  {
    slug: "ashtanga-yoga-guide",
    title: "Ashtanga Yoga: The Dynamic Practice That Transforms Your Body and Mind",
    excerpt:
      "Ashtanga yoga is one of the most powerful and transformative yoga systems in the world. Discover its structure, benefits, and how to begin your Ashtanga journey safely and effectively.",
    category: "Yoga Styles",
    date: "June 13, 2026",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&w=800&q=80",
    icon: Zap,
    content: [
      "Ashtanga yoga is a system of yoga transmitted to the modern world by Sri K. Pattabhi Jois — a direct student of the great T. Krishnamacharya. It is a rigorous, structured practice built around six series of postures, each designed to progressively deepen strength, flexibility, and spiritual awareness. Unlike many modern yoga styles, Ashtanga follows a fixed sequence practiced in the same order every session.",
      "The practice is built on three foundational pillars: Tristhana — Drishti (gaze point), Pranayama (breath), and Bandha (internal energy locks). Every posture in the Primary Series is linked with a specific breath count (vinyasa) and gaze point, creating a moving meditation that trains both body and mind simultaneously.",
      "The Primary Series (Yoga Chikitsa, meaning 'yoga therapy') is where every practitioner begins, regardless of experience. It consists of standing sequences, forward bends, twists, and inversions that systematically detoxify the body, align the spine, and build the foundation for advanced work. A full Primary Series takes 90 minutes; beginners often practice a shortened version of 45–60 minutes.",
      "What makes Ashtanga uniquely transformative is its consistency. By practicing the same sequence daily (traditionally six days a week), the body adapts rapidly. What feels impossible in month one feels natural by month three. The mind also benefits — repetition creates a meditative depth that is harder to achieve in varied classes. Over time, the practice becomes a moving mandala.",
      "Ashtanga is not suitable for those seeking a gentle or casual practice. It demands commitment, patience, and willingness to work through challenges. However, modifications exist for every body, and a skilled teacher can help you adapt the practice to your needs. The Mysore-style format — where each student works at their own pace within the sequence — is considered the ideal learning environment.",
    ],
    benefits: [
      "Exceptional strength, flexibility, and body composition",
      "Deep meditative focus from repetitive sequencing",
      "Improved cardiovascular fitness and stamina",
      "Detoxification through heat and deep breathing",
      "Strong internal discipline and mental resilience",
      "Gradual, systematic progress toward advanced postures",
    ],
    conclusion:
      "Ashtanga yoga is not just a physical practice — it is a complete system for transformation. It will challenge you, humble you, and ultimately reveal strengths you didn't know you had. If you feel called to a practice that demands everything and gives back even more, Ashtanga may be exactly what you are looking for.",
  },
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
