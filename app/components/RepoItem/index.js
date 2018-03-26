import React from 'react'
import styled from 'styled-components'
import variables from 'common/styleVariables'
import PropTypes from 'prop-types'
import { mq } from 'common/media'

const Wrapper = styled.a`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  padding: 57px 0 0 0;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  width: 100%;
  ${mq.tablet`
    width: 380px;
`};
  &:hover {
    h2 {
      color: ${variables.colors.primary};
    }
  }
`
const Name = styled.h2`
  font-family: ${variables.fonts.primary};
  font-size: 20px;
  font-weight: 700;
  color: ${variables.colors.white};
  letter-spacing: 0.1px;
  text-align: center;
  line-height: 32px;
  transition: color 0.4s ease;
  margin: 26px 0 6px 0;
  max-width: 300px;
`
const Description = styled.div`
  font-family: ${variables.fonts.primary};
  font-size: 16px;
  color: ${variables.colors.grey};
  text-align: center;
  font-weight: 300;
  line-height: 24px;
  width: 100%;
  max-width: 300px;
`
const Category = styled.div`
  padding-top: 19px;
  font-family: ${variables.fonts.primary};
  font-size: 12px;
  color: ${variables.colors.greyDarker};
  letter-spacing: 1.6px;
  text-transform: uppercase;
  text-align: center;
  font-weight: 600;
  line-height: 20px;
`
const IconWrapper = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const RepoItem = props => (
  <Wrapper {...props} target="_blank">
    <IconWrapper>{props.repo.icon}</IconWrapper>
    <Name>{props.repo.name}</Name>
    <Description>{props.repo.description}</Description>
    <Category>{props.repo.category}</Category>
  </Wrapper>
)

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
}

export default RepoItem
