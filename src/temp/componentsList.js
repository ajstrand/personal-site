/** @jsx jsx */
import { jsx, css } from "@emotion/core";

import tags from "../tags.js";

const createEl = (tag, obj) => {
  let X = tags[tag] || tag;
  return <X css={obj}></X>;
};

export const Flex = () => {
  const style = css`
    display: flex;
    height: ${(props) => (props.height ? props.height : "auto")};
    flex-direction: ${(props) =>
      props.flexDirection ? props.flexDirection : "row"};
    justify-content: ${(props) =>
      props.justifyContent ? props.justifyContent : "unset"};
    align-items: ${(props) => (props.alignItems ? props.alignItems : "unset")};
    flex-wrap: ${(props) => (props.flexWrap ? props.flexWrap : "unset")};
    flex: ${(props) => (props.flex ? props.flex : "unset")};
  `;

  return createEl("div", style);
};

export const OverflowYScrollContainer = () => {
  const style = css`
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
  return createEl(Flex, style);
};

export const SiteLink = () => {
  const style = css`
    color: ${(props) => props.theme.colors.text};
  `;
  return createEl("a", style);
};

export const ListItem = () => {
  const style = css`
    padding: 0.5em;
    flex-direction: column;
    width: 100%;
  `;
  return createEl(Flex, style);
};
