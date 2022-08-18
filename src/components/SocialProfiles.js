/** @jsx h */
/** @jsxFrag Fragment */
import { h, Fragment } from "preact";
import { useTheme } from "./theme.js";
import { styled, setup } from "goober";

setup(h, undefined, useTheme);

const GithubIcon = () => (
  <img alt="github company logo" src="./assets/svgs/github.svg" />
);
const LinkedinIcon = () => (
  <img alt="linkedin company logo" src="./assets/svgs/linkedin.svg" />
);

const StyledAnchorTag = styled("a")`
  margin: 0.5em;
  color: ${(props) => props.theme.colors.text};
`;

const SocialProfiles = (props) => {
  const theme = useTheme();
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
        <StyledAnchorTag theme={theme} aria-label={item.aria} href={item.href}>
          {item.icon}
        </StyledAnchorTag>
      ))}
    </Fragment>
  );
};

export default SocialProfiles;
