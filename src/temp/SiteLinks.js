/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from "preact";
import { css } from "@emotion/core";

import { SiteLink } from "./componentsList.js";

import tags from "../tags.js";

const createEl = (tag, obj) => {
  let X = tags[tag] || tag;
  return <X css={obj}></X>;
};

export const PageLink = () => {
  const style = css`
    margin: 0 1em 0 1em;
  `;
  return createEl(SiteLink, style);
};

const nav = [
  { displayName: "Home", url: "/" },
  { displayName: "Garden", url: "/garden" },
  { displayName: "Resume", url: "/resume" },
  { displayName: "Projects", url: "/projects" },
];
const SiteLinks = () => {
  return (
    <Fragment>
      {nav.map((item) => {
        const { url, displayName } = item;
        return <PageLink href={url}>{displayName}</PageLink>;
      })}
    </Fragment>
  );
};

export default SiteLinks;
