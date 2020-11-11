/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import tags from "../tags.js";

const createEl = (tag, obj) => {
  let X = tags[tag] || tag;
  return <X css={obj}></X>;
};

export const SmallText = () => {
  const style = css`
    margin-bottom: 5px;
    font-size: 9px;
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  `;
  return createEl(p, style);
};

const Copyright = () => {
  const currentYear = new Date().getFullYear();
  return <SmallText>© {currentYear} Alex Strand.</SmallText>;
};

export default Copyright;
