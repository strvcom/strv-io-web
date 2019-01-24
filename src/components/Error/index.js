import React from 'react'
import ROUTES from 'common/routes'
import Button from 'components/Button'
import { InnerWrapper, Title, Message, Img } from './styled'

const Error = () => (
  <InnerWrapper>
    <Title>You Got Lost</Title>
    <Message>
      Go back, you must. <br /> Do or do not. There is no try.
    </Message>
    <Img src="/static/assets/yoda.png" alt="Yoda" />
    <Button href={ROUTES.HOME} prefetch>
      Go back to home
    </Button>
  </InnerWrapper>
)

export default Error
