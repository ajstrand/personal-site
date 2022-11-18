/** @jsx h */

import { h } from "preact";
import { useTheme } from "../components/theme.js";

import Bio from "../components/Bio.js";
import { Flex } from "../components/componentsList.js";

import { setup, css, styled as gCSS } from "goober";

setup(h, undefined, useTheme);

const PlaceholderPage = gCSS(Flex)`
height: 100vh;
flex-direction: column;
align-items:center;
justify-content:center;
width: 100%;
flex: 1;
`;

const Item = gCSS(Flex)`
  height: 100vh;
  flex-direction: column;
  width: 100%;
  flex: 1;
  `;

const IndexPage = () => {
  const theme = useTheme();
  const mediaStyles = css`
    @media screen and (max-width: 30em) {
      padding: 15px;
    }
  `;

  return (
    <PlaceholderPage>
      <span class="inline-block bg-gradient-to-r from-teal-400 via-slate-700 to-red-500 bg-clip-text text-transparent text-4xl">
        This site is undergoing a redesign
      </span>
      {/* <Bio theme={theme} className={mediaStyles} /> */}
    </PlaceholderPage>
  );
};

export default IndexPage;
