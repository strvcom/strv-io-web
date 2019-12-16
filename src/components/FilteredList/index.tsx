import React, { FC } from 'react'
import { Filter } from './Filter'
import { List } from './List'
import { RepoNode } from 'common/types'
import { Main } from 'components/Layout/styled'

interface Props {
  pageRoot: string
  category: string
  data: RepoNode[]
}

export const FilteredList: FC<Props> = ({ pageRoot, data, category }) => (
  <>
    <Filter pageRoot={pageRoot} activeCategory={category} />
    <Main>
      <List data={data} filter={category} />
    </Main>
  </>
)

export default FilteredList
