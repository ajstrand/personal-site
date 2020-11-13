/** @jsx jsx */
import { jsx, css } from "@emotion/core";

import Bio from "../temp/Bio.js";

import CreateEl from "../CreateEl.js";

import { Flex } from "../temp/componentsList.js";

const Item = (props) => {
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
  return (
    <CreateEl tag={Flex} obj={style}>
      {props.children}
    </CreateEl>
  );
};
export default () => {
  return (
    <Item>
      <p>some really cool content</p>
      <Bio />
    </Item>
  );
};
