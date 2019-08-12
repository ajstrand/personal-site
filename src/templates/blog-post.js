import React, { Fragment } from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import {graphql} from 'gatsby';
import SEO from '../components/seo'
import { rhythm, scale } from '../utils/typography'
import styled from "styled-components";
//needed because gatsby can't render components that require the window object/variable on the server
// from https://github.com/gatsbyjs/gatsby/issues/309
try {
  var  GifPlayer = require('react-gif-player');
} catch (e) {
  console.error("there was an error ", e)
}
import { MDXProvider } from "@mdx-js/react"

import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer"

const PostWrapper = styled.main`
  background: #d76d77;
height:100%;
width:100%;
  padding:1rem;
  color:#ffffff;

  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  grid-column-start:1;
  grid-column-end:end;`

const BottomWrapper = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:row;

  grid-column-start:1;
  grid-column-end:end;
@media screen and (max-width:30em) {
  background-color:#FFAF7B;
  color:#3A1C71;
}
@media screen and (min-width:30em) {
  background-color:#D76D77;
}
`;

const shortcodes = {
  GifPlayer
}

function BlogPostTemplate({ data: { mdx }, location, pageContext }) {
  const { title, date } = mdx.frontmatter
  const { previous, next } = pageContext

  return (
    <Fragment>
      <Layout location={location} title={title}>
      <SEO title={title} description={"foobar"} />
      <PostWrapper>
        <h1 style={{ marginBottom: "2rem" }}>{title}</h1>
        <p
          style={{

            ...scale(-1 / 5),
            color: "#fffff",
            display: `block`,
            marginBottom: rhythm(1),
            marginTop: rhythm(-1),
          }}
        >
          {date}
        </p>
        <MDXProvider components={shortcodes}>

        <MDXRenderer>{mdx.code.body}</MDXRenderer>
        </MDXProvider>
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        {(previous || next) && (<BottomWrapper>
        <ul
          style={{
            padding:'1rem',
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
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
            </BottomWrapper>)}
      </PostWrapper>
      
      </Layout>

    </Fragment>
  )
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostQuery($slug: String) {
    site {
      siteMetadata {
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }){
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
