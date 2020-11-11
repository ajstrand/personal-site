/** @jsx jsx */
import { Fragment } from "preact";
import { jsx, css } from "@emotion/core";

import tags from "./tags.js";
//import ResumeContent from "../customComponents/ResumeContent";
// import { StyledResume } from "styled-resume";

const createEl = (tag, obj) => {
  let X = tags[tag] || tag;
  return <X css={obj}></X>;
};

const ResumeContainer = () => {
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
  return createEl(div, style);
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
      {/* <ResumeContainer>
        <ResumeContent list={projects} />
      </ResumeContainer> */}
    </Fragment>
  );
};

export default Resume;
