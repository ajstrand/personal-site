import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import styled from "styled-components";
import ResumeContent from '../components/ResumeContent';
import {BaseText, StyledLink} from "../components/componentsList"

const ResumeContainer = styled.div`
padding:0.5em;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
`;

const Resume = (props) => {
  const { data, location } = props
  const siteTitle = data.site.siteMetadata.title
  const resume = data.allFile.edges[0].node.publicURL
  const projects = data.allProjectsJson.edges
  const resumeLink =  <StyledLink aria-label="resume" target="_blank" href={resume}>here</StyledLink>
  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title="Resume" />
      <ResumeContainer>
          <ResumeContent list={projects} />
        <BaseText> You can download a copy of my resume {resumeLink}</BaseText>
        <BaseText>Resume design forked from <StyledLink href="https://twitter.com/isabelacmor">@isabelacmor</StyledLink></BaseText>
      </ResumeContainer>
    </Layout>
  )
}

export default Resume

export const resumeQuery = graphql`
  query  ResumeQuery {
    site {
      siteMetadata {
        title
      }
    }
      allFile(filter: { extension: { eq: "pdf" } }) {
        edges {
          node {
            publicURL
          }
        }
      }
      allProjectsJson {
        edges {
          node {
            title
            desc,
            date
          }
        }
      }
  }
`

//resume: file(absolutePath: { regex: "/alex_strand_resume.pdf/" })
