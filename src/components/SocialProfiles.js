/** @jsx h */
/** @jsxFrag Fragment */
import { h, Fragment } from "preact";
import { useContext } from "preact/hooks";
import { Theme } from "./theme.js";
import { css } from "@emotion/core";

const GithubIcon = () => (
  <img alt="github company logo" src="./assets/svgs/github.svg" />
);
const LinkedinIcon = () => (
  <img alt="linkedin company logo" src="./assets/svgs/linkedin.svg" />
);

import CreateEl from "../CreateEl.js";

const StyledAnchorTag = (props) => {
  const theme = useContext(Theme);
  const style = css`
    margin: 0.5em;
    color: ${theme.colors.text};
  `;
  return <CreateEl tag="a" obj={style} {...props}></CreateEl>;
};

const SocialProfiles = () => {
  const data = [
    {
      aria: "Github",
      href: "https://github.com/ajstrand",
      icon: <GithubIcon />,
    },
    {
      aria: "Linkedin",
      href: "https://www.linkedin.com/in/ajstrand",
      icon: <LinkedinIcon />,
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
