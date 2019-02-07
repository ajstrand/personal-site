import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import { rhythm } from '../utils/typography'

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
        {projects.map(({ node }) => {
          const desc = node.desc
          return (
            <div key={node.fields.slug}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                {/* <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link> */}
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
    allProjectsJson {
      edges {
        node {
          link
          desc
        }
      }
    }
  }
`
