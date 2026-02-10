import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          violet: {
            50: "#faf8fc",
            100: "#f3eef9",
            200: "#e9def4",
            300: "#d7c2eb",
            400: "#BC96E4", // Brand accent color (exact from logo)
            500: "#a872d8",
            600: "#8f55c7",
            700: "#7943ad",
            800: "#65398e",
            900: "#533173",
            950: "#341C4D", // Primary dark (exact from logo)
          },
          ink: {
            50: "#f7f6f8",
            100: "#efedf1",
            200: "#e1dde6",
            300: "#cac3d4",
            400: "#aea3bd",
            500: "#9587a6",
            600: "#7e6f8d",
            700: "#6b5d75",
            800: "#594e62",
            900: "#4b4353",
            950: "#341C4D", // Deep purple (exact from logo)
          },
          mint: {
            100: "#d0f5f3",
            300: "#7ee5de",
            500: "#3dd5cc",
          },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-radial-hero":
          "radial-gradient(circle at 50% 0%, var(--tw-gradient-stops))",
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out",
        "slide-up": "slide-up 0.5s ease-out",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-up": {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
