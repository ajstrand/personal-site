/** @jsx jsx */
import { jsx, css } from "@emotion/core";

import SiteNav from "./SiteNav.js";

import tags from "../tags.js";

const createEl = (tag, obj) => {
  let X = tags[tag] || tag;
  return <X css={obj}></X>;
};

export const Header = () => {
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
  return createEl("header", style);
};

export default () => {
  return (
    <Header>
      <SiteNav />
    </Header>
  );
};
