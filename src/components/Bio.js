/** @jsx h */
import { h } from "preact";
import { useTheme } from "./theme.js";
//import { jsx } from "@emotion/core";

import ExternalLinkText from "../utils/helpers.js";

import { Flex } from "../components/componentsList.js";

import { styled, setup } from "goober";

setup(h, undefined, useTheme);

export const sizes = {
  sm: "@media(min-width: 570px)",
  mid: "@media(min-width: 920px)",
  large: "@media(min-width: 1120px)",
};

const StyleLink = styled("a")`
  font-size: 16px;
  padding: 2px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.text};
  color: ${(props) => props.theme.colors.white};
  &:hover {
    text-decoration: none;
  }
`;

const HomeDepot = () => (
  <ExternalLinkText
    link={"https://homedepot.com/"}
    text={"@homedepot"}
    ariaLabel={""}
    Component={StyleLink}
  />
);

const Oclc = () => (
  <ExternalLinkText
    link={"https://oclc.org"}
    text={"@OCLC"}
    ariaLabel={""}
    Component={StyleLink}
  />
);

const contactInfo =
  "Want to contact me, or interested in working with me? Contact me here:";
//const emailString = "hi(at)alexstrand.dev";
const emailString = "ajstrand8 (at) gmail.com";

const Intro = styled("h1")(
  ({ textSize }) => `
  margin:0;
  font-weight: bold;
  ${sizes.sm} {
    font-size: ${"1.5rem"};
  }
  ${sizes.mid} {
    font-size: ${"2rem"};
  }
  ${sizes.large} {
    font-size: ${"4rem"};
  }
`
);

const BioText = styled("p")`
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.text};
  padding: 10px;
  border-color: ${(props) => props.theme.colors.lightPalePinkText};
  border-radius: 15px;
  line-height: 34px;
  width: fit-content;
  font-size: 1rem;
`;
const Main = styled("div")`
  border-radius: 15px;
  padding: 1rem;
  max-width: 1000px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 1em;
`;

const AdaptFlex = styled(Flex)(
  ({ flexDirection }) => `
    margin-bottom:3em;
    ${sizes.sm || sizes.mid} {
      flex-direction: ${flexDirection ? flexDirection : "column"};
    }
    ${sizes.large} {
      flex-direction: ${flexDirection ? flexDirection : "row"};
    }
    `
);

const LeftFlex = styled(Flex)(
  ({ alignI }) => `
  ${sizes.sm} {
    align-items:"center";
  }
  ${sizes.mid || sizes.large} {
    align-items: "flex-start";
  }
`
);

const Contact = styled("p")`
  font-size: 1rem;
`;

const Bio = () => {
  let comps = [<HomeDepot />, <Oclc />];
  return (
    <Main>
      <AdaptFlex marginBottom="3em" alignItems="center" justifyContent="center">
        <img
          src="./assets/me-small.jpg"
          alt="a person with blond hair and black glasses, smiling towards the camera."
          style={{
            marginRight: "1em",
            marginBottom: 0,
            height: "100px",
            width: "100px",
            borderRadius: `100%`,
          }}
        />
        <LeftFlex flexDirection="column" justifyContent="center">
          <Intro>Hi, I'm Alex!</Intro>
          <BioText>
            Software Engineer {comps[0]}. Previously {comps.slice(1)} I love
            working with modern web technologies and building accessible
            products/services that serve the needs of users.
          </BioText>
        </LeftFlex>
      </AdaptFlex>
      <Contact>
        {contactInfo} {emailString}
      </Contact>
    </Main>
  );
};

export default Bio;
