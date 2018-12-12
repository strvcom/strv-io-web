import React, { Fragment, Component } from 'react'
import PropTypes from 'prop-types'
import querystring from 'query-string'
// import { withRouter } from 'next/router'
import { Banner, HeadLine, HeadLineTail, Main, BannerInfo } from './styled'
import List from './List'
import Navigation from './Navigation'
import Footer from 'components/Footer'

class Home extends Component {
  render() {
    const { search } = this.props.location
    const query = querystring.parse(search)
    
    // Show All as default
    const category = query.filter || 'all'

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

Home.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
  }).isRequired,
}

export default Home
