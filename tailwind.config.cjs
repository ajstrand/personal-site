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
        yellow:{
          '500':'#EAA221' 
        },
        green:{
          '500':'#3a5a40'
        }
      }
    },
  },
  plugins: [],
}
