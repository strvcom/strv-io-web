import { GatsbyNode } from 'gatsby'
const path = require('path')

import { Category } from './src/common/enums'

export const createPages: GatsbyNode['createPages'] = async ({ actions }) => {
  const { createPage, createRedirect } = actions
  const repositoriesTemplate = path.resolve(`src/templates/Tool.tsx`)
  const categoryKeys = Object.keys(Category).map(key => Category[key])

  createRedirect({
    fromPath: `/repositories`,
    toPath: `/repositories/all`,
    isPermanent: true,
    force: true,
  })

  createRedirect({
    fromPath: `/`,
    toPath: `/repositories/all`,
    isPermanent: true,
    force: true,
  })

  createPage({
    path: `/repositories`,
    component: repositoriesTemplate,
    context: {
      category: 'all',
    },
  })

  categoryKeys.map(categoryKey =>
    createPage({
      path: `/repositories/${categoryKey}`,
      component: repositoriesTemplate,
      context: {
        category: categoryKey,
      },
    })
  )
}
