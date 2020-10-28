/** @jsx jsx */
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";
const SmallText = styled.default
  .p`\n  margin-bottom: 5px;\n  font-size: 9px;\n  display: inline-flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n`;
const Copyright = () => {
  const currentYear = new Date().getFullYear();
  return jsx(SmallText, null, "© ", currentYear, " Alex Strand.");
};
export default Copyright;
