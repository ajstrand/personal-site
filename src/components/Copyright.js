import React from "react";
import { BaseText } from "./componentsList";
import { externalLinkText } from "../utils/helpers";

const Copyright = () => {
  const GatsbyLink = externalLinkText(
    "https://gatsbyjs.org",
    "Gatsby",
    "Gatsby framework website url",
    "general"
  );
  const NetlifyLink = externalLinkText(
    "https://www.netlify.com",
    "Netlify",
    "Netlify website URL",
    "general"
  );
  const currentYear = new Date().getFullYear();
  const textStrings = [
    <span>Alex Strand. Built with</span>,
    <span>and hosted on</span>
  ];
  const Content = () => (
    <>
      © {currentYear} {textStrings[0]} <GatsbyLink /> {textStrings[1]}{" "}
      <NetlifyLink />
    </>
  );
  return (
    <BaseText>
      <Content />
    </BaseText>
  );
};

export default Copyright;
