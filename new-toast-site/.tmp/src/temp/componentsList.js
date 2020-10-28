/** @jsx jsx */
import styled from "@emotion/styled";
import pkg from "theme-ui";
const { Flex } = pkg;
export const OverflowYScrollContainer = styled.default(
  Flex
)`\n  padding: 0.5em;\n  flex-direction: column;\n  height: 100%;\n  overflow-y: scroll;\n  flex-basis: 95%;\n  align-items: flex-start;\n  @media screen and (min-width: 30em) {\n    flex-basis: 70%;\n  }\n`;
export const SiteLink = styled.default.a`\n  color: ${(props) =>
  props.theme.colors.text};\n`;
export const ListItem = styled.default(
  Flex
)`\n  padding: 0.5em;\n  flex-direction: column;\n  width: 100%;\n`;
