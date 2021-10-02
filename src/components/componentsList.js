/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useContext } from "preact/hooks";
import CreateEl from "../CreateEl.js";
import { Theme } from "./theme.js";

export const Flex = (props) => {
  const style = css`
    height: ${props.height ? props.height : "fit-content"};
    display: flex;
    flex-direction: ${props.flexDirection ? props.flexDirection : "row"};
    justify-content: ${props.justifyContent ? props.justifyContent : "center"};
    align-items: ${props.alignItems ? props.alignItems : "center"};
    flex-wrap: ${props.flexWrap ? props.flexWrap : "unset"};
    flex: ${props.flex ? props.flex : "unset"};
  `;

  return <CreateEl tag="div" obj={style} {...props}></CreateEl>;
};

export const SiteLink = (props) => {
  const theme = useContext(Theme);
  const style = css`
    color: ${theme.colors.text};
  `;
  return <CreateEl tag="a" obj={style} {...props}></CreateEl>;
};

export const ListItem = (props) => {
  const style = css`
    padding: 0.5em;
    flex-direction: column;
    width: 100%;
  `;
  return <CreateEl tag={Flex} obj={style} {...props}></CreateEl>;
};
