/** @jsx jsx */
import { jsx } from "@emotion/core";
import { MDXProvider } from "@mdx-js/preact";

import Header from "./temp/Header.js";
import ThemeWrap from "./temp/theme.js";

import {
  MetaDetails,
  GlobalStyles,
  Details,
  Footer,
} from "./sharedComponents.js";

const Obj = {};

const PageWrapper = ({ children }) => {
  let title = "Alex Strand's Digital Garden";
  let description = "MDX, Svelte, Kotlin, Rust, Preact";
  return (
    <ThemeWrap>
      <MDXProvider>
        <GlobalStyles />
        <MetaDetails title={title} description={description} />
        <Details />
        <Header />
        <div style={{ flex: 1 }}>{children}</div>
        <Footer flex="0" />
      </MDXProvider>
    </ThemeWrap>
  );
};

export default PageWrapper;
