/** @jsx jsx */
import { jsx, css } from "@emotion/core";

import Bio from "../temp/Bio.js";
import CreateEl from "../CreateEl.js";

import { Flex } from "../temp/componentsList.js";
import StyledResume from "styled-resume";
const Item = (props) => {
  const style = css`
    flex-direction: column;
    width: 100%;
    flex: 1;
  `;
  return <CreateEl tag={Flex} obj={style} {...props} height="100%"></CreateEl>;
};
export default () => {
  const mediaStyles = css`
    @media screen and (max-width: 30em) {
      padding: 15px;
    }
  `;
  return (
    // <Item>
    //   <Bio css={mediaStyles} />
    // </Item>
    <StyledResume />
  );
};
