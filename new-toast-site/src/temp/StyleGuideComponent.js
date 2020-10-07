/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Styled, Flex } from "theme-ui";
import { TypeScale, TypeStyle, ColorPalette } from "@theme-ui/style-guide";
export default (props) => (
  <Flex
    sx={{
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Styled.h1>Style Guide</Styled.h1>
    <ColorPalette
      sx={{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    />
    <TypeScale
      sx={{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    />
    <TypeStyle
      sx={{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      fontFamily="heading"
      fontWeight="heading"
      lineHeight="heading"
    />
    <TypeStyle
      sx={{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      fontFamily="body"
      fontWeight="body"
      lineHeight="body"
    />
  </Flex>
);
