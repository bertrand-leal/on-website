/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ["Oswald", "sans-serif"]
      },
      colors: {
        'on-yellow': "#FFA800",
        'on-white': '#F5F5F5',
        'on-black': "#0E0E0E"
      }
    },
  },
  plugins: [],
}
