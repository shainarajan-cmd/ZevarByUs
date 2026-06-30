import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B0B0B",
        ivory: "#F8F4EC",
        gold: "#C5A15A",
        taupe: "#D8CFC2",
        espresso: "#3A3028"
      },
      fontFamily: {
        display: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Poppins", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 24px 70px rgba(11, 11, 11, 0.16)"
      }
    }
  },
  plugins: []
};

export default config;
