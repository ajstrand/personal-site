import React from 'react'
import { Link, graphql } from 'gatsby'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import { rhythm } from '../utils/typography'
import { SwitchExample } from '../components/SwitchExample';

class Projects extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const projects = data.allProjectsJson.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SwitchExample/>
        <Link style={{ boxShadow: `none` }} to="/projects">
                 Projects
                </Link>
        <SEO
          title="projects list"
          keywords={[`javascript`, `react`, `rails`]}
        />
        <Bio />
        <h1>Projects</h1>
        {projects.map(({ node }) => {
          const desc = node.desc
          const title = node.title
          const link = node.link
          return (
            <div key={node.title}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <a href={link}  style={{ boxShadow: `none` }}>
                {title }
                </a>
              </h3>
              <p dangerouslySetInnerHTML={{ __html: desc }} />
            </div>
          )
        })}
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
