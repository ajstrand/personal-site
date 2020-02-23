import React from "react";
import { InternalSiteLink } from "./componentsList";
import styled from "styled-components";
const PageLink = styled(InternalSiteLink)`
  margin: 0 1em 0 1em;
`;
const SiteLinks = () => {
  return (
    <>
      <PageLink to="/resume">Resume</PageLink>
      <PageLink to="/projects">Projects</PageLink>
      <PageLink to="/">Home</PageLink>
      <PageLink to="/posts">Blog</PageLink>
    </>
  );
};

export default SiteLinks;
