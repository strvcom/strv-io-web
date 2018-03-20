import React from 'react'
import styled from 'styled-components'
import variables from 'common/styleVariables'

const Wrapper = styled.footer``
const ArticleLink = styled.a`
  color: ${variables.colors.primary};
  font-family: ${variables.fonts.primary};
  font-size: 18px;
  letter-spacing: 0.1px;
  line-height: 32px;
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
  background-position: top right;
  background-repeat: no-repeat;
`
const Social = styled.div``

const Footer = () => (
  <Wrapper>
    <ArticleLink>Read articles about STRV open source libraries</ArticleLink>
    <Social />
  </Wrapper>
)

export default Footer
