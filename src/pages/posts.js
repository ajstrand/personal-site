import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import { rhythm } from '../utils/typography'
import {Header1,  Header3, BaseText, InternalSiteLink, OverflowYScrollContainer, ListItem } from '../components/componentsList'



function Posts({data}) {
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges

    return (
      <Layout location={data.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
      <OverflowYScrollContainer>
        <Header1 style={{marginTop:"1rem"}}>Posts</Header1>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <ListItem key={node.id}>
              <Header3
                style={{
                  marginTop:"1rem",
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <InternalSiteLink to={node.fields.slug}>
                  {title}
                </InternalSiteLink>
              </Header3>
              <small style={{
                  color:"#ffffff",
              }}>{node.frontmatter.date}</small>
              <BaseText dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </ListItem>
          )
        })}
      </OverflowYScrollContainer>
      </Layout>
    )
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
            id
            excerpt
            fields {
              slug
            }
            frontmatter {
              title
              date(formatString: "MMMM DD, YYYY")
            }
          }
        }
      }
  }
`
