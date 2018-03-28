import React from 'react'
import Social from 'components/Social'
import { Wrapper, ContinueButton, ArticleLink } from './styled'

const Footer = () => (
  <Wrapper>
    <ContinueButton>Continue Browsing</ContinueButton>
    <ArticleLink
      href="https://www.strv.com/blog/tag/tech"
      target="_blank"
      rel="noopener noreferrer"
    >
      Read articles about STRV open source libraries
    </ArticleLink>
    <Social />
  </Wrapper>
)

export default Footer
