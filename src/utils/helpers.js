import React from "react";

import {
  GeneralExternalLinkTag,
  BioExternalLinkTag
} from "../components/componentsList";
const components = {
  general: GeneralExternalLinkTag,
  bio: BioExternalLinkTag
};
export const externalLinkText = (link, text, ariaLabel, componentType) => {
  const Tag = components[componentType || "general"];
  const returnLink = () => (
    <Tag aria-label={ariaLabel} target="_blank" href={link}>
      {text}
    </Tag>
  );
  return returnLink;
};
