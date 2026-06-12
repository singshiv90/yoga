import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", lg: "2rem" },
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        // Luxury wellness palette
        sand: {
          50: "#faf7f2",
          100: "#f3ece0",
          200: "#e9dcc8",
          300: "#dcc6a6",
          400: "#cba97f",
          500: "#bd9263",
          600: "#a87c52",
          700: "#8b6444",
          800: "#71523c",
          900: "#5d4533",
        },
        sage: {
          50: "#f3f6f2",
          100: "#e3ebe0",
          200: "#c8d8c3",
          300: "#a3bd9c",
          400: "#7a9c70",
          500: "#5b7e52",
          600: "#46653f",
          700: "#385034",
          800: "#2e412c",
          900: "#273626",
        },
        gold: {
          DEFAULT: "#c9a24b",
          light: "#e0c178",
          dark: "#a8842f",
        },
        ink: {
          DEFAULT: "#1a1816",
          soft: "#26221e",
          muted: "#3a342e",
        },
        cream: "#fbf8f3",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        luxe: "0.22em",
      },
      boxShadow: {
        luxe: "0 24px 60px -20px rgba(40, 32, 20, 0.35)",
        glow: "0 0 0 1px rgba(201,162,75,0.25), 0 20px 50px -20px rgba(201,162,75,0.45)",
      },
      backgroundImage: {
        "radial-fade":
          "radial-gradient(ellipse at top, rgba(201,162,75,0.10), transparent 60%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.9)", opacity: "0.7" },
          "100%": { transform: "scale(1.8)", opacity: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.22,1,0.36,1) forwards",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        "pulse-ring": "pulse-ring 2s cubic-bezier(0.4,0,0.2,1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
