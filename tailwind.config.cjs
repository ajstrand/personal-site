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
        yellow:{
          '500':'#EAA221' 
        },
        blue: '#2b2d42'
      }
    },
  },
  plugins: [],
}
