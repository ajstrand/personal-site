/** @jsx jsx */
import { jsx } from "@emotion/core";
import Bio from "../temp/Bio.js";
import styled from "@emotion/styled";
import pkg from "theme-ui";
const { Flex } = pkg;
const Item = styled(
  Flex
)`\n  padding: 0.5em;\n  flex-direction: column;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  flex: 1;\n  @media screen and (max-width: 30em) {\n    padding: 15px;\n  }\n`;
export default () => {
  return jsx(Item, null, jsx(Bio, null));
};
