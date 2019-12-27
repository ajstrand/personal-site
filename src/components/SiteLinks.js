import React from "react";
import { Link } from "gatsby";

import "./layout.css";

import styled from "styled-components";

const SiteLink = styled(Link)`
margin: 0 0.5em 0 0.5em;
color: #3a1c71;
boxShadow:none;
@media screen and (min-width: 30em) {
  font-size: 15px;
}
`;
const SiteLinks = () => {
  return (
    <>
    <SiteLink to="/resume">
        Resume
      </SiteLink>
      <SiteLink to="/projects">
        Projects
      </SiteLink>
      <SiteLink to="/">
        Home
      </SiteLink>
      <SiteLink to="/posts">
        Blog
      </SiteLink>
      </>
  )
}

export default SiteLinks;