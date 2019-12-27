import React from 'react'

import "./layout.css";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const StyledAnchorTag = styled.a`
width: 25px;
color: #3a1c71;
margin: 0.5em;
`;

const SocialProfiles = () => {
  return (
    <>
    <StyledAnchorTag
        aria-label="Twiiter"
        href="https://twitter.com/_alex_strand"
      >
        <FontAwesomeIcon icon={faTwitter} />
      </StyledAnchorTag>
      <StyledAnchorTag
        aria-label="Github"
        href="https://github.com/ajstrand"
      >
        <FontAwesomeIcon icon={faGithub} />
      </StyledAnchorTag>
      <StyledAnchorTag
        aria-label="Linkedin"
        href="https://www.linkedin.com/in/ajstrand"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </StyledAnchorTag>
      </>
  )
}

export default SocialProfiles;