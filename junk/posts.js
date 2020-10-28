/** @jsx jsx */
/*import { jsx, Global } from "@emotion/core";

import {
  Header1,
  Header3,
  BaseText,
  InternalSiteLink,
  OverflowYScrollContainer,
  ListItem,
} from "../components/componentsList";

function Posts({ data }) {
  const posts = data.allMdx.edges;

  return (
    <OverflowYScrollContainer>
      <Header1 style={{ marginTop: "1rem" }}>Posts</Header1>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug;
        return (
          <ListItem key={node.id}>
            <Header3
              style={{
                marginTop: "1rem",
                marginBottom: rhythm(1 / 4),
              }}
            >
              <InternalSiteLink href={node.fields.slug}>{title}</InternalSiteLink>
            </Header3>
            <small
              style={{
                color: "#000000",
              }}
            >
              {node.frontmatter.date}
            </small>
            <BaseText dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          </ListItem>
        );
      })}
    </OverflowYScrollContainer>
  );
}

export default Posts;*/
