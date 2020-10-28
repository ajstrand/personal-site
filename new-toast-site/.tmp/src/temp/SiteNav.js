/** @jsx jsx */
import { jsx } from "@emotion/core";
import SocialProfiles from "./SocialProfiles.js";
import SiteLinks from "./SiteLinks.js";
import pkg from "theme-ui";
const { Flex } = pkg;
const SiteNav = () => {
  return jsx(
    "nav",
    null,
    jsx(
      Flex,
      {
        sx: {
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        },
      },
      jsx(SiteLinks, null),
      jsx(SocialProfiles, null)
    )
  );
};
export default SiteNav;
