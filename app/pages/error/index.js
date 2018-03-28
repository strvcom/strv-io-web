import React from 'react'
import Header from 'components/Header'
import {
  Wrapper,
  ErrorWrapper,
  ErrorTitle,
  ErrorQuote,
  ErrorQuoteAuthor,
  TitleWrapper,
  QuoteWrapper,
} from './styled'

const ErrorPage = () => (
  <Wrapper>
    <Header />
    <ErrorWrapper>
      <TitleWrapper>
        <ErrorTitle>YOU GOT LOST</ErrorTitle>
      </TitleWrapper>
      <QuoteWrapper>
        <ErrorQuote>
          “We cannot teach people anything; we can only help them discover it
          within themselves.”
        </ErrorQuote>
        <ErrorQuoteAuthor>GALILEO GALILEI</ErrorQuoteAuthor>
      </QuoteWrapper>
    </ErrorWrapper>
  </Wrapper>
)

export default ErrorPage
