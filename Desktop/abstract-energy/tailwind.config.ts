import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: "#0a0a0a",
          card: "#121212",
          border: "#262626",
          hover: "#1a1a1a",
        },
        palantir: {
          blue: "#0066cc",
          accent: "#3b82f6",
        }
      },
      // Safely compiled native CSS Keyframes
      keyframes: {
        "hero-rotator": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "5%": { opacity: "1", transform: "translateY(0)" },
          "20%": { opacity: "1", transform: "translateY(0)" },
          "25%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "0", transform: "translateY(-20px)" },
        }
      },
      animation: {
        "hero-rotator": "hero-rotator 16s linear infinite",
      }
    },
  },
  plugins: [],
};

export default config;