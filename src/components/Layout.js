import React, { Fragment } from 'react'
import { Link } from 'gatsby'

import "./layout.css"

import { rhythm} from '../utils/typography'
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

const StyledContainer = styled.main`
color:#ffffff;
height:100%;
width:100%;
display: grid;
grid-template-columns: 1fr;
grid-template-rows: 1fr 1fr;
grid-column-gap: 0px;
grid-row-gap: 0px;
  maxWidth: ${rhythm(24)};
  @media screen and (min-width:30em) {
    grid-template-rows: 1fr 50px;
    background: #d76d77;
      }
`;

const LinksBox = styled.section`
width:100%;
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content:center;
  align-items:center;
`;

const BottomContent = styled.section `
grid-row-start:3;
grid-column-start:1;
grid-column-end:end;
background-color: #ffaf7b;

@media screen and (max-width:30em) {
  padding:10px;
}`


const BottomLink = styled(Link)`
margin: 0 0.5em 0 0.5em;
color: #3A1C71;
@media screen and (min-width:30em) {
  font-size:15px;
}
`;

const StyledAnchorTag = styled.a`
width:25px;
color: #3A1C71;

margin:0.5em;
`;

const StyledFooter = styled.footer`
color: #3A1C71;
font-size:17px;
display:flex;
flex-shrink: 0;
flex-direction:row;
@media screen and (max-width:30em) {
  justify-content:flex-start;
}
justify-content:center;
align-items:center;
`;

const StyledLink = styled.a`
  color: #3A1C71;
font-size:17px;
`;

class Layout extends React.Component {
  render() {
    const { children} = this.props
    const text = `
    © ${new Date().getFullYear()} Alex Strand.`;
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
         <StyledAnchorTag aria-label="Twiiter" href="https://twitter.com/_alex_strand">
           <FontAwesomeIcon icon={faTwitter} />
         </StyledAnchorTag>
         <StyledAnchorTag aria-label="Github" href="https://github.com/ajstrand">
           <FontAwesomeIcon icon={faGithub} />
         </StyledAnchorTag>
         <StyledAnchorTag aria-label="Linkedin" href="https://www.linkedin.com/in/ajstrand">
           <FontAwesomeIcon icon={faLinkedin} />
         </StyledAnchorTag>

       </LinksBox>
       <StyledFooter tabIndex={0}>
       <p>
       {text} Built with <StyledLink  aria-label="Gatsby website URL" target="_blank" href="https://www.gatsbyjs.org">Gatsby</StyledLink>
          and hosted on 
  <StyledLink aria-label="Netlify website URL" target="_blank" href="https://www.netlify.com">Netlify</StyledLink>
       </p>
    
       </StyledFooter>
     </BottomContent>
      </StyledContainer>
      
      </Fragment>
      
    )
  }
}

export default Layout
