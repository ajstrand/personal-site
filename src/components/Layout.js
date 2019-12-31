import React from "react";
import FooterContainer from "./FooterContainer"
import Theme from "./theme"
import {GlobalStyle, StyledContainer} from "./componentsList"


const Layout = (props) => {
    const { children } = props;

    return (
      <Theme>
        <GlobalStyle/>
          <StyledContainer>
          {children}
          <FooterContainer/>
          </StyledContainer>
      </Theme>
    );
  }

export default Layout;
