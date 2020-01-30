import React from 'react'

import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import { rhythm, scale } from '../utils/typography'
import styled from 'styled-components'
import CSSWhitespace from '../components/blog-examples/CSSWhitespace'
import UpdatedIdea from '../components/blog-examples/UpdatedIdea'
//needed because gatsby can't render components that require the window object/variable on the server
// from https://github.com/gatsbyjs/gatsby/issues/309
try {
  var GifPlayer = require('react-gif-player')
} catch (e) {
  console.log('there was an error ', e)
}
import { MDXProvider } from '@mdx-js/react'

import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'
import OtherPostsNav from './OtherPostsNav'
const PostWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const PostContent = styled.main`
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  @media screen and (min-width: 30em) {
    width: 70%;
  }
  & a {
    color: #000000;
  }
`

const DateComponent = styled.p`
  font-size: ${props => props.dateScale};
  color: #000000;
  display: block;
  margin-bottom: ${props => props.marginBottom};
  margin-top: ${props => props.marginTop};
`

const shortcodes = {
  GifPlayer,
  CSSWhitespace,
  UpdatedIdea,
}

function BlogPostTemplate({ data: { mdx }, location, pageContext }) {
  const { title, date } = mdx.frontmatter
  const { previous, next } = pageContext
  const dateScale = scale(-1 / 5)
  const marginTop = rhythm(-1)
  const marginBottom = rhythm(1)
  return (
    <Layout location={location} title={title}>
      <SEO title={title} description={'foobar'} />
      <PostWrapper>
        <PostContent>
          <h1 style={{ marginBottom: '2rem' }}>{title}</h1>
          <DateComponent
            dateScale={dateScale}
            marginBottom={marginBottom}
            marginTop={marginTop}
          >
            {date}
          </DateComponent>
          <MDXProvider components={shortcodes}>
            <MDXRenderer>{mdx.code.body}</MDXRenderer>
          </MDXProvider>
          <hr
            style={{
              marginBottom: rhythm(1),
            }}
          />
          {(previous || next) && (
            <OtherPostsNav previous={previous} next={next} />
          )}
        </PostContent>
      </PostWrapper>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostQuery($slug: String) {
    site {
      siteMetadata {
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      frontmatter {
        title
        date
      }
      code {
        body
      }
    }
  }
`
