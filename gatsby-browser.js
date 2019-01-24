import React, { Fragment } from 'react'
import Layout from 'components/Layout'
import GlobalStyles from 'styles/global'

export const wrapRootElement = ({ element }) => {
  return (
    <Fragment>
      <GlobalStyles />
      <Layout>{element}</Layout>
    </Fragment>
  )
}
