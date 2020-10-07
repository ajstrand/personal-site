/** @jsx jsx */
import { jsx, Global } from "@emotion/core";
import { Helmet } from "react-helmet";
import { MDXProvider } from "@mdx-js/preact";
import { Fragment } from "preact";

import styled from "@emotion/styled";
import Theme from "./temp/theme.js";

import { Flex } from "theme-ui";
import Header from "./temp/Header.js";
import Copyright from "./temp/Copyright.js";

const StyledSummary = styled.default.summary`
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.black};
`;

const StyledDetails = styled.default.details`
  & black-lives {
    padding: 15px;
    width: fit-content;
  }
`;

const Details = () => (
  <StyledDetails>
    <StyledSummary>Black Lives Matter</StyledSummary>
    <black-lives></black-lives>
  </StyledDetails>
);

const MetaDetails = ({ title, description }) => (
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
    <script
      src="https://unpkg.com/i-stand/black-lives.js"
      type="module"
    ></script>
  </Helmet>
);
const GlobalStyles = styled.default(Global)`
  /* lora-regular - latin-ext_latin */
  @font-face {
    font-family: "Lora";
    font-style: normal;
    font-weight: 400;
    src: url("fonts/lora-v16-latin-ext_latin-regular.eot"); /* IE9 Compat Modes */
    src: local(""),
      url("fonts/lora-v16-latin-ext_latin-regular.eot?#iefix")
        format("embedded-opentype"),
      /* IE6-IE8 */ url("fonts/lora-v16-latin-ext_latin-regular.woff2")
        format("woff2"),
      /* Super Modern Browsers */
        url("fonts/lora-v16-latin-ext_latin-regular.woff") format("woff"),
      /* Modern Browsers */ url("fonts/lora-v16-latin-ext_latin-regular.ttf")
        format("truetype"),
      /* Safari, Android, iOS */
        url("fonts/lora-v16-latin-ext_latin-regular.svg#Lora") format("svg"); /* Legacy iOS */
  }
  /* roboto-regular - latin-ext_latin */
  @font-face {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    src: url("fonts/roboto-v20-latin-ext_latin-regular.eot"); /* IE9 Compat Modes */
    src: local("Roboto"), local("Roboto-Regular"),
      url("fonts/roboto-v20-latin-ext_latin-regular.eot?#iefix")
        format("embedded-opentype"),
      /* IE6-IE8 */ url("fonts/roboto-v20-latin-ext_latin-regular.woff2")
        format("woff2"),
      /* Super Modern Browsers */
        url("fonts/roboto-v20-latin-ext_latin-regular.woff") format("woff"),
      /* Modern Browsers */ url("fonts/roboto-v20-latin-ext_latin-regular.ttf")
        format("truetype"),
      /* Safari, Android, iOS */
        url("fonts/roboto-v20-latin-ext_latin-regular.svg#Roboto") format("svg"); /* Legacy iOS */
  }
  * {
    box-sizing: "border-box";
    margin: 0;
    padding: 0;
  }
  html {
    min-height: 100vh;
    background-color: ${(props) => props.theme.colors.white};
  }
  body {
    min-height: 100vh;
    #toast-page-section {
      min-height: 100vh;
    }
  }
`;

const Obj = {
  // stuff you can style in MDX
};

const Footer = () => {
  return (
    <Flex
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <footer>
        <Copyright />
      </footer>
    </Flex>
  );
};

export default ({ children, ...props }) => {
  let title = "Alex Strand's Digital Garden";
  let description = "MDX, Svelte, Kotlin, Rust";
  if (props.title) {
    title = props.title;
    description = "";
  }
  return (
    <Theme>
      <MetaDetails title={title} description={description} />
      <Flex sx={{ flexDirection: "column", height: "100vh" }}>
        <GlobalStyles />
        <Details />
        <Header />
        <MDXProvider components={Obj}>
          <Fragment>{children}</Fragment>
        </MDXProvider>
        <Footer sx={{ flex: "0" }} />
      </Flex>
    </Theme>
  );
};
