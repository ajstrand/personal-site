/** @jsx jsx */
import { jsx, css } from "@emotion/core";

import Bio from "../temp/Bio.js";

import { Flex } from "../temp/componentsList.js";

const createEl = (tag, obj) => {
  let X = tags[tag] || tag;
  return <X css={obj}></X>;
};

const Item = () => {
  const style = css`
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
  return createEl(Flex, style);
};
export default () => {
  return (
    <Item>
      <Bio />
    </Item>
  );
};
