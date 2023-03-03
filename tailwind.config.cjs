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
        lightLinks: '#ce4257',
        neutral:'#f6fff8',
        pink: {
          links:'#fda4af'
        },
        lightBlue:'#bfdaec',
        purple:'#534375',
        darkText:'#dddddd',
        blue: '#2b2d42',
        test:'#222430'
      }
    },
  },
  plugins: [],
}
