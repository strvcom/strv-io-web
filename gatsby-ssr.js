/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import React, { Fragment } from 'react'
import GlobalStyles from './src/styles/global'
import Layout from './src/components/Layout'

export const wrapRootElement = ({ element }) => {
  return (
    <Fragment>
      <GlobalStyles />
      <Layout>{element}</Layout>
    </Fragment>
  )
}
