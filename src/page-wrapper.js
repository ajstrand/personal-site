/** @jsx jsx */
import { jsx } from "@emotion/core";
import { MDXProvider } from "@mdx-js/preact";
import { Flex } from "./temp/componentsList.js";

import Header from "./temp/Header.js";
import ThemeWrap from "./temp/theme.js";

import CreateEl from "./CreateEl";

import {
  MetaDetails,
  GlobalStyles,
  Details,
  Footer,
} from "./sharedComponents.js";

const Obj = {};

const PageWrapper = ({ children, ...props }) => {
  let title = "Alex Strand's Digital Garden";
  let description = "MDX, Svelte, Kotlin, Rust";
  const { posts } = props;
  console.log(posts);
  return (
    <ThemeWrap>
      <MDXProvider>
        <Flex flexDirection="column" height="100vh">
          <GlobalStyles />
          <MetaDetails title={title} description={description} />
          <Details />
          <Header />
          {children}
          <Footer flex="0" />
        </Flex>
      </MDXProvider>
    </ThemeWrap>
  );
};

export default PageWrapper;
