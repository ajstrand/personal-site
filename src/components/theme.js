/** @jsx jsx */
import { createContext } from "preact";
import { useContext } from "preact/hooks";

const themeObj = {
  fonts: {
    body: "Roboto,sans-serif",
    heading: "Lora, serif",
  },
  text: {
    heading: {
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
    },
  },
  fontSizes: [14, 20],
  colors: {
    white: "#ffffff",
    black: "#000000",
    background: "#F5F5F5",
    text: "#B13A5D",
    brightBlue: "#2EB6BC",
    secondBlue: "#5EE7E9",
    lightBg: "#abe1e4",
    palePink: "#C5A4AF",
    lightPalePinkText: "#F8D7E2",
    modes: {
      dark: {
        text: "#ffffff",
      },
      light: {
        text: "#131316",
      },
    },
  },
};
export const ThemeContext = createContext(themeObj);

export const useTheme = () => useContext(ThemeContext);
