import React, { useState } from 'react'
import queryString from 'query-string'
import { Category } from 'common/enums'
import { Data } from 'common/types'
import { Main } from 'components/Layout/styled'
import { sortItems } from './helpers'
import { Filter } from './Filter'
import { List } from './List'

export const FilteredList: React.FunctionComponent<Data> = ({ data }) => {
  const items = sortItems(data.allItemsJson.edges)
  const query = queryString.parse(window.location.search)

  const [filter, setFilter] = useState(
    query.search ? query.search[0] : Category.All
  )

  const stateObj = {
    search: filter,
  }

  const filterItems = (categoryName: Category) => {
    setFilter(categoryName)
    window.history.pushState(stateObj, filter, `?search=${filter}`)
  }

  return (
    <>
      <Filter activeCategory={filter} handleFilter={filterItems} />
      <Main>
        <List data={items} filter={filter} />
      </Main>
    </>
  )
}

export default FilteredList
