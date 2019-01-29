import React, { Fragment } from 'react'
import GlobalStyles from 'styles/global'
import Layout from 'components/Layout'

export const wrapRootElement = ({ element }) => (
  <Fragment>
    <GlobalStyles />
    <Layout>{element}</Layout>
  </Fragment>
)
