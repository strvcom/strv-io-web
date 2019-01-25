import React from 'react'
import PropTypes from 'prop-types'
import { Link, Name, Description, Category, IconWrapper } from './styled'

const Item = ({ repo }) => (
  <Link href={repo.url} target="_blank" rel="noopener noreferrer">
    <IconWrapper dangerouslySetInnerHTML={{ __html: repo.icon }} />
    <Name>{repo.name}</Name>
    <Description>{repo.description}</Description>
    <Category>{repo.category}</Category>
  </Link>
)

Item.propTypes = {
  repo: PropTypes.shape({
    category: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
}

export default Item
