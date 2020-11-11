/** @jsx jsx */
import { jsx } from "@emotion/core";

import SocialProfiles from "./SocialProfiles.js";
import SiteLinks from "./SiteLinks.js";

import { Flex } from "../temp/componentsList.js";

const SiteNav = () => {
  return (
    <nav>
      <Flex
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
      >
        <SiteLinks />
        <SocialProfiles />
      </Flex>
    </nav>
  );
};

export default SiteNav;
