import React, { FC } from 'react'
import { Wrapper, Link } from './styled'

interface Props {
  text: string
  main?: boolean
  animate?: boolean
}

const Item: FC<Props> = ({ text, animate, main }) => (
  <Wrapper>
    <Link animate={animate} main={main}>
      <span className="layer" data-text={text} />
      {text}
    </Link>
  </Wrapper>
)

export default Item
