import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const OtherPostsList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`
const OtherPostsNav = props => {
  const { previous, next } = props
  return (
    <OtherPostsList
      style={{
        padding: '1rem',
        display: `flex`,
        flexWrap: `wrap`,
        justifyContent: `space-between`,
        listStyle: `none`,
      }}
    >
      <li>
        {previous && (
          <Link
            aria-label="previous blog entry"
            to={previous.fields.slug}
            rel="prev"
          >
            ← {previous.frontmatter.title}
          </Link>
        )}
      </li>
      <li>
        {next && (
          <Link aria-label="next blog entry" to={next.fields.slug} rel="next">
            {next.frontmatter.title} →
          </Link>
        )}
      </li>
    </OtherPostsList>
  )
}

export default OtherPostsNav
