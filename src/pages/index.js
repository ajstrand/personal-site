import React from 'react'
import { graphql } from 'gatsby'

import 'prismjs/themes/prism-tomorrow.css'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import styled from 'styled-components'

const Item = styled.section`
  background-color: #f0eee3;
  padding: 0.5em;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 30em) {
    padding: 15px;
  }
`

const SiteIndex = props => {
  const { data, location } = props
  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout location={location} title={siteTitle}>
      <Item>
        <SEO
          title="Alex Strand"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <Bio />
      </Item>
    </Layout>
  )
}

export default SiteIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
