/** @jsx jsx */
import { useState } from "preact/hooks";
import { Fragment } from "preact";

import { Theme } from "./theme.js";
import { jsx, css } from "@emotion/core";

import SiteNav from "./SiteNav.js";

import { styled, setup } from "goober";

setup(h);

const Menu = styled("buuton")`
  border: none;
  border-radius: 5px;
  padding: 0.5em;
  background-color: coral;
  cursor: pointer;
  appearence: none;
`;

function MobileMenu() {
  const [state, setData] = useState(false);
  if (state) {
    return (
      <>
        <Menu onClick={() => setData(false)}>Menu</Menu>
        <SiteNav />
      </>
    );
  }
  return <Menu onClick={() => setData(true)}>Menu</Menu>;
}

export default MobileMenu;
