/** @jsx h */
/** @jsxFrag Fragment */
import { h, Fragment } from "preact";
import { css } from "@emotion/core";

import { GitHub, Twitter, Linkedin } from "react-feather";

import tags from "./tags.js";

const createEl = (tag, obj) => {
  let X = tags[tag] || tag;
  return <X css={obj}></X>;
};

const StyledAnchorTag = () => {
  const style = css`
    margin: 0.5em;
    color: ${(props) => props.theme.colors.text};
  `;
  return createEl("a", style);
};

const SocialProfiles = () => {
  const data = [
    {
      aria: "Twitter",
      href: "https://twitter.com/_alex_strand",
      icon: <Twitter />,
    },
    { aria: "Github", href: "https://github.com/ajstrand", icon: <GitHub /> },
    {
      aria: "Linkedin",
      href: "https://www.linkedin.com/in/ajstrand",
      icon: <Linkedin />,
    },
  ];

  return (
    <Fragment>
      {data.map((item) => (
        <StyledAnchorTag aria-label={item.aria} href={item.href}>
          {item.icon}
        </StyledAnchorTag>
      ))}
    </Fragment>
  );
};

export default SocialProfiles;
