import React from 'react'
import Link from 'next/link'
import { InnerWrapper, Title, Message, Yoda } from './styled'
import Button from 'components/Button'

const ErrorPage = () => (
  <InnerWrapper>
    <Title>you got lost</Title>
    <Message>
      Go back, you must. <br /> Do or do not. There is no try.
    </Message>
    <Yoda />
    <Link prefetch href="/" passHref>
      <Button>go back to home</Button>
    </Link>
  </InnerWrapper>
)

export default ErrorPage
