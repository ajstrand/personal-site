import React from "react";
import { InternalSiteLink} from "./componentsList"

const SiteLinks = () => {
  return (
    <>
    <InternalSiteLink to="/resume">
        Resume
      </InternalSiteLink>
      <InternalSiteLink to="/projects">
        Projects
      </InternalSiteLink>
      <InternalSiteLink to="/">
        Home
      </InternalSiteLink>
      <InternalSiteLink to="/posts">
        Blog
      </InternalSiteLink>
      </>
  )
}

export default SiteLinks;