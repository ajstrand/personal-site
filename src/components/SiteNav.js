import React from 'react'

import SocialProfiles from "./SocialProfiles";
import SiteLinks from "./SiteLinks";

import styled from "styled-components";

const LinksBox = styled.nav`
width: 100%;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
align-items: center;
`;
const SiteNav = () => {
  return (
    <LinksBox>
    <SiteLinks/> 
    <SocialProfiles/>
  </LinksBox>
  )
}

export default SiteNav