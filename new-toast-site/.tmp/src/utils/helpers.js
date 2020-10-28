/** @jsx jsx */
import { jsx } from "@emotion/core";
const externalLinkText = (link, text, ariaLabel, Component) => {
  if (Component)
    return jsx(
      Component,
      {
        "aria-labelledby": ariaLabel,
        target: "_blank",
        href: link,
      },
      text
    );
  else
    return jsx(
      "a",
      {
        "aria-labelledby": ariaLabel,
        target: "_blank",
        href: link,
      },
      text
    );
};
export default externalLinkText;
