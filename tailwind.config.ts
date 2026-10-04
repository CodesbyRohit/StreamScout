import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#101116",
        panel: "#181a22",
        muted: "#8d909d",
        accent: "#c4f46a",
        violet: "#a58bff",
      },
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 48px rgba(196, 244, 106, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
