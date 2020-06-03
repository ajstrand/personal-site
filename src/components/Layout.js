import React from "react";
import FooterContainer from "./FooterContainer";
import Theme from "./theme";
import { GlobalStyle, StyledContainer } from "./componentsList";
import { Helmet } from "react-helmet";

const Layout = (props) => {
  const { children } = props;

  return (
    <Theme>
      <Helmet>
        <script
          src="https://unpkg.com/i-stand/black-lives.js"
          type="module"
        ></script>
      </Helmet>
      <GlobalStyle />
      <StyledContainer>
        <black-lives></black-lives>
        {children}
        <FooterContainer />
      </StyledContainer>
    </Theme>
  );
};

export default Layout;
