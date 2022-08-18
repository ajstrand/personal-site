/** @jsx jsx */
import { jsx } from "@emotion/core";

import { styled, setup } from "goober";

setup(h, undefined, useTheme);

const OtherPostsList = styled("ul")`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  list-style: none;
`;

const OtherPostsNav = (props) => {
  const { previous, next } = props;
  return (
    <OtherPostsList>
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
