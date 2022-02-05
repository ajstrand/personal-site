/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { h } from "preact";

import SiteNav from "./SiteNav.js";

import { useMediaQuery } from "./useMediaQuery.js";

import MobileMenu from "./MobileMenu.js";

import { styled, setup } from "goober";

setup(h);

export const Header = styled("header")`
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

export default () => {
  let isPageSmall = useMediaQuery("(max-width:  500px)");
  return (
    <Header>
      {isPageSmall && <MobileMenu />}
      {isPageSmall === false && <SiteNav />}
    </Header>
  );
};
