import React from 'react'
import Link from 'next/link'
import { InnerWrapper, Title, Message, Img } from './styled'
import { ButtonLink } from 'components/Button'

const ErrorPage = () => (
  <InnerWrapper>
    <Title>You Got Lost</Title>
    <Message>
      Go back, you must. <br /> Do or do not. There is no try.
    </Message>
    <Img src="/static/assets/yoda.png" alt="Yoda" />
    <Link prefetch href="/" passHref>
      <ButtonLink>Go back to home</ButtonLink>
    </Link>
  </InnerWrapper>
)

export default ErrorPage
