import React, { Fragment } from 'react'
import { Link } from 'gatsby'

import "./layout.css"

import { rhythm} from '../utils/typography'
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

const StyledContainer = styled.div`
height:100%;
width:100%;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-column-gap: 0px;
grid-row-gap: 0px;
  maxWidth: ${rhythm(24)};
  @media screen and (min-width:30em) {
    grid-template-rows: 1fr 1fr 1fr;
    background: #d76d77;
      }
`;

const LinksBox = styled.div`
width:100%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  @media screen and (min-width:30em) {
    flex-direction:row;
    align-items:center;
  }
`;

const BottomContent = styled.div `
@media screen and (max-width:30em) {
  background-color: #ffaf7b;
  grid-column-start:1;
  grid-column-end:end;
  padding:10px;
}
@media screen and (min-width:30em) {
  grid-row-start:4;
  grid-column-start:2;
}`


const BottomLink = styled(Link)`
color:#ffffff;
margin: 0 0.5em 0 0.5em;
@media screen and (max-width:30em) {
  color: #3A1C71;
}
@media screen and (min-width:30em) {
  font-size:15px;

}
`;

const StyledAnchorTag = styled.a`
width:25px;
color:#ffffff;
margin:0.5em;
@media screen and (max-width:30em) {
  color: #3A1C71;
  ;
}
`;

const StyledFooter = styled.footer`
color: #3A1C71;
font-size:17px;
flex-shrink: 0;
@media screen and (min-width:30em) {
  color:#ffffff;
}
`;

const StyledLink = styled.a`
@media screen and (max-width:30em) {
  color: #3A1C71;
  ;
}
font-size:17px;
color:#ffffff;
`;

class Layout extends React.Component {
  render() {
    const { children, location } = this.props

    return (
      <Fragment>
<StyledContainer
      >

          {children}
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
           Blog
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
         © {new Date().getFullYear()} Alex Strand, Built with
       {' '}
         <StyledLink target="_blank" href="https://www.gatsbyjs.org">Gatsby</StyledLink>
         {' '}and hosted on{' '} 
          <StyledLink target="_blank" href="https://www.netlify.com">Netlify</StyledLink>

       </StyledFooter>
     </BottomContent>
      </StyledContainer>
      
      </Fragment>
      
    )
  }
}

export default Layout
