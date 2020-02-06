// @ts-ignore
import { GatsbyNode, Actions } from 'gatsby'
const path = require('path')

import { Category } from './src/common/enums'

const createCollectionPages = (actions: Actions, path: string, template: any) => {
  const { createPage } = actions
  const categoryKeys = Object.keys(Category).map(key => Category[key])

  createPage({
    path: `/${path}`,
    component: template,
    context: {
      category: 'all',
    },
  })

  categoryKeys.map(categoryKey =>
    createPage({
      path: `/${path}/${categoryKey}`,
      component: template,
      context: {
        category: categoryKey,
      },
    })
  )
}

export const createPages: GatsbyNode['createPages'] = async ({ actions }) => {
  const toolsTemplate = path.resolve(`src/templates/Tool.tsx`)
  createCollectionPages(actions, 'tools', toolsTemplate)
  const guidelinesTemplate = path.resolve(`src/templates/Guideline.tsx`)
  createCollectionPages(actions, 'guidelines', guidelinesTemplate)
  const knowledgeTemplate = path.resolve(`src/templates/Knowledge.tsx`)
  createCollectionPages(actions, 'knowledge', knowledgeTemplate)
}
