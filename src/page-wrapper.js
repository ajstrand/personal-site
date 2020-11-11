/** @jsx jsx */
import { jsx, Global, css } from "@emotion/core";
import { Helmet } from "react-helmet";
import { MDXProvider } from "@mdx-js/preact";
import { Fragment } from "preact";

import Theme from "./temp/theme.js";

import tags from "./tags.js";

import { Flex } from "./temp/componentsList.js";

import Header from "./temp/Header.js";
import Copyright from "./temp/Copyright.js";

const createEl = (tag, obj) => {
  let X = tags[tag] || tag;
  return <X css={obj}></X>;
};

const StyledSummary = () => {
  //color: ${(props) => props.theme.colors.white};
  //background-color: ${(props) => props.theme.colors.black};
  const style = css`
    color: hotpink;
  `;
  return createEl("summary", style);
};

const StyledDetails = () => {
  const style = css`
    & black-lives {
      padding: 15px;
      width: fit-content;
    }
  `;
  return createEl("details", style);
};

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
    {/* <script src="../test/emotion.esm.js" type="module"></script> */}
  </Helmet>
);
const GlobalStyles = () => {
  const style = css`
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
  return createEl(Global, style);
};

const Footer = () => {
  return (
    <Flex
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

const Obj = {};

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
      <Flex flexDirection="column" height="100vh">
        <GlobalStyles />
        <Details />
        <Header />
        <MDXProvider components={Obj}>
          <Fragment>{children}</Fragment>
        </MDXProvider>
        <Footer flex="0" />
      </Flex>
    </Theme>
  );
};
