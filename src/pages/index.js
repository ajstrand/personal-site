/** @jsx jsx */

import { jsx } from "@emotion/core";
import { h } from "preact";
import { useTheme } from "../components/theme.js";

import Bio from "../components/Bio.js";
import { Flex } from "../components/componentsList.js";

import { styled, setup, css } from "goober";

setup(h, undefined, useTheme);

const Item = styled(Flex)`
  height: 100vh;
  flex-direction: column;
  width: 100%;
  flex: 1;
`;
export default () => {
  const theme = useTheme();
  const mediaStyles = css`
    @media screen and (max-width: 30em) {
      padding: 15px;
    }
  `;
  return (
    <Item>
      <Bio theme={theme} className={mediaStyles} />
    </Item>
  );
};
