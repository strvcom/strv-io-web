import React, { FC } from 'react'
import { Wrapper, Link, ExternalLink } from './styled'

interface Props {
  title: string
  link: string
  active?: boolean
  isInternal?: boolean
  main?: boolean
  animate?: boolean
}

const Item: FC<Props> = ({
  title,
  link,
  animate,
  main,
  active,
  isInternal,
}) => (
  <Wrapper>
    {isInternal ? (
      <Link to={link} animate={animate && !active} main={main} active={active}>
        <span className="layer" data-text={title} />
        {title}
      </Link>
    ) : (
      <ExternalLink
        href={link}
        rel="noopener noreferrer"
        animate={animate && !active}
        main={main}
      >
        <span className="layer" data-text={title} />
        {title}
      </ExternalLink>
    )}
  </Wrapper>
)

export default Item
