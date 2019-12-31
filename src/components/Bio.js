import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

import { rhythm } from '../utils/typography'
import styled from "styled-components";

const StyleLink = styled.a `
padding:5px;
border-radius:"10px";
background-color:#454553;
 color: #FFAF7B;
`;

const NameComponent = styled.span `
 color:"#131316";
 text-decoration-color:#eb586f;
 text-decoration:underline;
 font-weight:bold;
`;

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author} = data.site.siteMetadata

        const blurb = <p style={
          {
          "backgroundColor":"#f495a3",
            "color":"#131316",
            "padding":"10px",
            "borderRadius":"15px",
          marginTop:"20px",
          }}>
        Hi, I'm <NameComponent>{author}</NameComponent>.
        I build software for libraries <StyleLink href="https://oclc.org" target="_blank">@OCLC </StyleLink>
         using JavaScript/React, Java, and  Spring. I love working with modern web technologies and building
         helpful/accessible  products that serve the needs of users. Previously <StyleLink href="https://rootinc.com" target="_blank">@RootInc</StyleLink>.
      </p>
        return (
          <main
            style={{
              borderRadius:"15px",
              padding:'1rem',
              maxWidth:'1000px',
              display: `flex`,
              alignItems:'center',
                justifyContent:'center',
                flexDirection:'column',
              marginBottom: rhythm(2.5),
            }}
          >
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                width:'200px',
                height:'200px',
                borderRadius: `100%`,
              }}
              imgStyle={{
                borderRadius: `50%`,
              }}
            />
            {blurb}
          </main>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/me.jpg/" }) {
      childImageSharp {
        fixed(width: 150, height: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default Bio
