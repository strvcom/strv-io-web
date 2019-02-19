import React, { Fragment } from 'react'
import MetaHead from 'components/MetaHead'

interface Props {
  children: React.ReactNode
}

const Layout: React.SFC<Props> = ({ children }) => (
  <Fragment>
    <MetaHead />
    {children}
  </Fragment>
)

export default Layout
