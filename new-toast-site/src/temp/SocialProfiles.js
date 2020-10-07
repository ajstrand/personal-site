/** @jsx h */
/** @jsxFrag Fragment */
import { h, Fragment } from "preact";

import styled from "@emotion/styled";
import { GitHub, Twitter, Linkedin } from "react-feather";

const StyledAnchorTag = styled.a`
  margin: 0.5em;
  color: ${(props) => props.theme.colors.text};
`;

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
