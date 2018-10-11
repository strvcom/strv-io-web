import React, { Fragment, PureComponent } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'next/router'
import { Banner, HeadLine, HeadLineTail, Main, BannerInfo } from './styled'
import List from './List'
import Navigation from './Navigation'
import Footer from 'components/Footer'

class Home extends PureComponent {
  componentDidMount() {
    const ScrollReveal = require('scrollreveal')

    this.scrollReveal = new ScrollReveal({
      scale: 1,
      duration: 800,
      easing: 'ease',
      distance: '50px',
    })
    this.scrollReveal.reveal('.reveal')
    this.scrollReveal.reveal('.reveal--delay1', { delay: 100 })
    this.scrollReveal.reveal('.reveal--delay2', { delay: 200 })
  }

  componentDidUpdate() {
    // Update reveal animation of a repository item
    this.scrollReveal.reveal('.reveal--delay2', { delay: 100 })
  }

  render() {
    const { query } = this.props.router
    // Show All as default
    const category = query.view || 'all'

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
  router: PropTypes.shape({
    query: PropTypes.shape({
      view: PropTypes.string,
    }).isRequired,
  }).isRequired,
}

export default withRouter(Home)
