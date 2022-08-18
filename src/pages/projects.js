/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { h } from "preact";
import data from "../components/projectsData.js";
// import { SiteLink } from "../components/componentsList.js";
import { Flex } from "../components/componentsList.js";

import { styled, setup } from "goober";

setup(h);

export const sizes = {
  sm: "@media(min-width: 570px)",
  mid: "@media(min-width: 920px)",
  large: "@media(min-width: 1120px)",
};

const Item = styled(Flex)(
  ({ alignI }) => `
    padding: 0.5em;
    height: 100%;
    @media screen and (max-width: 30em) {
      padding: 15px;
    }
    & ul {
    justify-content: center;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
        ${sizes.sm} {
          width: 95%;
        }
        ${sizes.mid} {
          width: 80%;
        }
        ${sizes.large} {
          width: 70%;
        }
      }
`
);

const Scroll = styled("ul")`
  padding: 0.5em;
  flex-direction: column;
  overflow-y: scroll;
`;

const Space = ({ title, link, desc }) => {
  return (
    <li style={{ marginTop: "1em" }}>
      <a href={link}>
        <h3>{title}</h3>
      </a>
      <p>{desc}</p>
    </li>
  );
};

export default () => {
  return (
    <Item flexDirection="column">
      <h2 style={{ fontSize: "2em" }}>
        Here's a list of some projects I've done.
      </h2>
      <p>
        They're mostly for fun and learning. Although some may become more
        "official" open source projects I'll support and maintain.
      </p>
      <Scroll>
        {data.map(({ title, link, desc }) => {
          return <Space title={title} link={link} desc={desc} />;
        })}
      </Scroll>
    </Item>
  );
};
