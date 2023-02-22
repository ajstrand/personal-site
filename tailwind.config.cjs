/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        something: '#ce4257',
        neutral:'#f6fff8',
        pink: {
          links:'#fda4af'
        },
        // marigold color variant
        lightY:'#f3c063',
        blue: '#2b2d42',
        test:'#222430'
      }
    },
  },
  plugins: [],
}
