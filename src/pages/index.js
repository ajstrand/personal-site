/** @jsx h */

import { h } from "preact";
import { useTheme } from "../components/theme.js";

import Bio from "../components/Bio.js";
import { Flex } from "../components/componentsList.js";

import { setup, css, styled as gCSS } from "goober";
// import pkg from 'twin.macro';
// const { styled } = pkg;

setup(h, undefined, useTheme);

const Item = gCSS(Flex)`
  height: 100vh;
  flex-direction: column;
  width: 100%;
  flex: 1;
  `;

//   const Button = styled.button`

//   ${()=> tw`px-8 py-2 rounded focus:outline-none transform duration-75`},
// `;
export default () => {
  const theme = useTheme();
  const mediaStyles = css`
    @media screen and (max-width: 30em) {
      padding: 15px;
    }
  `;
  return (
    <Item>
      {/* <Button>hello test</Button> */}
      {/* <div class="bg-coral-300 p-5">
        <h1 class="text-mainTextColor text-3xl">Hello, Toast this is tailwind</h1>
      </div> */}
      <Bio theme={theme} className={mediaStyles} />
    </Item>
  );
};
