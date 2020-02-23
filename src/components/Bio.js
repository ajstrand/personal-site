import React, { useState } from "react";
import { StaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

import { rhythm } from "../utils/typography";
import styled from "styled-components";
import { externalLinkText } from "../utils/helpers";
import { useSpring, useTransition, animated } from "react-spring";

const NameComponent = styled.span`
  color: "#131316";
  text-decoration-color: #eb586f;
  text-decoration: underline;
  font-weight: bold;
`;

const BioText = styled(animated.div)`
  background-color: #f495a3;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    margin: 0;
    color: #131316;
    padding: 10px;
  }
`;

const OCLCLink = externalLinkText(
  "https://oclc.org",
  "@OCLC",
  "OCLC website URL",
  "bio"
);
const RootIncLink = externalLinkText(
  "https://rootinc.com",
  "@RootInc",
  "Root website URL",
  "bio"
);

function Bio() {
  const springProps = useSpring({
    from: {}
  });

  const [show, set] = useState(false);
  const transitions = useTransition(show, null, {
    from: { borderRadius: "50px", width: "50%", height: "50%" },
    enter: { borderRadius: "15px" }
  });
  const stuff = transitions.map(
    ({ item, key, props }) =>
      item && (
        <animated.div key={key} style={props}>
          <span role="img" aria-label="two fingers">
            ✌hhelo worhgrehnsetan dthaertjh dehyq45euyn erhy4q5y45uj
          </span>
        </animated.div>
      )
  );

  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author } = data.site.siteMetadata;
        const Name = () => <NameComponent>{author}</NameComponent>;
        const introText = () => (
          <p>
            Hi, I'm <Name /> I build software for libraries <OCLCLink /> using
            JavaScript/React, Java, and Spring. I love working with modern web
            technologies and building helpful/accessible products that serve the
            needs of users. Previously <RootIncLink />.
          </p>
        );
        return (
          <main
            style={{
              borderRadius: "15px",
              padding: "1rem",
              maxWidth: "1000px",
              display: `flex`,
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              marginBottom: rhythm(2.5)
            }}
          >
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                width: "200px",
                height: "200px",
                borderRadius: `100%`
              }}
              imgStyle={{
                borderRadius: `50%`
              }}
            />
            {stuff}
            {/* {<BioText style={springProps}>{introText()}</BioText>} */}
          </main>
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
