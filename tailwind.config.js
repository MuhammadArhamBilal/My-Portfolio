/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: {
          bg: "#0F172A",
          surface: "#1E293B",
          surface2: "#27374D",
          border: "#334155",
        },
        ink: {
          primary: "#F1F5F9",
          secondary: "#94A3B8",
          dim: "#64748B",
        },
        accent: {   
          emerald: "#34D399",
          emeraldDeep: "#059669",
        },
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
    },
  },
  plugins: [],
};