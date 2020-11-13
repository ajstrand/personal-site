/** @jsx jsx */
import { jsx, Global, css } from "@emotion/core";
import { Helmet } from "react-helmet";
import { useContext } from "preact/hooks";
import { Theme } from "./temp/theme.js";

import { Flex } from "./temp/componentsList.js";

import Copyright from "./temp/Copyright.js";
import CreateEl from "./CreateEl.js";

const StyledSummary = (props) => {
  const theme = useContext(Theme);
  const style = css`
    color: ${theme.colors.white};
    background-color: ${theme.colors.black};
  `;
  return (
    <CreateEl tag="summary" obj={style}>
      {props.children}
    </CreateEl>
  );
};

const StyledDetails = (props) => {
  const style = css`
    & black-lives {
      padding: 15px;
      width: fit-content;
    }
  `;
  return (
    <CreateEl tag="details" obj={style}>
      {props.children}
    </CreateEl>
  );
};

export const Details = () => (
  <StyledDetails>
    <StyledSummary>Black Lives Matter</StyledSummary>
    <black-lives></black-lives>
  </StyledDetails>
);

export const MetaDetails = ({ title, description }) => (
  <Helmet>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <title>Alex Strand's personal site and digital garden</title>
    <meta name="twitter:title" content={title} />
    <meta name="og:title" content={title} />
    <meta name="description" content={description} />
    <meta name="twitter:description" content={description} />
    <meta name="og:type" content="website" />
    <meta name="twitter:site" content="@_alex_strand" />
    <meta name="twitter:creator" content="@_alex_strand" />
    <script
      src="https://unpkg.com/i-stand/black-lives.js"
      type="module"
    ></script>
  </Helmet>
);
export const GlobalStyles = (props) => {
  const theme = useContext(Theme);
  const style = css`
    * {
      box-sizing: "border-box";
      margin: 0;
      padding: 0;
    }
    html {
      min-height: 100vh;
      background-color: ${theme.colors.white};
    }
    body {
      min-height: 100vh;
      #toast-page-section {
        min-height: 100vh;
      }
    }
  `;
  return (
    <CreateEl tag={Global} obj={style}>
      {props.children}
    </CreateEl>
  );
};

export const Footer = () => {
  return (
    <Flex
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
    >
      <footer>
        <Copyright />
      </footer>
    </Flex>
  );
};
