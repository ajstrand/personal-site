/** @jsx jsx */
import { useState } from "preact/hooks";
import { h, Fragment } from "preact";

import { jsx } from "@emotion/core";

import SiteNav from "./SiteNav.js";

import { styled, setup } from "goober";

setup(h);

const Menu = styled("button")`
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
      <Fragment>
        <Menu onClick={() => setData(false)}>Menu</Menu>
        <SiteNav />
      </Fragment>
    );
  }
  return <Menu onClick={() => setData(true)}>Menu</Menu>;
}

export default MobileMenu;
