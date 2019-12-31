import React, { Fragment } from "react";
import { Link } from "gatsby";

import Layout from "../components/Layout";
import { graphql } from "gatsby";
import SEO from "../components/seo";
import { rhythm, scale } from "../utils/typography";
import styled from "styled-components";
import CSSWhitespace from "../components/blog-examples/CSSWhitespace"
import UpdatedIdea from "../components/blog-examples/UpdatedIdea"
//needed because gatsby can't render components that require the window object/variable on the server
// from https://github.com/gatsbyjs/gatsby/issues/309
try {
  var GifPlayer = require("react-gif-player");
} catch (e) {
  console.log("there was an error ", e);
}
import { MDXProvider } from "@mdx-js/react";

import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer";

const PostWrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const PostContent = styled.main `
height: 100%;
width: 95%;
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
`;

const BottomWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const shortcodes = {
  GifPlayer,
  CSSWhitespace,
  UpdatedIdea
};

function BlogPostTemplate({ data: { mdx }, location, pageContext }) {
  const { title, date } = mdx.frontmatter;
  const { previous, next } = pageContext;

  return (
    <Fragment>
      <Layout location={location} title={title}>
        <SEO title={title} description={"foobar"} />
        <PostWrapper>
          <PostContent>
          <h1 style={{ marginBottom: "2rem" }}>{title}</h1>
          <p
            style={{
              ...scale(-1 / 5),
              color: "#000000",
              display: `block`,
              marginBottom: rhythm(1),
              marginTop: rhythm(-1)
            }}
          >
            {date}
          </p>
          <MDXProvider components={shortcodes}>
            <MDXRenderer>{mdx.code.body}</MDXRenderer>
          </MDXProvider>
          <hr
            style={{
              marginBottom: rhythm(1)
            }}
          />
          {(previous || next) && (
            <BottomWrapper>
              <ul
                style={{
                  padding: "1rem",
                  display: `flex`,
                  flexWrap: `wrap`,
                  justifyContent: `space-between`,
                  listStyle: `none`
                }}
              >
                <li>
                  {previous && (
                    <Link aria-label="previous blog entry" to={previous.fields.slug} rel="prev">
                      ← {previous.frontmatter.title}
                    </Link>
                  )}
                </li>
                <li>
                  {next && (
                    <Link aria-label="next blog entry" to={next.fields.slug} rel="next">
                      {next.frontmatter.title} →
                    </Link>
                  )}
                </li>
              </ul>
            </BottomWrapper>
          )}
          </PostContent>
        </PostWrapper>
      </Layout>
    </Fragment>
  );
}

export default BlogPostTemplate;

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
`;
