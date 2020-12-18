/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { MDXProvider } from "@mdx-js/preact";
import facepaint from "facepaint";
import Header from "./temp/Header.js";
import ThemeWrap from "./temp/theme.js";

const mq = facepaint([
  "@media(min-width: 570px)",
  "@media(min-width: 920px)",
  "@media(min-width: 1120px)",
]);

const styles = css`
  flex: 1 1 0%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${mq({
    width: ["95%", "50%", "50%"],
  })}
  margin: 0 auto;
`;

import {
  MetaDetails,
  GlobalStyles,
  Details,
  Footer,
  SpecialStyles,
} from "./sharedComponents.js";

const components = {
  codeblock: (props) => (
    <div
      style={{ backgroundColor: "rgba(26, 32, 44)" }}
      dangerouslySetInnerHTML={{ __html: props.children }}
    />
  ),
};

const PageWrapper = ({ children, ...props }) => {
  let title = "Alex Strand's Digital Garden";
  let description = "MDX, Svelte, Kotlin, Rust, Preact";
  return (
    <ThemeWrap>
      <MDXProvider components={components}>
        {props.meta ? <SpecialStyles props={"hello"} /> : <GlobalStyles />}
        <MetaDetails title={title} description={description} />
        <Details />
        <Header />
        {props.meta ? (
          <div css={styles}>{children}</div>
        ) : (
          <div style={{ flex: 1 }}>{children}</div>
        )}
        <Footer flex="0" />
      </MDXProvider>
    </ThemeWrap>
  );
};

export default PageWrapper;
