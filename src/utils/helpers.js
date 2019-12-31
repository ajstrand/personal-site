import React from 'react'

import { StyledLink } from "../components/componentsList"

export const externalLinkText = (link, text, ariaLabel) => {
  return (<StyledLink aria-label={ariaLabel}
    target="_blank" href={link}>{text}</StyledLink>)
}