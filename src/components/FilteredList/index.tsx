import React, { useState, useEffect } from 'react'
import { Category } from 'common/enums'
import { RepoNode } from 'common/types'
import { Main } from 'components/Layout/styled'
import { Filter } from './Filter'
import { List } from './List'

type Props = {
  activeCategory: Category
  items: RepoNode[]
}

import { SITE_METADATA } from '../common/constants'

interface Props {
  data: {
    allItemsJson: {
      edges: RepoNode[]
    }
  }
  location: any
}

enum CategoryPriority {
  backend = 1,
  android = 2,
  ios = 3,
  iot = 4,
}

const sortItems = (repos: RepoNode[]): RepoNode[] =>
  repos
    .sort((repo1: RepoNode, repo2: RepoNode) =>
      repo1.node.isFeatured === repo2.node.isFeatured
        ? 0
        : repo1.node.isFeatured
        ? -1
        : 1
    )
    .sort(
      (repo1: RepoNode, repo2: RepoNode) =>
        CategoryPriority[repo1.node.category] -
        CategoryPriority[repo2.node.category]
    )

export const FilteredList: React.SFC<Props> = ({ data }) => {
  const items = sortItems(data.allItemsJson.edges)

  const query = queryString.parse((location || {}).search)

  // Show all as default
  const categories = Object.keys(Category).map(
    categoryKey => Category[categoryKey]
  )
  const category =
    query.filter && categories.indexOf(query.filter) >= 0
      ? query.filter
      : Category.All

  const data =
    activeCategory === Category.All
      ? items
      : items.filter(repo => repo.node.category === activeCategory)

  return (
    <>
      <Filter activeCategory={category} handleFilterChange={setCategory} />
      <Main>
        <List items={items} activeCategory={category} data={data} />
      </Main>
    </>
  )
}

export default FilteredList
