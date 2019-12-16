import React from 'react'
import styled from 'styled-components'
import { Link as GatsbyLink } from 'gatsby'
import theme from 'styles/theme'
import { mq } from 'styles/media'

interface WrapperProps {
  isPrimary?: boolean
  to?: string
  replace?: boolean
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
export const Wrapper = styled(({ isPrimary, ...props }) => (
  <GatsbyLink {...props} />
))<WrapperProps>`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex: 1 1 auto;
  margin: 1.6rem 0;
  padding: 1rem 2rem;
  width: 22rem;
  border: 3px solid ${theme.colors.black};
  cursor: pointer;
  transition: border 200ms ease;

  ${mq.tablet} {
    width: 30rem;
  }

  ${mq.tabletWide} {
    margin: 0 1rem;
    padding: 2rem 3rem;
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
  width: 20rem;
  min-height: 25rem;
  height: auto;
  margin: 0;
  margin-bottom: 3rem;

  ${mq.tabletWide} {
    width: 25rem;
    margin-bottom: 7.8rem;
  }
`

export const Title = styled.h2`
  font-family: ${theme.fonts.primary};
  color: ${theme.colors.white};
  font-weight: ${theme.fontWeight.bold};
  line-height: 20px;
  font-size: 1.8rem;
  letter-spacing: 0.1;
  text-align: center;
  margin: 0;
  margin-bottom: 1.6rem;

  ${mq.tabletWide} {
    line-height: 32px;
    font-size: 2rem;
  }
`

export const Description = styled.p`
  font-family: ${theme.fonts.primary};
  color: ${theme.colors.grey};
  font-weight: ${theme.fontWeight.light};
  line-height: 20px;
  font-size: 1.4rem;
  letter-spacing: 0;
  text-align: center;
  margin: 0;

  ${mq.tabletWide} {
    line-height: 24px;
    font-size: 1.6rem;
  }
`
