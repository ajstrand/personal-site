/** @jsx jsx */
import { jsx } from "@emotion/core";

import styled from "@emotion/styled";
import externalLinkText from "../utils/helpers.js";
import pkg from "theme-ui";
const { Flex } = pkg;
import facepaint from "facepaint";

const mq = facepaint([
  "@media(min-width: 570px)",
  "@media(min-width: 920px)",
  "@media(min-width: 1120px)",
]);

const StyleLink = styled.a`
  font-size: 16px;
  padding: 2px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.lightPalePinkText};
  color: ${(props) => props.theme.colors.text};
  &:hover {
    text-decoration: none;
  }
`;

const Intro = styled.h1`
  ${mq({
    fontSize: ["1.5rem", "2rem", "4rem"],
  })}
  margin:0;
  font-weight: bold;
`;

const BioText = styled.p`
  background-color: ${(props) => props.theme.colors.text};
  color: ${(props) => props.theme.colors.lightPalePinkText};
  padding: 10px;
  border-radius: 15px;
  line-height: 34px;
  width: fit-content;
`;

const Main = styled.main`
  border-radius: 15px;
  padding: 1rem;
  max-width: 1000px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 1em;
`;

const AdaptFlex = styled(Flex)`
  ${mq({
    flexDirection: ["column", "row", "row"],
  })}
`;

const LeftFlex = styled(Flex)`
  ${mq({
    alignItems: ["center", "flex-start", "flex-start"],
  })}
`;

const Chase = externalLinkText("https://chase.com", "@Chase", "", StyleLink);
const Oclc = externalLinkText("https://oclc.org", "@OCLC", "", StyleLink);
const Root = externalLinkText("https://rootinc.com", "@RootInc", "", StyleLink);
const contactInfo =
  "Want to contact me, or interested in working with me? Contact me here:";
const emailString = "hi(at)alexstrand.dev";

const Bio = () => {
  return (
    <Main>
      <AdaptFlex sx={{ alignItems: "center", justifyContent: "center" }}>
        <img
          src="./me.jpg"
          alt="the website author with glasses, smiling towards the camera"
          style={{
            marginRight: "1em",
            marginBottom: 0,
            // width: "200px",
            height: "200px",
            borderRadius: `100%`,
          }}
        />
        <LeftFlex sx={{ flexDirection: "column", justifyContent: "center" }}>
          <Intro>Hi, I'm Alex!</Intro>
          <BioText>
            I'm a Frontend Software Engineer {Chase}. Previously {Oclc}, {Root}.
            I love working with JavaScript/HTML/CSS and building accessible
            products that serve the needs of users.
          </BioText>
        </LeftFlex>
      </AdaptFlex>
      <p>
        {contactInfo} {emailString}.{" "}
      </p>
    </Main>
  );
};

export default Bio;
