/** @jsx h */
import { jsx, Global, css } from "@emotion/core";
import { Helmet } from "react-helmet";
import { h } from "preact";
import { useTheme } from "./components/theme.js";

import { Flex } from "./components/componentsList.js";

import Copyright from "./components/Copyright.js";
import { prismTheme } from "../common-js/rehype-prism-mdx.js";

import { styled, setup } from "goober";
import { createGlobalStyles } from "goober/global";

setup(h, undefined, useTheme);

const StyledSummary = styled("summary")`
  font-family: "Lora";
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.black};
`;

const StyledDetails = styled("details")`
  width: 100%;
  & black-lives {
    padding: 15px;
    width: fit-content;
  }
`;

export const Details = () => {
  const theme = useTheme();
  return (
    <StyledDetails>
      <StyledSummary theme={theme}>Black Lives Matter</StyledSummary>
      <black-lives></black-lives>
    </StyledDetails>
  );
};

export const MetaDetails = ({ title, description }) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Alex Strand's personal site and digital garden</title>
      <meta name="twitter:title" content={title} />
      <meta name="og:title" content={title} />
      <meta name="description" content={description} />
      <meta name="twitter:description" content={description} />
      <meta name="og:type" content="website" />
      <meta name="twitter:site" content="@_alex_strand" />
      <meta name="twitter:creator" content="@_alex_strand" />
      {/* <link rel="stylesheet" href="/main.css" /> */}
      <script
        src="https://unpkg.com/i-stand/black-lives.js"
        type="module"
      ></script>
    </Helmet>
  );
};
export const SpecialStyles = createGlobalStyles`
    * {
      box-sizing: "border-box";
      margin: 0;
      padding: 0;
    }
    html {
      height: 100%;
      width: 100%;
      body {
        height: 100%;
        width: 100%;
        /* lora-regular - latin-ext_latin */
        @font-face {
          font-family: "Lora";
          font-style: normal;
          font-weight: 400;
          font-display:fallback;
          src: url("../fonts/lora-v16-latin-ext_latin-regular.eot"); /* IE9 Compat Modes */
          src: local(""),
            url("../fonts/lora-v16-latin-ext_latin-regular.eot?#iefix")
              format("embedded-opentype"),
            /* IE6-IE8 */ url("../fonts/lora-v16-latin-ext_latin-regular.woff2")
              format("woff2"),
            /* Super Modern Browsers */
              url("../fonts/lora-v16-latin-ext_latin-regular.woff")
              format("woff"),
            /* Modern Browsers */
              url("../fonts/lora-v16-latin-ext_latin-regular.ttf")
              format("truetype"),
            /* Safari, Android, iOS */
              url("../fonts/lora-v16-latin-ext_latin-regular.svg#Lora")
              format("svg"); /* Legacy iOS */
        }
        /* roboto-regular - latin-ext_latin */
        @font-face {
          font-family: "Roboto";
          font-style: normal;
          font-weight: 400;
          font-display:fallback;
          src: url("../fonts/roboto-v20-latin-ext_latin-regular.eot"); /* IE9 Compat Modes */
          src: local("Roboto"), local("Roboto-Regular"),
            url("../fonts/roboto-v20-latin-ext_latin-regular.eot?#iefix")
              format("embedded-opentype"),
            /* IE6-IE8 */
              url("../fonts/roboto-v20-latin-ext_latin-regular.woff2")
              format("woff2"),
            /* Super Modern Browsers */
              url("../fonts/roboto-v20-latin-ext_latin-regular.woff")
              format("woff"),
            /* Modern Browsers */
              url("../fonts/roboto-v20-latin-ext_latin-regular.ttf")
              format("truetype"),
            /* Safari, Android, iOS */
              url("../fonts/roboto-v20-latin-ext_latin-regular.svg#Roboto")
              format("svg"); /* Legacy iOS */
        }
        background-color: ${(props) => props.theme.colors.white};
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          color: ${(props) => props.theme.colors.text};
          font-family: "Lora";
        }
        p,
        li,
        ul,
        label {
          color: ${(props) => props.theme.colors.text};
          font-family: "Roboto";
        }
        #toast-page-section {
          min-height: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
      }
    }
  `;
export const GlobalStyles = createGlobalStyles`
    * {
      box-sizing: "border-box";
      margin: 0;
      padding: 0;
    }
    html {
      height: 100%;
      width: 100%;
      body {
        height: 100%;
        width: 100%;
        /* lora-regular - latin-ext_latin */
        @font-face {
          font-family: "Lora";
          font-style: normal;
          font-weight: 400;
          font-display:fallback;
          src: url("fonts/lora-v16-latin-ext_latin-regular.eot"); /* IE9 Compat Modes */
          src: local(""),
            url("fonts/lora-v16-latin-ext_latin-regular.eot?#iefix")
              format("embedded-opentype"),
            /* IE6-IE8 */ url("./fonts/lora-v16-latin-ext_latin-regular.woff2")
              format("woff2"),
            /* Super Modern Browsers */
              url("./fonts/lora-v16-latin-ext_latin-regular.woff")
              format("woff"),
            /* Modern Browsers */
              url("./fonts/lora-v16-latin-ext_latin-regular.ttf")
              format("truetype"),
            /* Safari, Android, iOS */
              url("./fonts/lora-v16-latin-ext_latin-regular.svg#Lora")
              format("svg"); /* Legacy iOS */
        }
        /* roboto-regular - latin-ext_latin */
        @font-face {
          font-family: "Roboto";
          font-style: normal;
          font-weight: 400;
          font-display:fallback;
          src: url("fonts/roboto-v20-latin-ext_latin-regular.eot"); /* IE9 Compat Modes */
          src: local("Roboto"), local("Roboto-Regular"),
            url("fonts/roboto-v20-latin-ext_latin-regular.eot?#iefix")
              format("embedded-opentype"),
            /* IE6-IE8 */ url("fonts/roboto-v20-latin-ext_latin-regular.woff2")
              format("woff2"),
            /* Super Modern Browsers */
              url("fonts/roboto-v20-latin-ext_latin-regular.woff")
              format("woff"),
            /* Modern Browsers */
              url("fonts/roboto-v20-latin-ext_latin-regular.ttf")
              format("truetype"),
            /* Safari, Android, iOS */
              url("fonts/roboto-v20-latin-ext_latin-regular.svg#Roboto")
              format("svg"); /* Legacy iOS */
        }
        background-color: ${(props) => props.theme.colors.white};
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          color: ${(props) => props.theme.colors.text};
          font-family: "Lora";
        }
        p,
        li,
        ul,
        label {
          color: ${(props) => props.theme.colors.text};
          font-family: "Roboto";
        }
        #toast-page-section {
          min-height: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
      }
    }
  `;

export const Footer = () => {
  return (
    <Flex
      style={{ maxHeight: "1em", flex: 0 }}
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
    >
      <footer>
        <Copyright />
      </footer>
    </Flex>
  );
};
