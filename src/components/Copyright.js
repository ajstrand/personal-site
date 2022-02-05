/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { styled, setup } from "goober";

setup(h);

export const SmallText = styled("p")`
  margin-bottom: 5px;
  font-size: 9px;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Copyright = () => {
  const currentYear = new Date().getFullYear();
  return <SmallText>© {currentYear} Alex Strand</SmallText>;
};

export default Copyright;
