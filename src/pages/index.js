/** @jsx jsx */
import { jsx } from "@emotion/core";

import Bio from "../temp/Bio.js";
import styled from "@emotion/styled";
import pkg from "theme-ui";
const { Flex } = pkg;

const Item = styled(Flex)`
  padding: 0.5em;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex: 1;
  @media screen and (max-width: 30em) {
    padding: 15px;
  }
`;

export default () => {
  return (
    <Item>
      <Bio />
    </Item>
  );
};
