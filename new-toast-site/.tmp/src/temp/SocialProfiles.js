/** @jsx h */
/** @jsxFrag Fragment */
import { h, Fragment } from "preact";
import styled from "@emotion/styled";
import { GitHub, Twitter, Linkedin } from "react-feather";
const StyledAnchorTag = styled.default.a`\n  margin: 0.5em;\n  color: ${(
  props
) => props.theme.colors.text};\n`;
const SocialProfiles = () => {
  const data = [
    {
      aria: "Twitter",
      href: "https://twitter.com/_alex_strand",
      icon: h(Twitter, null),
    },
    {
      aria: "Github",
      href: "https://github.com/ajstrand",
      icon: h(GitHub, null),
    },
    {
      aria: "Linkedin",
      href: "https://www.linkedin.com/in/ajstrand",
      icon: h(Linkedin, null),
    },
  ];
  return h(
    Fragment,
    null,
    data.map((item) =>
      h(
        StyledAnchorTag,
        {
          "aria-label": item.aria,
          href: item.href,
        },
        item.icon
      )
    )
  );
};
export default SocialProfiles;
