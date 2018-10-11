import React from 'react'
import { InnerWrapper, Title, Message, Img } from './styled'
import Button from 'components/Button'

const ErrorPage = () => (
  <InnerWrapper>
    <Title>You Got Lost</Title>
    <Message>
      Go back, you must. <br /> Do or do not. There is no try.
    </Message>
    <Img src="/static/assets/yoda.png" alt="Yoda" />
    <Button href="/" prefetch>
      Go back to home
    </Button>
  </InnerWrapper>
)

export default ErrorPage
