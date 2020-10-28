/** @jsx jsx */
import { Fragment } from "preact";
import { jsx } from "@emotion/core";
const maxWidth = "800px";
import styled from "@emotion/styled";
//import ResumeContent from "../customComponents/ResumeContent";
// import { StyledResume } from "styled-resume";

const ResumeContainer = styled.div`
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
