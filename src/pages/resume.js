/** @jsx jsx */
import { jsx, css } from "@emotion/core";

// import { StyledResume } from "styled-resume";
import CreateEl from "../CreateEl.js";

import ResumeContent from "../temp/ResumeContent.js";

import projects from "../temp/projectsData.js";
import { Flex } from "../temp/componentsList.js";

const Wrap = (props) => {
  const style = css`
    padding: 0.5em;
    flex-direction: column;
    width: 70%;
    flex: 1;
    @media screen and (max-width: 30em) {
      padding: 15px;
    }
  `;
  return <CreateEl tag={Flex} obj={style} {...props}></CreateEl>;
};

const ResumeContainer = (props) => {
  const style = css`
    @media screen {
      padding: 0.5em;
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
  return <CreateEl tag="div" obj={style} {...props}></CreateEl>;
};

// console.log(StyledResume);

const Resume = (props) => {
  const resumeLink = (
    <a aria-label="resume" target="_blank" href={"./alex_strand_resume.pdf"}>
      here
    </a>
  );
  const DesignAttribution = (
    <a href="https://twitter.com/isabelacmor">@isabelacmor</a>
  );
  return (
    <Wrap>
      {/* <StyledResume /> */}
      <p> You can download a copy of my resume {resumeLink}</p>
      <p>Resume design forked from {DesignAttribution}</p>
      {/* <ResumeContainer>
        <ResumeContent projects={projects} />
      </ResumeContainer> */}
    </Wrap>
  );
};

export default Resume;
