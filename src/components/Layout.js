import React from "react";
import FooterContainer from "./FooterContainer";
import Theme from "./theme";
import { GlobalStyle, StyledContainer } from "./componentsList";
import { Helmet } from "react-helmet";
import styled from "styled-components";

const StyledSummary = styled.summary`
  color: #ffffff;
  background-color: #000000;
`;

const StyledDetails = styled.details`
  & black-lives {
    /*reduce size of banner on desktop*/
    padding: 15px;
    width: fit-content;
  }
`;

const Details = () => (
  <StyledDetails>
    <StyledSummary>Black Lives Matter</StyledSummary>
    <black-lives></black-lives>
  </StyledDetails>
);

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
        <Details />
        {children}
        <FooterContainer />
      </StyledContainer>
    </Theme>
  );
};

export default Layout;
