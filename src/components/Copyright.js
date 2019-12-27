import React from 'react'

import styled from "styled-components";

const Copyright = styled.div`
color: #3a1c71;
font-size: 17px;
display: flex;
flex-shrink: 0;
flex-direction: row;
@media screen and (max-width: 30em) {
  justify-content: flex-start;
}
justify-content: center;
align-items: center;
`;

const StyledLink = styled.a`
color: #3a1c71;
font-size: 17px;
`;

const text = `
© ${new Date().getFullYear()} Alex Strand.`;
const externalLinkText = (link, text, ariaLabel) => 
<StyledLink aria-label={ariaLabel}
target="_blank" href={link}>{text}</StyledLink>

const gatsbyLink = externalLinkText("https://gatsbyjs.org", "Gatsby", "Gatsby framework website url")
const netlifyLink = externalLinkText("https://www.netlify.com", "Netlify", "Netlify website URL")

const CopyrightWrapper = () => {
  return(
    <Copyright>
        <p tabIndex={0}>{text} Built with {gatsbyLink} and hosted on {netlifyLink}</p>
    </Copyright>
  )

}

export default CopyrightWrapper