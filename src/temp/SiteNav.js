/** @jsx jsx */
import { jsx } from "@emotion/core";

import SocialProfiles from "./SocialProfiles.js";
import SiteLinks from "./SiteLinks.js";
import pkg from "theme-ui";
const { Flex } = pkg;
const SiteNav = () => {
  return (
    <nav>
      <Flex
        sx={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <SiteLinks />
        <SocialProfiles />
      </Flex>
    </nav>
  );
};

export default SiteNav;
