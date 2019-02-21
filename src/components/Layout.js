import React from 'react'
import { Link } from 'gatsby'

import "./layout.css"

import { rhythm, scale } from '../utils/typography'
import { darkCheck } from '../utils/darkCheck';
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

const StyledContainer = styled.div`
  height:100%;
  margin-left: auto;
  margin-right: auto;
  maxWidth: ${rhythm(24)};
  @media screen and (min-width:30em) {
    padding: ${rhythm(1.5)} ${rhythm(3 / 4)} 0.5rem ${rhythm(3 / 4)}
  }
`;

const LinksBox = styled.div`
width:100%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  background-color:#BFD1E5;
  @media screen and (min-width:30em) {
    transform:translate(-20px, 2em);
    flex-direction:row;
  }
  @media screen and (min-width:40em) {
    width:75%;
  }
`;

const BottomContent = styled.div `
@media screen and (min-width:30em) {
  height:15%;
}
`

const Content = styled.div `
@media screen and (min-width:30em) {
  height:85%;
}
`

const BottomLink = styled(Link)`
color:#542344!important;
margin:0.5em;
`;

const StyledAnchorTag = styled.a`
color:#542344!important;
margin:0.5em;
`;

const StyledFooter = styled.footer`
@media screen and (min-width:30em) {
  transform:translate(9em, 3em);
  width:16em;
}
`;
const theme = {
  regular: "#542344!important",
  dark: "#ffffff"
}

let isDark;

const StyledGatsbyLink = styled.a`
color:${props => {
    if (isDark) {
      return props.theme.dark
    }
    else {
      return props.theme.regular
    }
  }}
`;

class Layout extends React.Component {
  componentDidMount() {
    isDark = darkCheck();
  }
  render() {
    const { children } = this.props

    return (
      <StyledContainer
      >
        <Content>
          {children}
        </Content>
        <BottomContent>
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
          <StyledFooter>
            © {new Date().getFullYear()}, Built with
          {` `}
            <StyledGatsbyLink href="https://www.gatsbyjs.org">Gatsby</StyledGatsbyLink>
          </StyledFooter>
        </BottomContent>
      </StyledContainer>
    )
  }
}

export default Layout
