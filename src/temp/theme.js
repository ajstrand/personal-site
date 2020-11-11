/** @jsx jsx */
import { jsx } from "@emotion/core";
import { ThemeProvider } from "emotion-theming";

const theme = {
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
    palePink: "#C5A4AF",
    lightPalePinkText: "#F8D7E2",
    styles: {
      root: {
        fontFamily: "body",
        lineHeight: "body",
        fontWeight: "body",
      },
      h1: {
        variant: "text.heading",
        fontSize: 5,
      },
      h2: {
        variant: "text.heading",
        fontSize: 4,
      },
      h3: {
        variant: "text.heading",
        fontSize: 3,
      },
      h4: {
        variant: "text.heading",
        fontSize: 2,
      },
      h5: {
        variant: "text.heading",
        fontSize: 1,
      },
      h6: {
        variant: "text.heading",
        fontSize: 0,
      },
    },
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

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
