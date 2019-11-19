import React, { useState, useEffect } from 'react'
import queryString from 'query-string'
import { Category } from 'common/enums'
import { Data } from 'common/types'
import { Main } from 'components/Layout/styled'
import { Filter } from './Filter'
import { List } from './List'

export const FilteredList: React.FunctionComponent<Data> = ({ data }) => {
  const windowQuery =
    typeof window !== `undefined` ? window.location.search : ''

  const query = queryString.parse(windowQuery)

  const [filter, setFilter] = useState(
    typeof query.search === 'string' ? query.search : Category.All
  )

  useEffect(() => {
    window.history.replaceState({ search: filter }, filter, `?search=${filter}`)
  }, [filter])

  return (
    <>
      <Filter activeCategory={filter} handleFilter={setFilter} />
      <Main>
        <List data={data.allItemsJson.edges} filter={filter} />
      </Main>
    </>
  )
}

export default FilteredList
