import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import { rhythm } from '../utils/typography'
import styled from "styled-components";

const ProjectsContainer = styled.section `
width:100%;

padding:0.5em;
display:flex;
flex-direction:column;
 height:100%;
grid-column-start:1;
grid-column-end:end;
@media screen and (max-width:30em) {
  background-color:#D76D77;
grid-row-start: 1;
grid-row-end: 3;
}
`;

class Projects extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const projects = data.allProjectsJson.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="projects list"
          keywords={[`javascript`, `react`, `css`, `css-grid`, "node.js"]}
        />
        <ProjectsContainer>
        <h1 tabIndex={0} style={{ marginTop:"1rem",
}}>Projects</h1>
        {projects.map(({ node }) => {
          const desc = node.desc
          const title = node.title
          const link = node.link
          return (
            <section key={node.title}>
              <h3 tabIndex={0}
                style={{
                  marginTop:"1rem",
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <a aria-label="project URL" href={link}  style={{ boxShadow: `none`, color:'#ffffff' }}>
                {title }
                </a>
              </h3>
              <p tabIndex={0} dangerouslySetInnerHTML={{ __html: desc }} />
            </section>
          )
        })}
          </ProjectsContainer>
      </Layout>
    )
  }
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
