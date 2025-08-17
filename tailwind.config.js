/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inder: ["Inder", "sans-serif"],
        jomolhari: ["Jomolhari", "serif"],
        astro: ["'a Astro Space'", "sans-serif"],
      },
      colors: {
        brand: "#3C0A4C",
        graytext: "#4B4A4A",
        dark: "#0B0B0B",
      },
    },
  },
  plugins: [],
};
