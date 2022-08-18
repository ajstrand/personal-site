/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { h } from "preact";

//import StyledResume from "styled-resume";

import { Flex } from "../components/componentsList.js";
import { resumeDataObj } from "../components/ResumeContent.js";

import { styled, setup } from "goober";

setup(h);

const Wrap = styled(Flex)`
  height: 100vh;
  padding: 0.5em;
  flex-direction: column;
  flex-basis: 70%;
  flex: 1;
  @media screen and (max-width: 30em) {
    padding: 15px;
  }
`;

const ResumeContainer = styled("div")`
  @media screen {
    padding: 2em;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  @media print {
    & p {
      display: none;
    }
  }
`;

const Resume = (props) => {
  const resumeLink = (
    <a
      aria-label="resume"
      target="_blank"
      href={"./resume/alex_strand_resume.pdf"}
    >
      here
    </a>
  );
  const DesignAttribution = (
    <a href="https://twitter.com/isabelacmor">@isabelacmor</a>
  );
  const smallScreenStyles = css`
    padding: 4em;
    margin-top: 2em;
    @media screen and (max-width: 30em) {
      padding: 0.5em;
    }
    @media screen and (min-width: 1200px) {
      width: 950px;
    }
  `;
  return (
    <Wrap>
      <p> You can download a copy of my resume {resumeLink}</p>
      <p>Resume design forked from {DesignAttribution}</p>
      <section css={smallScreenStyles}>
        {/* <StyledResume config={resumeDataObj} /> */}
      </section>
    </Wrap>
  );
};

export default Resume;
