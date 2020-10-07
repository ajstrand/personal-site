/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from "preact";
import styled from "@emotion/styled";
import { SiteLink } from "./componentsList";

const PageLink = styled(SiteLink)`
  margin: 0 1em 0 1em;
`;
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
