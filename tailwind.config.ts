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
        float: "float 20s ease-in-out infinite",
        "float-delayed": "float-delayed 25s ease-in-out infinite",
        "float-slow": "float-slow 30s ease-in-out infinite",
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
        float: {
          "0%, 100%": { transform: "translateY(0) translateX(0)" },
          "33%": { transform: "translateY(-30px) translateX(20px)" },
          "66%": { transform: "translateY(-15px) translateX(-20px)" },
        },
        "float-delayed": {
          "0%, 100%": { transform: "translateY(0) translateX(0)" },
          "33%": { transform: "translateY(25px) translateX(-25px)" },
          "66%": { transform: "translateY(-20px) translateX(15px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0) translateX(0) scale(1)" },
          "50%": { transform: "translateY(-20px) translateX(20px) scale(1.05)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
