/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import data from "../components/projectsData.js";
import { SiteLink } from "../components/componentsList.js";
import { Flex } from "../components/componentsList.js";
import facepaint from "facepaint";
import CreateEl from "../CreateEl.js";

const mq = facepaint([
  "@media(min-width: 700px)",
  "@media(min-width: 920px)",
  "@media(min-width: 1120px)",
]);

const Item = (props) => {
  const style = css`
    padding: 0.5em;
    height: 100%;
    flex-direction: column;
    @media screen and (max-width: 30em) {
      padding: 15px;
    }
    & ul {
      ${mq({
        width: ["95%", "80%", "70%"],
      })}
    }
  `;
  return <CreateEl tag={Flex} obj={style} {...props}></CreateEl>;
};

const Scroll = (props) => {
  const style = css`
    padding: 0.5em;
    flex-direction: column;
    overflow-y: scroll;
  `;
  return <CreateEl tag="ul" obj={style} {...props}></CreateEl>;
};

const Space = ({ title, link, desc }) => {
  return (
    <li style={{ marginTop: "1em" }}>
      <SiteLink href={link}>
        <h3>{title}</h3>
      </SiteLink>
      <p>{desc}</p>
    </li>
  );
};

export default () => {
  return (
    <Item>
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
