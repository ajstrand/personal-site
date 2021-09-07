/** @jsx jsx */
import { useContext } from "preact/hooks";

import { Theme } from "./theme.js";
import { jsx, css } from "@emotion/core";

import externalLinkText from "../utils/helpers.js";

import { Flex } from "../temp/componentsList.js";

import facepaint from "facepaint";
import CreateEl from "../CreateEl.js";

const mq = facepaint([
  "@media(min-width: 570px)",
  "@media(min-width: 920px)",
  "@media(min-width: 1120px)",
]);

const StyleLink = (props) => {
  const theme = useContext(Theme);
  const style = css`
    font-size: 16px;
    padding: 2px;
    border-radius: 10px;
    background-color: ${theme.colors.text};
    color: ${theme.colors.white};
    &:hover {
      text-decoration: none;
    }
  `;

  return <CreateEl tag="a" obj={style} {...props}></CreateEl>;
};

const Intro = (props) => {
  const style = css`
    ${mq({
      fontSize: ["1.5rem", "2rem", "4rem"],
    })}
    margin:0;
    font-weight: bold;
  `;

  return <CreateEl tag="h1" obj={style} {...props}></CreateEl>;
};

const BioText = (props) => {
  const theme = useContext(Theme);
  const style = css`
    background-color: ${theme.colors.white};
    color: ${theme.colors.text};
    padding: 10px;
    border-color: ${theme.colors.lightPalePinkText};
    border-radius: 15px;
    line-height: 34px;
    width: fit-content;
    font-size: 1rem;
  `;

  return <CreateEl tag="p" obj={style} {...props}></CreateEl>;
};
const Main = (props) => {
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

  return <CreateEl tag="main" obj={style} {...props}></CreateEl>;
};

const AdaptFlex = (props) => {
  const style = css`
    ${mq({
      flexDirection: ["column", "row", "row"],
    })}
    margin-bottom:3em;
  `;

  return <CreateEl tag={Flex} obj={style} {...props}></CreateEl>;
};

const LeftFlex = (props) => {
  const style = css`
    ${mq({
      alignItems: ["center", "flex-start", "flex-start"],
    })}
  `;

  return <CreateEl tag={Flex} obj={style} {...props}></CreateEl>;
};
const Airtank = externalLinkText(
  "https://airtank.com",
  "@airtank",
  "",
  StyleLink
);
const Chase = externalLinkText("https://chase.com", "@Chase", "", StyleLink);
const Oclc = externalLinkText("https://oclc.org", "@OCLC", "", StyleLink);
const Root = externalLinkText("https://rootinc.com", "@RootInc", "", StyleLink);
const contactInfo =
  "Want to contact me, or interested in working with me? Contact me here:";
//const emailString = "hi(at)alexstrand.dev";
const emailString = "ajstrand8 (at) gmail.com";
const Contact = () => {
  const style = css`
    font-size: 1rem;
  `;
  return (
    <p css={style}>
      {contactInfo} {emailString}
    </p>
  );
};

const Bio = () => {
  return (
    <Main>
      <AdaptFlex marginBottom="3em" alignItems="center" justifyContent="center">
        <img
          src="./assets/me.jpg"
          alt="a person with blond hair and black glasses, smiling towards the camera."
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
            Software Engineer . Previously {Airtank} {Chase}, {Oclc}, {Root}. I
            love working with modern web technologies and building accessible
            products/services that serve the needs of users.
          </BioText>
        </LeftFlex>
      </AdaptFlex>
      <Contact />
    </Main>
  );
};

export default Bio;
