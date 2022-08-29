/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.js"],
  theme: {
    colors: {
      mainTextColor: "#591918",
      green: {
        50: "#fdfdfb",
        100: "#fcfcf8",
        200: "#f7f7ed",
        300: "#f1f2e2",
        400: "#e7e8cc",
        500: "#DDDEB6", //base
        600: "#c7c8a4",
        700: "#a6a789",
        800: "#85856d",
        900: "#6c6d59",
      },
      coral: {
        50: "#fef8f6",
        100: "#fdf0ed",
        200: "#f9dad2",
        300: "#f5c4b6",
        400: "#ee9880",
        500: "#E76C49", //base
        600: "#d06142",
        700: "#ad5137",
        800: "#8b412c",
        900: "#713524",
      },
      "deep-sapphire": {
        50: "#f3f4f7",
        100: "#e7e9f0",
        200: "#c3c8d9",
        300: "#9ea7c3",
        400: "#566495",
        500: "#0d2268",
        600: "#0c1f5e",
        700: "#0a1a4e",
        800: "#08143e",
        900: "#061133",
      },
    },
    extend: {},
  },
  plugins: [],
};
