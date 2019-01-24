import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import GlobalStyles from 'styles/global'
import Layout from 'components/Layout'

export const wrapRootElement = ({ element }) => {
  return (
    <Fragment>
      <GlobalStyles />
      <Layout>{element}</Layout>
    </Fragment>
  )
}
