import React from 'react'
import styled from 'styled-components'
import variables from 'common/styleVariables'
import PropTypes from 'prop-types'
import { mq } from 'common/media'

const Wrapper = styled.a`
  width: 100%;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 20px;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  ${mq.tablet`
  width: 50%;
`};
  ${mq.desktop`
width: 33.333%;
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
  font-weight: normal;
  color: ${variables.colors.white};
  letter-spacing: 0.1px;
  text-align: center;
  line-height: 32px;
  transition: color 0.4s ease;
  text-transform: lowercase;
`
const Description = styled.div`
  font-family: ${variables.fonts.primary};
  font-size: 16px;
  color: ${variables.colors.grey};
  text-align: center;
  font-weight: 300;
  line-height: 24px;
  width: 100%;
`
const Category = styled.div`
  padding-top: 15px;
  font-family: ${variables.fonts.primary};
  font-size: 12px;
  color: ${variables.colors.greyDarker};
  letter-spacing: 1.6px;
  text-transform: uppercase;
  text-align: center;
  font-weight: 600;
`

const RepoItem = ({ repo }) => (
  <Wrapper href={repo.url} target="_blank">
    {repo.icon}
    <Name>{repo.name}</Name>
    <Description>{repo.description}</Description>
    <Category>{repo.category}</Category>
  </Wrapper>
)

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
}

export default RepoItem
