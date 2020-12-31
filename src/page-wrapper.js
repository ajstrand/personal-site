/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { MDXProvider } from "@mdx-js/preact";
import facepaint from "facepaint";
import Header from "./temp/Header.js";
import ThemeWrap from "./temp/theme.js";

const mq = facepaint([
  "@media(min-width: 750px)",
  "@media(min-width: 1050px)",
  "@media(min-width: 1120px)",
]);

const pageColumnContentStyles = css`
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${mq({
    width: ["95%", "50%", "60%"],
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

const Main = ({ children, isPost }) => {
  let isPostStyles = isPost ? pageColumnContentStyles : null;
  const styles = css`
    flex: 1 1 0%;
    ${isPostStyles};
  `;
  return <main css={styles}>{children}</main>;
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
        <Main isPost={props.meta}>{children}</Main>
        <Footer />
      </MDXProvider>
    </ThemeWrap>
  );
};

export default PageWrapper;
