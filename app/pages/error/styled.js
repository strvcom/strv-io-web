import styled from 'styled-components'
import variables from 'common/styleVariables'
import { mq } from 'common/media'

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`

export const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  background-image: url('/static/assets/error.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 59px;
  ${mq.tablet` padding-top: 79px;flex-direction: row;`};
`

export const ErrorTitle = styled.h2`
  font-family: ${variables.fonts.headline};
  color: ${variables.colors.white};
  font-size: 48px;
  line-height: 48px;
  margin: 0 auto;
  max-width: 250px;
  max-width: 80px;
  text-align: center;
  padding-top: 50px;
  ${mq.tablet`padding-top: 0;  text-align: left;  font-size: 160px;  line-height: 160px;  max-width: 300px;`};
  ${mq.tabletWide` font-size: 180px;  line-height: 180px;`};
`

export const TitleWrapper = styled.div`
  width: 50%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const QuoteWrapper = styled.div`
  width: 50%;
  text-align: left;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const ErrorQuote = styled.p`
  font-family: ${variables.fonts.subHeadline};
  font-size: 20px;
  line-height: 20px;
  max-width: 300px;
  margin: 0 auto;
  text-align: center;
  color: ${variables.colors.white};
  ${mq.tablet` font-size: 24px; line-height: 36px;`};
  ${mq.tabletWide` font-size: 32px;  line-height: 48px; `};
`

export const ErrorQuoteAuthor = styled.p`
  font-family: ${variables.fonts.primary};
  font-size: 14px;
  line-height: 14px;
  max-width: 300px;
  margin: 30px auto 0 auto;
  text-align: center;
  color: ${variables.colors.white};
  ${mq.tablet` font-size: 16px; line-height: 16px;`};
`
