import React from 'react';
import { graphql } from 'gatsby';

import 'prismjs/themes/prism-tomorrow.css';

import Bio from '../components/Bio';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import styled from "styled-components";


const Item = styled.section`
  padding:0.5em;
  display:flex;
  flex-direction:column;
  width:100%;
justify-content:center;
align-items:center;
grid-row-start: 1;
  grid-row-end: 3;
  grid-column-start:1;
  grid-column-end:end;
@media screen and (max-width:30em) {
  padding:15px;
  background-color:#3a1c71;
}
`;

class SiteIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    return (
      <Layout location={this.props.location} title={siteTitle}>
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
