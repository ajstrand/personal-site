/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from "preact";
import { css } from "@emotion/core";

import { SiteLink } from "./componentsList.js";

import CreateEl from "../CreateEl.js";

export const PageLink = (props) => {
  const style = css`
    margin: 0 1em 0 1em;
    font-family: "Lora";
  `;
  return <CreateEl tag={SiteLink} obj={style} {...props}></CreateEl>;
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
