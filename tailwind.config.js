/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "landing-page": "url('../assets/landing-page.jpeg')"
      }
    },
  },
  plugins: [],
}