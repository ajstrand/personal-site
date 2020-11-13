/** @jsx jsx */
import { Fragment } from "preact";
import { jsx, css } from "@emotion/core";

// import { StyledResume } from "styled-resume";
import CreateEl from "../CreateEl.js";

import ResumeContent from "../temp/ResumeContent.js";

import projects from "../temp/projectsData.js";

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
  return (
    <CreateEl tag="div" obj={style}>
      {props.children}
    </CreateEl>
  );
};

// console.log(StyledResume);

const Resume = (props) => {
  //const { data, location } = props;
  //const resume = data.allFile.edges[0].node.publicURL;
  //const projects = data.allProjectsJson.edges;
  const resumeLink = (
    <a aria-label="resume" target="_blank" href={"./alex_strand_resume.pdf"}>
      here
    </a>
  );
  const DesignAttribution = (
    <a href="https://twitter.com/isabelacmor">@isabelacmor</a>
  );
  return (
    <Fragment>
      {/* <StyledResume /> */}
      <p> You can download a copy of my resume {resumeLink}</p>
      <p>Resume design forked from {DesignAttribution}</p>
      <ResumeContainer>
        <ResumeContent projects={projects} />
      </ResumeContainer>
    </Fragment>
  );
};

export default Resume;
