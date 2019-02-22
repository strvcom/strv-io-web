import React, { Fragment } from 'react'
import MetaHead from 'components/MetaHead'
import GlobalStyles from 'styles/global'

interface Props {
  children: React.ReactNode
}

const Layout: React.SFC<Props> = ({ children }) => (
  <Fragment>
    <GlobalStyles />
    <MetaHead />
    {children}
  </Fragment>
)

export default Layout
