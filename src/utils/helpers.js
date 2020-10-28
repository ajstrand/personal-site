/** @jsx jsx */
import { jsx } from "@emotion/core";

const externalLinkText = (link, text, ariaLabel, Component) => {
  if (Component) {
    return (
      <Component aria-labelledby={ariaLabel} target="_blank" href={link}>
        {text}
      </Component>
    );
  } else {
    return (
      <a aria-labelledby={ariaLabel} target="_blank" href={link}>
        {text}
      </a>
    );
  }
};

export default externalLinkText;
