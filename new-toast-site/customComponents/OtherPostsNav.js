/** @jsx jsx */
import { jsx, Global } from "@emotion/core";
import styled from "@emotion/styled";

const OtherPostsList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
const OtherPostsNav = (props) => {
  const { previous, next } = props;
  return (
    <OtherPostsList
      style={{
        padding: "1rem",
        display: `flex`,
        flexWrap: `wrap`,
        justifyContent: `space-between`,
        listStyle: `none`,
      }}
    >
      <li>
        {previous && (
          <a
            aria-label="previous blog entry"
            href={previous.fields.slug}
            rel="prev"
          >
            ← {previous.frontmatter.title}
          </a>
        )}
      </li>
      <li>
        {next && (
          <a aria-label="next blog entry" href={next.fields.slug} rel="next">
            {next.frontmatter.title} →
          </a>
        )}
      </li>
    </OtherPostsList>
  );
};

export default OtherPostsNav;
