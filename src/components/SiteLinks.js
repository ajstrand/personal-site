/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from "preact";
import { Theme, useTheme } from "./theme.js";
import { SiteLink } from "./componentsList.js";
import { styled, setup } from "goober";

setup(h, undefined, useTheme);

export const PageLink = styled(SiteLink)`
  margin: 0 1em 0 1em;
  font-family: "Lora";
`;

const nav = [
  { displayName: "Home", url: "/" },
  { displayName: "Garden", url: "/garden" },
  { displayName: "Resume", url: "/resume" },
  { displayName: "Projects", url: "/projects" },
];
const SiteLinks = (props) => {
  const theme = useTheme();
  return (
    <Fragment>
      {nav.map((item) => {
        const { url, displayName } = item;
        return (
          <PageLink theme={theme} href={url}>
            {displayName}
          </PageLink>
        );
      })}
    </Fragment>
  );
};

export default SiteLinks;
