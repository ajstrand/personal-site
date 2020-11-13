/** @jsx h */
/** @jsxFrag Fragment */
import { h, Fragment } from "preact";
import { useContext } from "preact/hooks";
import { Theme } from "./theme.js";
import { css } from "@emotion/core";

import { GitHub, Twitter, Linkedin } from "react-feather";

import CreateEl from "../CreateEl.js";

const StyledAnchorTag = (props) => {
  const theme = useContext(Theme);
  const style = css`
    margin: 0.5em;
    color: ${theme.colors.text};
  `;
  return (
    <CreateEl tag="a" obj={style}>
      {props.children}
    </CreateEl>
  );
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
