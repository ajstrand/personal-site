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
const StyleLink = styled.a`\n  font-size: 16px;\n  padding: 2px;\n  border-radius: 10px;\n  background-color: ${(
  props
) => props.theme.colors.lightPalePinkText};\n  color: ${(props) =>
  props.theme.colors.text};\n  &:hover {\n    text-decoration: none;\n  }\n`;
const Intro = styled.h1`\n  ${mq({
  fontSize: ["1.5rem", "2rem", "4rem"],
})}\n  margin:0;\n  font-weight: bold;\n`;
const BioText = styled.p`\n  background-color: ${(props) =>
  props.theme.colors.text};\n  color: ${(props) =>
  props.theme.colors
    .lightPalePinkText};\n  padding: 10px;\n  border-radius: 15px;\n  line-height: 34px;\n  width: fit-content;\n`;
const Main = styled.main`\n  border-radius: 15px;\n  padding: 1rem;\n  max-width: 1000px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  margin-bottom: 1em;\n`;
const AdaptFlex = styled(Flex)`\n  ${mq({
  flexDirection: ["column", "row", "row"],
})}\n`;
const LeftFlex = styled(Flex)`\n  ${mq({
  alignItems: ["center", "flex-start", "flex-start"],
})}\n`;
const Chase = externalLinkText("https://chase.com", "@Chase", "", StyleLink);
const Oclc = externalLinkText("https://oclc.org", "@OCLC", "", StyleLink);
const Root = externalLinkText("https://rootinc.com", "@RootInc", "", StyleLink);
const contactInfo =
  "Want to contact me, or interested in working with me? Contact me here:";
const emailString = "hi(at)alexstrand.dev";
const Bio = () => {
  return jsx(
    Main,
    null,
    jsx(
      AdaptFlex,
      {
        sx: {
          alignItems: "center",
          justifyContent: "center",
        },
      },
      jsx("img", {
        src: "./me.jpg",
        alt: "the website author with glasses, smiling towards the camera",
        style: {
          marginRight: "1em",
          marginBottom: 0,
          // width: "200px",
          height: "200px",
          borderRadius: `100%`,
        },
      }),
      jsx(
        LeftFlex,
        {
          sx: {
            flexDirection: "column",
            justifyContent: "center",
          },
        },
        jsx(Intro, null, "Hi, I'm Alex!"),
        jsx(
          BioText,
          null,
          "I'm a Frontend Software Engineer ",
          Chase,
          ". Previously ",
          Oclc,
          ", ",
          Root,
          ". I love working with JavaScript/HTML/CSS and building accessible products that serve the needs of users."
        )
      )
    ),
    jsx("p", null, contactInfo, " ", emailString, ".", " ")
  );
};
export default Bio;
