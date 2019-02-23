import React, { Fragment } from 'react'
import { Link } from 'gatsby'

import "./layout.css"

import { rhythm, scale } from '../utils/typography'
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

const StyledContainer = styled.div`
height:100%;
width:100%;
display:flex;
flex-direction:column;
  maxWidth: ${rhythm(24)};
  @media screen and (min-width:30em) {
    height: 100%;
    background: #3A1C71;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to left, #FFAF7B, #D76D77, #3A1C71);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to left, #FFAF7B, #D76D77, #3A1C71); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      }
`;

const LinksBox = styled.div`
width:100%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  @media screen and (min-width:30em) {
    flex-direction:row;
  }
  @media screen and (min-width:40em) {
    width:75%;
  }
`;

const BottomContent = styled.div `
@media screen and (max-width:30em) {
  background-color: #ffaf7b;
}`


const Content = styled.div `
  flex: 1 0 auto;
`

const BottomLink = styled(Link)`
@media screen and (max-width:30em) {
  color: #3A1C71;
  ;
}
color:#ffffff;
margin:0.5em;
`;

const StyledAnchorTag = styled.a`
@media screen and (max-width:30em) {
  color: #3A1C71;
  ;
}
color:#ffffff;
margin:0.5em;
`;

const StyledFooter = styled.footer`

@media screen and (max-width:30em) {
  color: #3A1C71;
  ;
}
color:#ffffff;
flex-shrink: 0;
`;

const StyledGatsbyLink = styled.a`
@media screen and (max-width:30em) {
  color: #3A1C71;
  ;
}
color:#ffffff;
`;

class Layout extends React.Component {
  render() {
    const { children, location } = this.props

    return (
      <Fragment>
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
      
      </Fragment>
      
    )
  }
}

export default Layout
