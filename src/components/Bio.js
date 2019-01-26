import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

import { rhythm } from '../utils/typography'

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social, typescriptURL, javaURL, springURL } = data.site.siteMetadata
        const blurb = <p>
        Hi, I'm <strong>{author}</strong> and I live and work in Dublin, OH building software for libraries.
        I mainly work with <a href={typescriptURL}>
        TypeScript
        </a>, <a href={javaURL}>
          Java
        </a> and <a href={springURL}>
          Spring. 
        </a>
        {` `}
        <a href={`https://twitter.com/${social.twitter}`}>
          Follow me on Twitter.
        </a>
      </p>
        return (
          <div
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
          </div>
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
