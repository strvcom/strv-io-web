import React from 'react'
import styled from 'styled-components'
import variables from 'common/styleVariables'
import { mq } from 'common/media'
import Social from 'components/Social'

const Wrapper = styled.footer`
  margin: 0 auto;
  text-align: center;
  padding: 0 30px;
  ${mq.tabletWide`
  max-width: 600px;
`};
`
const ContinueButton = styled.div`
  font-family: ${variables.fonts.primary};
  font-size: 20px;
  color: #ffffff;
  text-align: left;
  padding: 136px 0 29px 0;
`

const ArticleLink = styled.a`
  color: ${variables.colors.primary};
  font-family: ${variables.fonts.primary};
  font-size: 18px;
  font-weight: 300;
  letter-spacing: 0.1px;
  width: 100%;
  border-top: solid 1px rgba(136, 136, 136, 0.2);
  border-bottom: solid 1px rgba(136, 136, 136, 0.2);
  background-image: url('data:image/svg+xml;utf8,
    <svg width="13px" height="13px" viewBox="0 0 13 13" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <desc>Created with Sketch.</desc>
        <defs></defs>
        <g id="Final" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="03-1-1-Services" transform="translate(-995.000000, -2056.000000)" fill="#FFEFEF">
                <g id="Group" transform="translate(995.000000, 2056.000000)">
                    <rect id="Rectangle-47" x="3" y="0" width="10" height="2"></rect>
                    <rect id="Rectangle-47-Copy" transform="translate(12.000000, 5.000000) rotate(-90.000000) translate(-12.000000, -5.000000) " x="7" y="4" width="10" height="2"></rect>
                    <rect id="Rectangle-47-Copy-2" transform="translate(6.474874, 6.474874) rotate(-45.000000) translate(-6.474874, -6.474874) " x="-1.68198052" y="5.47487373" width="16.3137085" height="2"></rect>
                </g>
            </g>
        </g>
    </svg>');
  background-position: center right;
  background-repeat: no-repeat;
  padding: 20px 20px 20px 0;
  display: inline-block;
  text-align: left;
`
const Footer = () => (
  <Wrapper>
    <ContinueButton>Continue Browsing</ContinueButton>
    <ArticleLink href="https://www.strv.com/blog/tag/tech" target="_blank">
      Read articles about STRV open source libraries
    </ArticleLink>
    <Social />
  </Wrapper>
)

export default Footer
