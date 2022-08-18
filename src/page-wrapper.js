/** @jsx jsx */
import { jsx } from "@emotion/core";
import { h } from "preact";
import { MDXProvider } from "@mdx-js/preact";
import Header from "./components/Header.js";

import { useTheme } from "./components/theme.js";
import { styled, setup, css } from "goober";

setup(h, undefined, useTheme);

export const sizes = {
  sm: "@media(min-width: 570px)",
  mid: "@media(min-width: 920px)",
  large: "@media(min-width: 1120px)",
};

const LeftFlex = styled(Flex)(
  ({ alignI }) => `
  ${sizes.sm} {
    align-items:"center";
  }
  ${sizes.mid || sizes.large} {
    align-items: "flex-start";
  }
`
);

const pageColumnContentStyles = css`
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${sizes.sm} {
    width: 95%;
  }
  ${sizes.mid} {
    width: 50%;
  }
  ${sizes.large} {
    width: 60%;
  }
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
  return <main className={styles}>{children}</main>;
};

const PageWrapper = ({ children, ...props }) => {
  const theme = useTheme();
  let title = "Alex Strand's Digital Garden";
  let description = "MDX, Svelte, Kotlin, Rust, Preact";
  return (
    <MDXProvider components={components}>
      {props.meta ? (
        <SpecialStyles theme={theme} props={"hello"} />
      ) : (
        <GlobalStyles theme={theme} />
      )}
      {/* <MetaDetails title={title} description={description} /> */}
      <section>{/* <Details /> */}</section>
      <Header theme={theme} />
      <Main isPost={props.meta}>{children}</Main>
      <Footer />
    </MDXProvider>
  );
};

export default PageWrapper;
