/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
      colors: {
        ink: "#0A0A0A",
        soft: "#f5f5f5",
      },
      boxShadow: {
        premium: "0 20px 40px rgba(0,0,0,.25)",
        glow: "0 0 0 1px rgba(255,255,255,.12), 0 8px 30px rgba(0,0,0,.35)",
      },
    },
  },
  plugins: [],
};
