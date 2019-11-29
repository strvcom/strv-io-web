import React from 'react'
import { Data } from 'common/types'
import { Main } from 'components/Layout/styled'
import { Filter } from './Filter'
import { List } from './List'

export const FilteredList: React.FunctionComponent<
  Data & { category: string }
> = ({ data, category }) => (
  <>
    <Filter activeCategory={category} />
    <Main>
      <List data={data.allItemsJson.edges} filter={category} />
    </Main>
  </>
)

export default FilteredList
