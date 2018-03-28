import React, { Component } from 'react'
import data from 'data'
import {
  Wrapper,
  Banner,
  HeadLine,
  HeadLineTail,
  RepoFilters,
  RepoWrapper,
  RepoList,
  BannerImage,
  BannerInfo,
} from './styled'
import Button from 'components/Button'
import Header from 'components/Header'
import Footer from 'components/Footer'
import RepoItem from 'components/RepoItem'

export default class componentName extends Component {
  constructor(props) {
    super(props)
    this.state = {
      repos: data,
      category: 'all',
    }
  }

  componentDidMount() {
    const ScrollReveal = require('scrollreveal') // eslint-disable-line no-undef

    this.scrollReveal = new ScrollReveal({
      scale: 1,
      duration: 900,
      easing: 'ease',
      distance: '50px',
    })
    this.scrollReveal.reveal('.reveal')
    this.scrollReveal.reveal('.reveal--delay1', { delay: 300 })
    this.scrollReveal.reveal('.reveal--delay2', { delay: 400 })
    this.scrollReveal.reveal('.reveal--delay3', { delay: 450 })
  }

  componentDidUpdate() {
    this.scrollReveal.reveal('.reveal--delay3', { delay: 200 })
  }

  filterRepos = category => {
    this.setState({
      repos:
        category === 'all'
          ? data
          : data.filter(repo => repo.category === category),
      category,
    })
  }

  render() {
    const { repos, category } = this.state
    return (
      <Wrapper>
        <Header />
        <Banner>
          <BannerImage />
          <BannerInfo>
            <HeadLine className="reveal">Open source libraries</HeadLine>
            <HeadLineTail className="reveal--delay1">
              Curated by STRV
            </HeadLineTail>
          </BannerInfo>
        </Banner>
        <RepoWrapper>
          <RepoFilters className="reveal--delay2">
            <Button
              primary={category === 'all'}
              onClick={() => this.filterRepos('all')}
            >
              all
            </Button>
            <Button
              primary={category === 'backend'}
              onClick={() => this.filterRepos('backend')}
            >
              backend
            </Button>
            <Button
              primary={category === 'android'}
              onClick={() => this.filterRepos('android')}
            >
              android
            </Button>
            <Button
              primary={category === 'ios'}
              onClick={() => this.filterRepos('ios')}
            >
              ios
            </Button>
            <Button
              primary={category === 'iot'}
              onClick={() => this.filterRepos('iot')}
            >
              iot
            </Button>
          </RepoFilters>
          <RepoList>
            {repos.map(repo => (
              <RepoItem
                className="reveal--delay3"
                key={`repo-item-${repo.name}`}
                repo={repo}
              />
            ))}
          </RepoList>
        </RepoWrapper>
        <Footer />
      </Wrapper>
    )
  }
}
