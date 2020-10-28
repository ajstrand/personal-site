/** @jsx jsx */
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";
import pkg from "theme-ui";
const { Flex } = pkg;
import data from "../temp/projectsData.js";
import { SiteLink } from "../temp/componentsList.js";
import facepaint from "facepaint";
const mq = facepaint([
  "@media(min-width: 570px)",
  "@media(min-width: 920px)",
  "@media(min-width: 1120px)",
]);
const Item = styled(
  Flex
)`\n  padding: 0.5em;\n  flex-direction: column;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  flex: 1;\n  @media screen and (max-width: 30em) {\n    padding: 15px;\n  }\n  & ul {\n    ${mq(
  {
    width: ["fit-content", "85%", "85%"],
  }
)}\n  }\n`;
export default () => {
  return jsx(
    Item,
    null,
    jsx("h2", null, "Here's a list of some projects I've done."),
    jsx(
      "p",
      null,
      "They're mostly for fun and learning. Although some may become more \"official\" open source projects I'll support and maintain."
    ),
    jsx(
      "ul",
      null,
      data.map(({ title, link, desc }) => {
        return jsx(
          "li",
          null,
          jsx(
            SiteLink,
            {
              href: link,
            },
            jsx("h3", null, title)
          ),
          jsx("p", null, desc)
        );
      })
    )
  );
};
