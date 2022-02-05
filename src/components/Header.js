/** @jsx jsx */
import { jsx, css } from "@emotion/core";

import SiteNav from "./SiteNav.js";

import { useMediaQuery } from "./useMediaQuery.js";

import CreateEl from "../CreateEl.js";
import MobileMenu from "./MobileMenu.js";

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
  return <CreateEl tag="header" obj={style} {...props}></CreateEl>;
};

export default () => {
  let isPageSmall = useMediaQuery("(max-width:  500px)");
  return (
    <Header>
      {isPageSmall && <MobileMenu />}
      {isPageSmall === false && <SiteNav />}
    </Header>
  );
};
