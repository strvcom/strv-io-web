import React from 'react'
import PropTypes from 'prop-types'
import { Link, Name, Description, Category, IconWrapper } from './styled'

const Item = ({ repo }) => (
  <Link href={repo.url} target="_blank" rel="noopener noreferrer">
    <IconWrapper>{repo.icon}</IconWrapper>
    <Name>{repo.name}</Name>
    <Description>{repo.description}</Description>
    <Category>{repo.category}</Category>
  </Link>
)

Item.propTypes = {
  repo: PropTypes.shape({
    icon: PropTypes.node.isRequired,
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
}

export default Item
