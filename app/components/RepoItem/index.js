import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper, Name, Description, Category, IconWrapper } from './styled'

const RepoItem = props => (
  <Wrapper
    {...props}
    href={props.repo.url}
    target="_blank"
    rel="noopener noreferrer"
  >
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
