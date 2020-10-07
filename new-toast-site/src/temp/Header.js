/** @jsx jsx */
import { jsx } from "@emotion/core";

import styled from "@emotion/styled";
import SiteNav from "./SiteNav.js";

const Header = styled.header`
  @media screen {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 30em) {
    padding: 10px;
  }
  @media print {
    display: none;
  }
`;

export default () => {
  return (
    <Header>
      <SiteNav />
    </Header>
  );
};
