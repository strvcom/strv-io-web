import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'next/router'
import {
  Wrapper,
  Banner,
  HeadLine,
  HeadLineTail,
  RepoWrapper,
  RepoList,
  BannerInfo,
} from './styled'
import Navigation from './Navigation'
import repositories from 'data/repositories'
import Header from 'components/Header'
import Footer from 'components/Footer'
import RepoItem from 'components/RepoItem'

const ALL = 'all'

class Home extends PureComponent {
  componentDidMount() {
    const ScrollReveal = require('scrollreveal') // eslint-disable-line no-undef

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
    this.scrollReveal.reveal('.reveal--delay2', { delay: 100 })
  }

  renderList() {
    const { query } = this.props.router
    const category = query.view || ALL
    const data =
      category === ALL
        ? repositories
        : repositories.filter(repo => repo.category === category)

    return data.map(repo => (
      <RepoItem
        className="reveal--delay2"
        key={`repo-item-${repo.name}-${category}`}
        repo={repo}
      />
    ))
  }

  render() {
    const { query } = this.props.router
    // Show All as default
    const category = query.view || ALL

    return (
      <Wrapper>
        <Header />
        <Banner>
          <BannerInfo>
            <HeadLine className="reveal">Open source libraries</HeadLine>
            <HeadLineTail className="reveal--delay1">
              Curated by STRV developers
            </HeadLineTail>
          </BannerInfo>
        </Banner>
        <Navigation activeItem={category} />
        <RepoWrapper>
          <RepoList>{this.renderList()}</RepoList>
        </RepoWrapper>
        <Footer />
      </Wrapper>
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
