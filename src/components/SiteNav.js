/** @jsx jsx */
import { jsx } from "@emotion/core";
import { h } from "preact";

import SocialProfiles from "./SocialProfiles.js";
import SiteLinks from "./SiteLinks.js";

import { Flex } from "../components/componentsList.js";

import { setup } from "goober";

import { useTheme } from "../components/theme.js";

setup(h, undefined, useTheme);

const SiteNav = (props) => {
  const theme = useTheme();
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
