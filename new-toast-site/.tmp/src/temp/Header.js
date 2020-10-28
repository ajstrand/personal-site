/** @jsx jsx */
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";
import SiteNav from "./SiteNav.js";
const Header = styled.default
  .header`\n  @media screen {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n  @media screen and (max-width: 30em) {\n    padding: 10px;\n  }\n  @media print {\n    display: none;\n  }\n`;
export default () => {
  return jsx(Header, null, jsx(SiteNav, null));
};
