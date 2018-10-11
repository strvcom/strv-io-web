import styled from 'styled-components'
import variables from 'common/styleVariables'
import { mq } from 'common/media'

export const Name = styled.h3`
  font-family: ${variables.fonts.primary};
  font-size: 2rem;
  font-weight: ${variables.fontWeight.bold};
  color: ${variables.colors.white};
  letter-spacing: 0.1px;
  text-align: center;
  line-height: 32px;
  transition: color 0.4s ease;
  margin: 26px auto 6px auto;
  max-width: 300px;
`

export const Link = styled.a`
  display: inline-block;
  padding: 57px 0 0 0;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  width: 100%;

  ${mq.tablet} {
    width: 380px;
  }

  &:hover {
    ${Name} {
      color: ${variables.colors.primary};
    }
  }
`

export const Description = styled.p`
  font-family: ${variables.fonts.primary};
  font-size: 1.6rem;
  color: ${variables.colors.grey};
  text-align: center;
  font-weight: ${variables.fontWeight.light};
  line-height: 24px;
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
`

export const Category = styled.span`
  display: block;
  padding-top: 19px;
  font-family: ${variables.fonts.primary};
  font-size: 1.2rem;
  color: ${variables.colors.greyDarker};
  letter-spacing: 1.6px;
  text-transform: uppercase;
  text-align: center;
  font-weight: ${variables.fontWeight.semibold};
  line-height: 20px;
  margin: 0 auto;
`

export const IconWrapper = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`
