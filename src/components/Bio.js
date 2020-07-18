import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

import { rhythm } from "../utils/typography";
import styled from "styled-components";
import { externalLinkText } from "../utils/helpers";

const StyleLink = styled.a`
  padding: 5px;
  border-radius: "10px";
  background-color: #454553;
  color: #ffaf7b;
`;

const BioText = styled.p`
  background-color: #f495a3;
  color: #131316;
  padding: 10px;
  border-radius: 15px;
  margin-top: 20px;
`;

const NameComponent = styled.span`
  color: "#131316";
  text-decoration-color: #eb586f;
  text-decoration: underline;
  font-weight: bold;
`;

const Main = styled.main`
  border-radius: 15px;
  padding: 1rem;
  max-width: 1000px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: rhythm(2.5);
`;

function Bio() {
  const Chase = externalLinkText("https://chase.com", "@Chase", "", StyleLink);
  const Oclc = externalLinkText("https://oclc.org", "@OCLC", "", StyleLink);
  const Root = externalLinkText(
    "https://rootinc.com",
    "@RootInc",
    "",
    StyleLink
  );
  return (
    <StaticQuery
      query={bioQuery}
      render={(data) => {
        const { author } = data.site.siteMetadata;

        const blurb = (
          <BioText>
            Hi, I'm <NameComponent>{author}</NameComponent>. I'm a Frontend
            Software Engineer {Chase}. Previously {Oclc}, {Root}. I love working
            with JavaScript/HTML/CSS and building accessible products that serve
            the needs of users.
          </BioText>
        );
        return (
          <Main>
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                width: "200px",
                height: "200px",
                borderRadius: `100%`,
              }}
              imgStyle={{
                borderRadius: `50%`,
              }}
            />
            {blurb}
          </Main>
        );
      }}
    />
  );
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
`;

export default Bio;
