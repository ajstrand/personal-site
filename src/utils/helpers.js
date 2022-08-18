/** @jsx jsx */
import { jsx } from "@emotion/core";
import { h } from "preact";

import { styled, setup } from "goober";
import { useTheme } from "../components/theme.js";

setup(h, undefined, useTheme);
const ExternalLinkText = ({ link, text, ariaLabel, Component }) => {
  if (Component) {
    return (
      <Component
        aria-labelledby={ariaLabel ? ariaLabel : null}
        target="_blank"
        href={link}
      >
        {text}
      </Component>
    );
  } else {
    return (
      <a
        aria-labelledby={ariaLabel ? ariaLabel : null}
        target="_blank"
        href={link}
      >
        {text}
      </a>
    );
  }
};

export default ExternalLinkText;
