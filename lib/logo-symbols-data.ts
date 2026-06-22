import type { LucideIcon } from "lucide-react";
import {
  Flame,
  Drum,
  Flower2,
  Shield,
  AudioWaveform,
  Sparkles,
} from "lucide-react";

export interface LogoSymbol {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  hotspot: { x: number; y: number };
  icon: LucideIcon;
  image: string;
}

export const logoSymbols: LogoSymbol[] = [
  {
    id: "trishul",
    title: "Trishul",
    subtitle: "The Trident of Shiva",
    description:
      "Represents the three powers of Shiva – Iccha Shakti (will power), Gyan Shakti (knowledge), and Kriya Shakti (action). It also symbolizes the past, present, and future and the destruction of negativity and ego.",
    hotspot: { x: 50, y: 24 },
    icon: Flame,
    image: "/trishul.png",
  },
  {
    id: "damru",
    title: "Damru",
    subtitle: "The Cosmic Drum",
    description:
      "Shiva's drum beats the primordial rhythm of creation. Its sound, Nada Brahma, is the vibration from which the entire universe emerged — a reminder that all existence begins with sacred sound.",
    hotspot: { x: 50, y: 34 },
    icon: Drum,
    image: "/damru.png",
  },
  {
    id: "lotus",
    title: "Lotus",
    subtitle: "Purity & Awakening",
    description:
      "Rising unblemished from muddy waters, the lotus embodies spiritual purity and the soul's journey toward enlightenment — beauty born from life's challenges.",
    hotspot: { x: 32, y: 58 },
    icon: Flower2,
    image: "/lotus.png",
  },
  {
    id: "chakra",
    title: "Sudarshan Chakra",
    subtitle: "The Divine Disc",
    description:
      "Represents divine protection, dharma, and the power to remove negativity and ignorance. It symbolizes time ,motion, and the eternal cycle of life.",
    hotspot: { x: 68, y: 42 },
    icon: Shield,
    image: "/sudarshan.png",
  },
  {
    id: "om",
    title: "Om / Aum",
    subtitle: "The Universal Vibration",
    description:
      "Om is the primordial sound that pervades all of creation. Chanted at the heart of every practice, it unites mind, body, and spirit in a single sacred resonance.",
    hotspot: { x: 50, y: 48 },
    icon: AudioWaveform,
    image: "/om.png",
  },
  {
    id: "overall",
    title: "Pranava Yoga",
    subtitle: "Union of Sacred Energies",
    description:
      "Together, these symbols form a single emblem of transformation — where divine power, cosmic rhythm, purity, protection, and universal vibration converge into the path of yoga.",
    hotspot: { x: 50, y: 50 },
    icon: Sparkles,
    image: "/logo.png",
  },
];
