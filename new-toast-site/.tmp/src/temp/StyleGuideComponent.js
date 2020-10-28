/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Styled, Flex } from "theme-ui";
import { TypeScale, TypeStyle, ColorPalette } from "@theme-ui/style-guide";
export default (props) =>
  jsx(
    Flex,
    {
      sx: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      },
    },
    jsx(Styled.h1, null, "Style Guide"),
    jsx(ColorPalette, {
      sx: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      },
    }),
    jsx(TypeScale, {
      sx: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      },
    }),
    jsx(TypeStyle, {
      sx: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      },
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
    }),
    jsx(TypeStyle, {
      sx: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      },
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
    })
  );
