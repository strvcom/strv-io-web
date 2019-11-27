import React, { FC } from 'react'
import { StyledFrame } from '../utils/frame'
import { Item } from 'components/FilteredList/List'

interface Props {
  entry: any
}

const ToolPreview: FC<Props> = ({ entry }) => {
  const data = entry.getIn(['data']).toJS()
  return (
    <StyledFrame>
      <Item repo={data} />
    </StyledFrame>
  )
}

export default ToolPreview
