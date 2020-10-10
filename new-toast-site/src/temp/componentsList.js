/** @jsx jsx */
import styled from "@emotion/styled";
import { Flex } from "theme-ui";
export const OverflowYScrollContainer = styled.default(Flex)`
  padding: 0.5em;
  flex-direction: column;
  height: 100%;
  overflow-y: scroll;
  flex-basis: 95%;
  align-items: flex-start;
  @media screen and (min-width: 30em) {
    flex-basis: 70%;
  }
`;

export const SiteLink = styled.default.a`
  color: ${(props) => props.theme.colors.text};
`;

export const ListItem = styled.default(Flex)`
  padding: 0.5em;
  flex-direction: column;
  width: 100%;
`;
