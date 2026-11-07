/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1a1a1a",
        paper: "#f5f0e8",
        panel: "#eee9e0",
        panelHigh: "#e8e3da",
        yellow: "#ffcc00",
        red: "#e63b2e",
        blue: "#0055ff",
      },
      fontFamily: {
        headline: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      boxShadow: {
        brutal: "4px 4px 0 #1a1a1a",
        "brutal-sm": "3px 3px 0 #1a1a1a",
      },
    },
  },
  plugins: [],
};
