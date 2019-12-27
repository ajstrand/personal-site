import React, { Fragment } from "react";
import FooterContainer from "./FooterContainer"
import "./layout.css";

import { rhythm } from "../utils/typography";
import styled from "styled-components";

const StyledContainer = styled.main`
  color: #ffffff;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  maxwidth: ${rhythm(24)};
  @media screen and (min-width: 30em) {
    background: #d76d77;
  }
`;

const Layout = (props) => {
    const { children } = props;

    return (
      <Fragment>
        <StyledContainer>
          {children}
          <FooterContainer/>
        </StyledContainer>
      </Fragment>
    );
  }

export default Layout;
