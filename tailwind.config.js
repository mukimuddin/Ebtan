/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brandColor': '#E52525',
      },
    },
    container: {
      center: true,
      padding: "50px",
    },
    fontFamily: {
      "inter" : [ "Inter", "sans-serif"]
    }
  },
  plugins: [],
}