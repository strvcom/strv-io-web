import React from 'react'
import { Wrapper, Title, ArticleLink } from './styled'
import Social from 'components/Social'

const Footer = () => (
  <Wrapper>
    <Title>Continue Browsing</Title>
    <ArticleLink
      href="https://www.strv.com/blog/tag/engineering"
      target="_blank"
      rel="noopener noreferrer"
    >
      Read articles about STRV open source libraries
    </ArticleLink>
    <Social />
  </Wrapper>
)

export default Footer
