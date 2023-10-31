/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        PlayfairDisplay: ["Playfair Display", "serif"],
        PTserif: ["PT Serif", "seri"],
      },
    },
  },
  plugins: [],
};
