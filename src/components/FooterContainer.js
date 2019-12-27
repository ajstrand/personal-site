import React from "react";

import CopyrightWrapper from "./Copyright";

import styled from "styled-components";
import SiteNav from "./SiteNav";


const BottomContent = styled.footer`
background-color: #ffaf7b;
height: 100%;
@media screen and (max-width: 30em) {
  padding: 10px;
}
`;

 const FooterContainer = () => {
  return (
    <BottomContent>
    <SiteNav/>
    <CopyrightWrapper/>
  </BottomContent>
  )
}

export default FooterContainer;