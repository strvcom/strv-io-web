import React, { FC } from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { Wrapper, Link } from './styled'

interface Props {
  title: string
  link: string
  external?: boolean
  main?: boolean
  animate?: boolean
}

const Item: FC<Props> = ({ title, link, animate, main }) => (
  <Wrapper>
    {!external ? (
      <Link as={GatsbyLink} to={link} animate={animate} main={main}>
        <span className="layer" data-text={title} />
        {title}
      </Link>
    ) : (
      <Link href={link} rel="noopener noreferrer" animate={animate} main={main}>
        <span className="layer" data-text={title} />
        {title}
      </Link>
    )}
  </Wrapper>
)

export default Item
