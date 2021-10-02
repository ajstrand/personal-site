/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import CreateEl from "../CreateEl.js";

export const SmallText = (props) => {
  const style = css`
    margin-bottom: 5px;
    font-size: 9px;
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  `;
  return <CreateEl tag="p" obj={style} {...props}></CreateEl>;
};

const Copyright = () => {
  const currentYear = new Date().getFullYear();
  return <SmallText>© {currentYear} Alex Strand.</SmallText>;
};

export default Copyright;
