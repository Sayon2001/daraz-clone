/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f5f5f5",
        silver: "#c0c0c0",
        bgbtn: "#f1f1f1",
        bgbtnHover: "#d6d6d6",
      },
      fontFamily: {
        heading: ["Roboto Condensed", "sans-serif"],
      }
    },
  },
  plugins: [],
}