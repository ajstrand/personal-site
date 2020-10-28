/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from "preact";
import styled from "@emotion/styled";
import { SiteLink } from "./componentsList.js";
const PageLink = styled.default(SiteLink)`\n  margin: 0 1em 0 1em;\n`;
const nav = [
  {
    displayName: "Home",
    url: "/",
  },
  {
    displayName: "Garden",
    url: "/garden",
  },
  {
    displayName: "Resume",
    url: "/resume",
  },
  {
    displayName: "Projects",
    url: "/projects",
  },
];
const SiteLinks = () => {
  return h(
    Fragment,
    null,
    nav.map((item) => {
      const { url, displayName } = item;
      return h(
        PageLink,
        {
          href: url,
        },
        displayName
      );
    })
  );
};
export default SiteLinks;
