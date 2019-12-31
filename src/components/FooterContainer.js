import React from "react";

import Copyright from "./Copyright";

import styled from "styled-components";
import SiteNav from "./SiteNav";


const Footer = styled.footer`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
height: 100%;
@media screen and (max-width: 30em) {
  padding: 10px;
}
`;

const FooterContainer = () => {
  return (
    <Footer>
      <SiteNav />
      <Copyright />
    </Footer>
  )
}

export default FooterContainer;