/** @jsx jsx */
import { jsx, css } from "@emotion/core";

import tags from "../tags.js";

import externalLinkText from "../utils/helpers.js";

import { Flex } from "../temp/componentsList.js";

import facepaint from "facepaint";

const createEl = (tag, obj) => {
  let X = tags[tag] || tag;
  return <X css={obj}></X>;
};

const mq = facepaint([
  "@media(min-width: 570px)",
  "@media(min-width: 920px)",
  "@media(min-width: 1120px)",
]);

const StyleLink = () => {
  const style = css`
    font-size: 16px;
    padding: 2px;
    border-radius: 10px;
    background-color: ${(props) => props.theme.colors.lightPalePinkText};
    color: ${(props) => props.theme.colors.text};
    &:hover {
      text-decoration: none;
    }
  `;

  return createEl("a", style);
};

const Intro = () => {
  const style = css`
    ${mq({
      fontSize: ["1.5rem", "2rem", "4rem"],
    })}
    margin:0;
    font-weight: bold;
  `;

  return createEl("h1", style);
};

const BioText = () => {
  const style = css`
    background-color: ${(props) => props.theme.colors.text};
    color: ${(props) => props.theme.colors.lightPalePinkText};
    padding: 10px;
    border-radius: 15px;
    line-height: 34px;
    width: fit-content;
  `;

  return createEl("p", style);
};
const Main = () => {
  const style = css`
    border-radius: 15px;
    padding: 1rem;
    max-width: 1000px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 1em;
  `;

  return createEl("main", style);
};

const AdaptFlex = () => {
  const style = css`
    ${mq({
      flexDirection: ["column", "row", "row"],
    })}
  `;

  return createEl(Flex, style);
};

const LeftFlex = () => {
  const style = css`
    ${mq({
      alignItems: ["center", "flex-start", "flex-start"],
    })}
  `;

  return createEl(Flex, style);
};

const Chase = externalLinkText("https://chase.com", "@Chase", "", StyleLink);
const Oclc = externalLinkText("https://oclc.org", "@OCLC", "", StyleLink);
const Root = externalLinkText("https://rootinc.com", "@RootInc", "", StyleLink);
const contactInfo =
  "Want to contact me, or interested in working with me? Contact me here:";
const emailString = "hi(at)alexstrand.dev";

const Bio = () => {
  return (
    <Main>
      <AdaptFlex alignItems="center" justifyContent="center">
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
        <LeftFlex flexDirection="column" justifyContent="center">
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
