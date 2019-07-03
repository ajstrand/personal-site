import React from 'react'
import { graphql } from 'gatsby'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import styled from "styled-components";


const Item = styled.section`
  padding:0.5em;
  display:flex;
  flex-direction:column;
  width:100%;
justify-content:center;
align-items:center;
@media screen and (max-width:30em) {
  padding:15px;
  background-color:#3a1c71;
  grid-row-start: 1;
  grid-row-end: 3;
  grid-column-start:1;
  grid-column-end:end;
}
@media screen and (min-width:30em) {
  grid-row-start:2;
  grid-column-start:2;
}
`
const Box = styled(Item)`

`

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const post = data.allMarkdownRemark.edges[0].node
    const postTitle = post.frontmatter.title || post.fields.slug
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Item>
          <SEO
            title="Alex Strand"
            keywords={[`blog`, `gatsby`, `javascript`, `react`]}
          />
          <Bio />
        </Item>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
