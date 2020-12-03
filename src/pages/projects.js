/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import data from "../temp/projectsData.js";
import { SiteLink } from "../temp/componentsList.js";
import { Flex } from "../temp/componentsList.js";
import facepaint from "facepaint";
import CreateEl from "../CreateEl.js";

const mq = facepaint([
  "@media(min-width: 570px)",
  "@media(min-width: 920px)",
  "@media(min-width: 1120px)",
]);

const Item = (props) => {
  const style = css`
    padding: 0.5em;
    flex-direction: column;
    width: 70%;
    flex: 1;
    @media screen and (max-width: 30em) {
      padding: 15px;
    }
    & ul {
      ${mq({
        width: ["fit-content", "80%", "80%"],
      })}
    }
  `;
  return <CreateEl tag={Flex} obj={style} {...props}></CreateEl>;
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
      <ul>
        {data.map(({ title, link, desc }) => {
          return (
            <li>
              <SiteLink href={link}>
                <h3>{title}</h3>
              </SiteLink>
              <p>{desc}</p>
            </li>
          );
        })}
      </ul>
    </Item>
  );
};
