import React from 'react'
import styled from 'styled-components'
import { Link as GatsbyLink } from 'gatsby'
import GatsbyImg from 'gatsby-image'
import theme from 'styles/theme'
import { mq } from 'styles/media'

interface WrapperProps {
  isPrimary?: boolean
  to?: string
  replace?: boolean
}

export const Img = styled(GatsbyImg)`
  width: 100%;
  height: 25rem;
  margin: 0;
  margin-bottom: 3rem;
  transition: transform 0.2s ease-in-out 0.1s;

  img {
    object-fit: contain !important;
  }

  ${mq.tabletWide} {
    height: 30rem;
    margin-bottom: 7.8rem;
  }
`

// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
export const Wrapper = styled(({ isPrimary, ...props }) => (
  <GatsbyLink {...props} />
))<WrapperProps>`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 25rem;
  max-width: 380px;
  margin: 1.6rem 0;
  padding: 1rem 2rem;
  border: 3px solid ${theme.colors.black};
  cursor: pointer;
  transition: border 200ms ease-in-out 0.1s,
    background-color 200ms ease-in-out 0.1s;

  ${mq.tablet} {
    flex: 0 1 30rem;
    width: auto;
  }

  ${mq.tabletWide} {
    margin: 0 1rem;
    padding: 2rem 3rem;
  }

  ${mq.desktop} {
    padding: 3rem 4rem;
    margin: 0 3rem;
  }

  &:hover {
    border: 3px solid ${theme.colors.greyHoverDark};
    background-color: ${theme.colors.greyHoverDark};

    ${Img} {
      transform: scale(1.05);
    }
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
