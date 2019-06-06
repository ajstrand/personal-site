import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import styled from "styled-components";

const ResumeContainer = styled.div `
padding:0.5em;
grid-row-start: 1;
  grid-row-end: 3;
grid-column-start:1;
  grid-column-end:end;
  display:flex;
  justify-content:center;
  align-items:center;
@media screen and (max-width:30em) {
  background-color:#3A1C71;
}
`;

const Text = styled.p `
color:#ffffff;
`;

const ResumeLink = styled.a `
  color:#ffffff;
`;

class Resume extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const resume = data.allFile.edges[0].node.publicURL
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="projects list"
          keywords={[`javascript`, `react`, `rails`]}
        />
        <ResumeContainer>
        <Text> You can download a copy of my resume
    <ResumeLink target="_blank" href={resume}> here</ResumeLink>
    </Text>
        </ResumeContainer>  
      </Layout>
    )
  }
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
  }
`

//resume: file(absolutePath: { regex: "/alex_strand_resume.pdf/" })
