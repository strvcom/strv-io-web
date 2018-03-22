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

  filteredRepos = category => {
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
            <HeadLine>Open source libraries</HeadLine>
            <HeadLineTail>Created by STRV</HeadLineTail>
          </BannerInfo>
        </Banner>
        <RepoWrapper>
          <RepoFilters>
            <Button
              primary={category === 'all'}
              onClick={() => this.filteredRepos('all')}
            >
              all
            </Button>
            <Button
              primary={category === 'backend'}
              onClick={() => this.filteredRepos('backend')}
            >
              backend
            </Button>
            <Button
              primary={category === 'android'}
              onClick={() => this.filteredRepos('android')}
            >
              android
            </Button>
            <Button
              primary={category === 'ios'}
              onClick={() => this.filteredRepos('ios')}
            >
              ios
            </Button>
            <Button
              primary={category === 'iot'}
              onClick={() => this.filteredRepos('iot')}
            >
              iot
            </Button>
          </RepoFilters>
          <RepoList>
            {repos.map(repo =>
              <RepoItem key={`repo-item-${repo.name}`} repo={repo} />)}
          </RepoList>
        </RepoWrapper>
        <Footer />
      </Wrapper>
    )
  }
}
