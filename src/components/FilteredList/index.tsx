import React, { useState, useEffect } from 'react'
import queryString from 'query-string'
import { Category } from 'common/enums'
import { Data } from 'common/types'
import { Main } from 'components/Layout/styled'
import { sortItems } from './helpers'
import { Filter } from './Filter'
import { List } from './List'

export const FilteredList: React.FunctionComponent<Data> = ({ data }) => {
  const items = sortItems(data.allItemsJson.edges)

  const windowQuery =
    typeof window !== `undefined` ? window.location.search : ''

  const query = queryString.parse(windowQuery)

  const [filter, setFilter] = useState(
    typeof query.search === 'string' ? query.search : Category.All
  )

  const stateObj = {
    search: filter,
  }

  const filterItems = async (categoryName: Category) => {
    await setFilter(categoryName)
  }

  useEffect(() => {
    window.history.pushState(stateObj, filter, `?search=${filter}`)
  })

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
