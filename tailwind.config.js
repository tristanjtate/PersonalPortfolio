/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        customDarkBlue: "#003135",
        customBlue: "#024950",
        customRed: "#964734",
        customTeal: "#0fa4af",
        customLightBlue: "#afDDe5",
      },
      fontFamily: {
        overpass: ["Overpass", "sans-serif"],
        parkinsans: ["Parkinsans", "sans-serif"],
        spacemono: ["Space Mono", "monospace"],
      },
      keyframes: {
        pulsescale: {
          "0%, 120%": { opacity: 1, transform: "scale(1)" },
          "50%": { opacity: 0.7, transform: "scale(1.1)" },
        },
      },
      animation: {
        pulsescale: "pulsescale 2s ease-in-out infinite", // 3 seconds per cycle
      },
      darkMode: "class",
    },
  },
  plugins: [],
};
