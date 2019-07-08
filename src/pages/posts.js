import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import { rhythm } from '../utils/typography'
import styled from "styled-components";

const Item = styled.section `
  padding:0.5em;
  display:flex;
  flex-direction:column;
  width:100%;
  height:100%;
`;

const PostsContainer = styled(Item) `
grid-column-start:1;
  grid-column-end:end;
@media screen and (max-width:30em) {
  background-color:#3A1C71
}
`;

class Posts extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
      <PostsContainer>
        <h1 style={{marginTop:"1rem"}}>Posts</h1>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <Item key={node.fields.slug}>
              <h3
                style={{
                  marginTop:"1rem",
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: `none`, color:"#ffffff" }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small style={{
                  color:"#ffffff",
              }}>{node.frontmatter.date}</small>
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </Item>
          )
        })}
      </PostsContainer>
      </Layout>
    )
  }
}

export default Posts

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            excerpt
            fields {
              slug
            }
            frontmatter {
              title
              path
              date(formatString: "MMMM DD, YYYY")
            }
          }
        }
      }
  }
`
