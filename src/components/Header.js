/** @jsx jsx */
import { jsx } from "@emotion/core";
import { h } from "preact";

import SiteNav from "./SiteNav.js";

import { useMediaQuery } from "./useMediaQuery.js";

import MobileMenu from "./MobileMenu.js";

import { styled, setup } from "goober";

import { useTheme } from "../components/theme.js";

setup(h, undefined, useTheme);

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

export default (props) => {
  let isPageSmall = useMediaQuery("(max-width:  500px)");
  return (
    <Header>
      {isPageSmall && <MobileMenu />}
      {isPageSmall === false && <SiteNav />}
    </Header>
  );
};
