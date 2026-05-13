/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./electron/**/*.{js,ts,jsx,tsx}", // if you ever use Tailwind in preload/main
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}