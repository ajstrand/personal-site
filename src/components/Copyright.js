import React from 'react'
import { BaseText } from "./componentsList"
import {externalLinkText} from "../utils/helpers"

const Copyright = () => {
  const gatsbyLink = externalLinkText("https://gatsbyjs.org", "Gatsby", "Gatsby framework website url")
  const netlifyLink = externalLinkText("https://www.netlify.com", "Netlify", "Netlify website URL")
  const currentYear = new Date().getFullYear()
  const text = (<>
       © {currentYear} Alex Strand. Built with {gatsbyLink} <span>and hosted on</span> {netlifyLink}
  </>);
  return (
    <BaseText>
      {text}
    </BaseText>
  )
}

export default Copyright