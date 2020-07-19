import React from "react";
import { BaseText } from "./componentsList";
import styled from "styled-components";

const SmallText = styled(BaseText)`
  margin-bottom: 5px;
  font-size: 9px;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Copyright = () => {
  const currentYear = new Date().getFullYear();
  return <SmallText>© {currentYear} Alex Strand.</SmallText>;
};

export default Copyright;
