/** @jsx jsx */
import { Fragment } from "preact";
import { jsx } from "@emotion/core";
// console.log(StyledResume);
const Resume = (props) => {
  //const { data, location } = props;
  //const resume = data.allFile.edges[0].node.publicURL;
  //const projects = data.allProjectsJson.edges;
  const resumeLink = jsx(
    "a",
    {
      "aria-label": "resume",
      target: "_blank",
      href: "./alex_strand_resume.pdf",
    },
    "here"
  );
  const DesignAttribution = jsx(
    "a",
    {
      href: "https://twitter.com/isabelacmor",
    },
    "@isabelacmor"
  );
  return jsx(
    Fragment,
    null,
    jsx("p", null, " You can download a copy of my resume ", resumeLink),
    jsx("p", null, "Resume design forked from ", DesignAttribution)
  );
};
export default Resume;
