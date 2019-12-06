import styled from 'styled-components'
import theme from 'styles/theme'
import { mq } from 'styles/media'

interface WrapperProps {
  isPrimary?: boolean
  to?: string
  replace?: boolean
}

export const Wrapper = styled.button<WrapperProps>`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 1rem 0;
  padding: 2rem 3rem;
  width: 25rem;
  border: 3px solid ${theme.colors.black};
  cursor: pointer;
  transition: border 200ms ease;

  ${mq.tablet} {
    width: 30rem;
  }

  ${mq.tabletWide} {
    margin: 0 1rem;
    width: 30rem;
  }

  ${mq.desktop} {
    padding: 3rem 4rem;
    width: 30rem;
    margin: 0 3rem;
  }

  &:hover {
    border: 3px solid ${theme.colors.greyBorder};
  }
`

export const Img = styled.img`
  width: 25rem;
  height: 34rem;
  margin: 0;
  margin-bottom: 7.8rem;
`

export const Title = styled.h2`
  font-family: ${theme.fonts.primary};
  color: ${theme.colors.white};
  font-weight: ${theme.fontWeight.bold};
  line-height: 32px;
  font-size: 2rem;
  letter-spacing: 0.1;
  text-align: center;
  margin: 0;
  margin-bottom: 1.6rem;
`

export const Description = styled.p`
  font-family: ${theme.fonts.primary};
  color: ${theme.colors.grey};
  font-weight: ${theme.fontWeight.light};
  line-height: 24px;
  font-size: 1.6rem;
  letter-spacing: 0;
  text-align: center;
  margin: 0;
`
