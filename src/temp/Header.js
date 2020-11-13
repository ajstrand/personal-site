/** @jsx jsx */
import { jsx, css } from "@emotion/core";

import SiteNav from "./SiteNav.js";

import CreateEl from "../CreateEl.js";

export const Header = (props) => {
  const style = css`
    @media screen {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    @media screen and (max-width: 30em) {
      padding: 10px;
    }
    @media print {
      display: none;
    }
  `;
  return (
    <CreateEl tag="header" obj={style}>
      {props.children}
    </CreateEl>
  );
};

export default () => {
  return (
    <Header>
      <SiteNav />
    </Header>
  );
};
