import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import { rhythm, scale } from '../utils/typography'
import styled from "styled-components";

const PostWrapper = styled.div`
  background: #d76d77;
height:100%;
  padding:1rem;
  color:#ffffff;
`

const BottomWrapper = styled.div`
@media screen and (max-width:30em) {
  background-color:#FFAF7B;
  color:#3A1C71;
}
@media screen and (min-width:30em) {
  background-color:#D76D77;
}
  padding:1rem;
`

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.Mdx
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <PostWrapper>
          <h1 style={{ marginBottom: "2rem" }}>{post.frontmatter.title}</h1>
          <p
            style={{

              ...scale(-1 / 5),
              color:"#fffff",
              display: `block`,
              marginBottom: rhythm(1),
              marginTop: rhythm(-1),
            }}
          >
            {post.frontmatter.date}
          </p>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr
            style={{
              marginBottom: rhythm(1),
            }}
          />
        </PostWrapper>
        <BottomWrapper>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
              </Link>
              )}
            </li>
          </ul>
        </BottomWrapper>

      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    allMdx(fields: { slug: { eq: $slug } }) {
      edges {
        node {
          id
          excerpt(pruneLength: 160)
          html
          fields {
            slug
          }
          frontmatter {
            title
            author
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
