/** @jsx jsx */
import { jsx, Global } from "@emotion/core";

const determineResult = (type) => {
  const { prop } = type;
  let result;
  let temp;
  switch (prop) {
    case "noCSS":
      temp = null;
      break;
    case "nbsp":
      temp = "non-breaking-space";
      break;
    case "pre":
      temp = "pre";
      break;
    default:
      console.log(`${prop} not a valid option`);
      break;
  }
  result = temp;
  return result;
};

const CSSWhitespace = (cssType) => {
  let useCSS = determineResult(cssType);
  const whiteSpaceStyle = {
    whiteSpace: "pre",
  };
  const useWhiteSpace = useCSS === "pre" ? whiteSpaceStyle : null;
  const useNBSP = useCSS === "non-breaking-space" ? <span>&nbsp;</span> : null;
  return (
    <p>
      built with
      {useNBSP}{" "}
      <a style={useWhiteSpace} href="https://gatsbyjs.org">
        Gatsby
      </a>{" "}
      {useNBSP}
      <span>and</span>
      {useNBSP}{" "}
      <a style={useWhiteSpace} href="https://netlify.com">
        Netlify
      </a>
      .
    </p>
  );
};

export default CSSWhitespace;
