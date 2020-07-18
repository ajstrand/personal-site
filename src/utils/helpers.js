import React from "react";

import { StyledLink } from "../components/componentsList";

export const externalLinkText = (link, text, ariaLabel, Component) => {
  if (Component) {
    return (
      <Component aria-label={ariaLabel} target="_blank" href={link}>
        {text}
      </Component>
    );
  } else {
    return (
      <StyledLink aria-label={ariaLabel} target="_blank" href={link}>
        {text}
      </StyledLink>
    );
  }
};
