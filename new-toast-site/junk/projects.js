/** @jsx jsx */
/*import { jsx, Global } from "@emotion/core";

import styled from '@emotion/styled';
import {
  Header1,
  Header3,
  OverflowYScrollContainer,
} from "../components/componentsList";
import { externalLinkText } from "../utils/helpers";

const Projects = (props) => {
  const { data, location } = props;
  const siteTitle = data.site.siteMetadata.title;
  const projects = data.allProjectsJson.edges;

  return (
    <OverflowYScrollContainer>
      <Header1 style={{ marginTop: "1rem" }}>Projects</Header1>
      {projects.map(({ node }) => {
        const desc = node.desc;
        const title = node.title;
        const link = node.link;
        const anchorTag = externalLinkText(link, title, `${title} project URL`);
        return (
          <section key={node.title}>
            <Header3
              style={{
                marginTop: "1rem",
                marginBottom: rhythm(1 / 4),
              }}
            >
              {anchorTag}
            </Header3>
            <p dangerouslySetInnerHTML={{ __html: desc }} />
          </section>
        );
      })}
    </OverflowYScrollContainer>
  );
};

export default Projects;*/
