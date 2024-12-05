/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        customDarkBlue: '#003135',
        customBlue: '#024950',
        customRed: '#964734',
        customTeal: '#0fa4af',
        customLightBlue: '#afDDe5',
      },
      fontFamily: {
        overpass: ['Overpass', 'sans-serif'],
        parkinsans: ['Parkinsans', 'sans-serif'],
        spacemono: ['Space Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
