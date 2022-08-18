/** @jsx jsx */
import { jsx } from "@emotion/core";
import { h } from "preact";

import { styled, setup } from "goober";
import { useTheme } from "../components/theme.js";
setup(h, undefined, useTheme);

export const Flex = styled("div")`
  display: flex;
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : "row"};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "center"};
  align-items: ${(props) => (props.alignItems ? props.alignItems : "center")};
  flex-wrap: ${(props) => (props.flexWrap ? props.flexWrap : "unset")};
  flex: ${(props) => (props.flex ? props.flex : "unset")};
`;

export const SiteLink = styled("a")`
  color: ${(props) => props.theme.colors.text};
`;

export const ListItem = styled(Flex)`
  padding: 0.5em;
  flex-direction: column;
  width: 100%;
`;
