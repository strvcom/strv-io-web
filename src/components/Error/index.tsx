import React from 'react'
import ROUTES from 'common/routes'
import Button from 'components/Button'
import { InnerWrapper, Title, Message, Img } from './styled'

const ErrorPage = () => {
  const returnHome = () => {
    window.location.assign(ROUTES.HOME)
  }

  return (
    <InnerWrapper>
      <Title>You Got Lost</Title>
      <Message>
        Go back, you must. 
{' '}
<br /> Do or do not. There is no try.
      </Message>
      <Img src="/assets/yoda.png" alt="Yoda" />
      <Button onClick={returnHome} aria-label="home">
        Go back to home
      </Button>
    </InnerWrapper>
  )
}

export default ErrorPage
