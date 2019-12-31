import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import { rhythm } from '../utils/typography'
import styled from "styled-components";
import { Header1, Header3 } from '../components/componentsList'
import {externalLinkText} from "../utils/helpers"
const ProjectsContainer = styled.div`
flex-basis:100%;
padding:0.5em;
display:flex;
flex-direction:column;
 height:100%;
overflow-y:scroll;
`;

const ProjectsContentList = styled.main`
flex-basis:95%;
padding: 1rem;
display: flex;
justify-content: center;
align-items: flex-start;
flex-direction: column;
@media screen and (min-width: 30em) {
  flex-basis: 70%;
}
`;

const Projects = (props) => {
    const { data, location } = props
    const siteTitle = data.site.siteMetadata.title
    const projects = data.allProjectsJson.edges

    return (
      <Layout location={location} title={siteTitle}>
        <SEO
          title="projects list"
          keywords={[`javascript`, `react`, `css`, `css-grid`, "node.js"]}
        />
        <ProjectsContainer>
          <ProjectsContentList>
        <Header1 style={{ marginTop:"1rem",
}}>Projects</Header1>
        {projects.map(({ node }) => {
          const desc = node.desc
          const title = node.title
          const link = node.link
          const anchorTag = externalLinkText(link, title, `${title} project URL`)
          return (
            <section key={node.title}>
              <Header3
                style={{
                  marginTop:"1rem",
                  marginBottom: rhythm(1 / 4),
                }}
              >
                {anchorTag}
              </Header3>
              <p dangerouslySetInnerHTML={{ __html: desc }} />
            </section>
          )
        })}
        </ProjectsContentList>
          </ProjectsContainer>
      </Layout>
    )
  }

export default Projects

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allProjectsJson {
      edges {
        node {
          title
          link
          desc
        }
      }
    }
  }
`
