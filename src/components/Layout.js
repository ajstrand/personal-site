import React from 'react'
import { Link } from 'gatsby'

import "./layout.css"

import { rhythm, scale } from '../utils/typography'
import {darkCheck} from '../utils/darkCheck';
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

const StyledContainer = styled.div `
  height:100%;
  margin-left: auto;
  margin-right: auto;
  maxWidth: ${rhythm(24)};
  @media screen and (min-width:30em) {
    padding: ${rhythm(1.5)} ${rhythm(3 / 4)}
  }
`;

const Item = styled.div`
  padding:0.5em;
  display:flex;
  flex-direction:column;
`
const Box = styled(Item)`
  width:100%;
  @media screen and (min-width:30em) {
    width:70%;
  height:40%;
  }
`

const LinksBox = styled(Box)`
  display:flex;
  flex-direction:column;
  justify-content:center;
  background-color:#BFD1E5;
  @media screen and (min-width:30em) {
    height:4em;
    transform:translate(-20px, 58%);
    flex-direction:row;
  }
`

const BottomLink = styled(Link)`
color:#542344;
margin:0.5em;
`;

const StyledAnchorTag = styled.a`
margin:0.5em;
`;

class Layout extends React.Component {
  componentDidMount(){
    darkCheck();
  }
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    /*if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }*/
    return (
      <StyledContainer
      >
        {/* {header} */}
        {children}
        <LinksBox>
        <BottomLink style={{ boxShadow: `none` }} to="/resume">
            Resume
                </BottomLink>
          <BottomLink style={{ boxShadow: `none` }} to="/projects">
            Projects
                </BottomLink>
          <BottomLink style={{ boxShadow: `none` }} to="/">
            Home
                </BottomLink>
                <BottomLink style={{ boxShadow: `none` }} to="/posts">
            Blog Posts
                </BottomLink>
          <StyledAnchorTag href="https://twitter.com/_alex_strand">
            <FontAwesomeIcon icon={faTwitter} />
          </StyledAnchorTag>
          <StyledAnchorTag href="https://github.com/ajstrand">
            <FontAwesomeIcon icon={faGithub} />
          </StyledAnchorTag>
          <StyledAnchorTag href="https://www.linkedin.com/in/ajstrand">
            <FontAwesomeIcon icon={faLinkedin} />
          </StyledAnchorTag>

        </LinksBox>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </StyledContainer>
    )
  }
}

export default Layout
