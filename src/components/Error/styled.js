import react from 'react'
import styled from 'styled-components'
import theme from 'styles/theme'
import { mq } from 'styles/media'

export const InnerWrapper = styled.div`
  min-height: 100vh;
  padding: 10rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  ${mq.tablet} {
    padding: 4rem 0;
  }
`

export const Title = styled.h1`
  font-family: ${theme.fonts.headline};
  color: ${theme.colors.white};
  font-weight: ${theme.fontWeight.bold};
  font-size: 3.6rem;
  line-height: 1;
  text-transform: uppercase;
  margin: 0;

  ${mq.tablet} {
    font-size: 4.8rem;
  }

  ${mq.tabletWide} {
    font-size: 7.2rem;
  }
`

export const Message = styled.p`
  font-weight: 300;
  font-size: 2rem;
  line-height: 26px;
  color: ${theme.colors.white};
  font-family: ${theme.fonts.primary};
  margin: 2.5rem 0;

  ${mq.tabletWide} {
    font-size: 2.2rem;
    line-height: 32px;
  }
`

export const Img = styled.img`
  max-width: 16rem;

  ${mq.tablet} {
    max-width: initial;
  }
`
