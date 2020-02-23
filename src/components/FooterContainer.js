import React from "react";
import Copyright from "./Copyright";
import styled from "styled-components";
import SiteNav from "./SiteNav";

const Footer = styled.footer`
  @media screen {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  @media screen and (max-width: 30em) {
    padding: 10px;
  }
  @media print {
    display: none;
  }
`;

const FooterContainer = () => {
  return (
    <Footer>
      <SiteNav />
      <Copyright />
    </Footer>
  );
};

export default FooterContainer;
