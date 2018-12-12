import React, { Fragment, Component } from 'react'
import PropTypes from 'prop-types'
// import { withRouter } from 'next/router'
import { Banner, HeadLine, HeadLineTail, Main, BannerInfo } from './styled'
import List from './List'
import Navigation from './Navigation'
import Footer from 'components/Footer'

class Home extends Component {
  render() {
    // const { query } = this.props.router
    // Show All as default
    const category = 'all' //query.filter || 'all'

    return (
      <Fragment>
        <Banner>
          <BannerInfo>
            <HeadLine className="reveal">Open source libraries</HeadLine>
            <HeadLineTail className="reveal--delay1">
              Curated by STRV developers
            </HeadLineTail>
          </BannerInfo>
        </Banner>
        <Navigation activeCategory={category} />
        <Main>
          <List activeCategory={category} />
        </Main>
        <Footer />
      </Fragment>
    )
  }
}

// Home.propTypes = {
//   router: PropTypes.shape({
//     query: PropTypes.shape({
//       view: PropTypes.string,
//     }).isRequired,
//   }).isRequired,
// }

export default Home
