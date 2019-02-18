import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import styled from "styled-components";

const ResumeContainer = styled.div `
padding:0.5em;
display:flex;
flex-direction:column;
 height:100%;
 align-items:center;
`;

const Text = styled.p `
color:#542344;
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
    <a target="_blank" href={resume}> here</a>
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
