/** @jsx jsx */
import { jsx, Global } from "@emotion/core";
import { Helmet } from "react-helmet";
import { MDXProvider } from "@mdx-js/preact";
import { Fragment } from "preact";
import styled from "@emotion/styled";
import Theme from "./temp/theme.js";
import pkg from "theme-ui";
const { Flex } = pkg;
import Header from "./temp/Header.js";
import Copyright from "./temp/Copyright.js";
const StyledSummary = styled.default.summary`\n  color: ${(props) =>
  props.theme.colors.white};\n  background-color: ${(props) =>
  props.theme.colors.black};\n`;
const StyledDetails = styled.default
  .details`\n  & black-lives {\n    padding: 15px;\n    width: fit-content;\n  }\n`;
const Details = () =>
  jsx(
    StyledDetails,
    null,
    jsx(StyledSummary, null, "Black Lives Matter"),
    jsx("black-lives", null)
  );
const MetaDetails = ({ title, description }) =>
  jsx(
    Helmet,
    null,
    jsx("meta", {
      charSet: "utf-8",
    }),
    jsx("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    }),
    jsx("title", null, "Alex Strand's personal site and digital garden"),
    jsx("meta", {
      name: "twitter:title",
      content: title,
    }),
    jsx("meta", {
      name: "og:title",
      content: title,
    }),
    jsx("meta", {
      name: "description",
      content: description,
    }),
    jsx("meta", {
      name: "twitter:description",
      content: description,
    }),
    jsx("meta", {
      name: "og:type",
      content: "website",
    }),
    jsx("meta", {
      name: "twitter:site",
      content: "@_alex_strand",
    }),
    jsx("meta", {
      name: "twitter:creator",
      content: "@_alex_strand",
    }),
    jsx("script", {
      src: "https://unpkg.com/i-stand/black-lives.js",
      type: "module",
    })
  );
const GlobalStyles = styled.default(
  Global
)`\n  /* lora-regular - latin-ext_latin */\n  @font-face {\n    font-family: "Lora";\n    font-style: normal;\n    font-weight: 400;\n    src: url("fonts/lora-v16-latin-ext_latin-regular.eot"); /* IE9 Compat Modes */\n    src: local(""),\n      url("fonts/lora-v16-latin-ext_latin-regular.eot?#iefix")\n        format("embedded-opentype"),\n      /* IE6-IE8 */ url("fonts/lora-v16-latin-ext_latin-regular.woff2")\n        format("woff2"),\n      /* Super Modern Browsers */\n        url("fonts/lora-v16-latin-ext_latin-regular.woff") format("woff"),\n      /* Modern Browsers */ url("fonts/lora-v16-latin-ext_latin-regular.ttf")\n        format("truetype"),\n      /* Safari, Android, iOS */\n        url("fonts/lora-v16-latin-ext_latin-regular.svg#Lora") format("svg"); /* Legacy iOS */\n  }\n  /* roboto-regular - latin-ext_latin */\n  @font-face {\n    font-family: "Roboto";\n    font-style: normal;\n    font-weight: 400;\n    src: url("fonts/roboto-v20-latin-ext_latin-regular.eot"); /* IE9 Compat Modes */\n    src: local("Roboto"), local("Roboto-Regular"),\n      url("fonts/roboto-v20-latin-ext_latin-regular.eot?#iefix")\n        format("embedded-opentype"),\n      /* IE6-IE8 */ url("fonts/roboto-v20-latin-ext_latin-regular.woff2")\n        format("woff2"),\n      /* Super Modern Browsers */\n        url("fonts/roboto-v20-latin-ext_latin-regular.woff") format("woff"),\n      /* Modern Browsers */ url("fonts/roboto-v20-latin-ext_latin-regular.ttf")\n        format("truetype"),\n      /* Safari, Android, iOS */\n        url("fonts/roboto-v20-latin-ext_latin-regular.svg#Roboto") format("svg"); /* Legacy iOS */\n  }\n  * {\n    box-sizing: "border-box";\n    margin: 0;\n    padding: 0;\n  }\n  html {\n    min-height: 100vh;\n    background-color: ${(
  props
) =>
  props.theme.colors
    .white};\n  }\n  body {\n    min-height: 100vh;\n    #toast-page-section {\n      min-height: 100vh;\n    }\n  }\n`;
const Obj = {};
const Footer = () => {
  return jsx(
    Flex,
    {
      sx: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      },
    },
    jsx("footer", null, jsx(Copyright, null))
  );
};
export default ({ children, ...props }) => {
  let title = "Alex Strand's Digital Garden";
  let description = "MDX, Svelte, Kotlin, Rust";
  if (props.title) {
    title = props.title;
    description = "";
  }
  return jsx(
    Theme,
    null,
    jsx(MetaDetails, {
      title: title,
      description: description,
    }),
    jsx(
      Flex,
      {
        sx: {
          flexDirection: "column",
          height: "100vh",
        },
      },
      jsx(GlobalStyles, null),
      jsx(Details, null),
      jsx(Header, null),
      jsx(
        MDXProvider,
        {
          components: Obj,
        },
        jsx(Fragment, null, children)
      ),
      jsx(Footer, {
        sx: {
          flex: "0",
        },
      })
    )
  );
};
