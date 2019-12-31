import styled, { css } from "styled-components";
import { Link } from "gatsby";

import theme from "styled-theming";
import { createGlobalStyle } from "styled-components"
import { rhythm } from "../utils/typography";

const darkBlue = "#131316";
const siteBg =   "#F0EEE3";
export const textColorStyles = theme("mode", {
  light: css`
  color:${darkBlue};
  font-size: 17px;
`,
  dark: "#ffffff",
});

export const headingColorStyles = theme("mode", {
  light: darkBlue,
  dark: "#ffffff",
});

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
    width: 100%;
}
  body {
    background-color: ${siteBg};
    height: 100%;
  width: 100%;
  }
  #___gatsby,
#___gatsby>div[role="group"] {
    height: 100%;
}
  `;

export const StyledContainer = styled.main`
  height: 100%;
  width: 100%;
  margin:0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  /* max-width: ${rhythm(24)}; */
`;


const createWithStyles = (component, baseStyles, newStyles) => {
  const el = styled[component]`
    ${baseStyles}
    ${newStyles}
  `;
  return el;
}
const createInternalWithStyles = (component, baseStyles, newStyles) => {
  const el = styled(component)`
    ${baseStyles}
    ${newStyles}
  `;
  return el;
}

export const BaseLinkStyles = css`
  color:${darkBlue};
  text-decoration:none;
`;

export const Header1 = createWithStyles("h1", headingColorStyles, "")
export const Header3 = createWithStyles("h3", headingColorStyles, "")

export const BaseText = createWithStyles("p", textColorStyles, "")

export const StyledLink = createWithStyles("a", BaseLinkStyles, "")

export const InternalSiteLink = createInternalWithStyles(Link, BaseLinkStyles, `
margin: 0 0.5em 0 0.5em;
box-shadow:none;
  `
)