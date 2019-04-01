import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

import typography, { rhythm } from '../utils/typography'
import styled from "styled-components";

const StyleLink = styled.a `
@media screen and (min-width:30em) {
  color: #ffffff;
  ;
}
`;

const Content = styled.div `
  margin-bottom:2rem!important;
`;

const NameComponent = styled.strong `
@media screen and (min-width:30em) {
  color:  #3A1C71;
  ;
}
@media screen and (max-width:30em) {
  color: #FFAF7B;
  ;
}
`;

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social} = data.site.siteMetadata
        const blurb = <p>
        Hi, I'm <NameComponent>{author}</NameComponent> and I live and work in Dublin, OH. 
        I build software for libraries <StyleLink href="https://oclc.org" target="_blank">@OCLC </StyleLink>
         using JavaScript/React, Java, and  Spring. I love working with modern web technologies
         helpful products that serve the needs of users.
      </p>
        return (
          <Content
            style={{
              display: `flex`,
              marginBottom: rhythm(2.5),
            }}
          >
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 50,
                borderRadius: `100%`,
              }}
              imgStyle={{
                borderRadius: `50%`,
              }}
            />
            {blurb}
          </Content>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
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
