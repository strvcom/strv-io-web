import React from 'react'
import ROUTES from 'common/routes'
import Button from 'components/Button'
import { InnerWrapper, Title, Message, Img } from './styled'

const ErrorPage = () => (
  <InnerWrapper>
    <Title>You Got Lost</Title>
    <Message>
      Go back, you must. <br /> Do or do not. There is no try.
    </Message>
    <Img src="/assets/yoda.png" alt="Yoda" />
    <Button href={ROUTES.HOME} prefetch={true} aria-label="home">
      Go back to home
    </Button>
  </InnerWrapper>
)

export default ErrorPage
