# Use bundle-analyzer for controlling output bundle size

## Context and Problem Statement

We want to measure and control the build output for our project. We need to use a GitHub check to validate bundle size for each PR.

## Considered Options

* [bundle-analyzer.com](https://www.bundle-analyzer.com/)
* [Bundlesize](https://github.com/siddharthkp/bundlesize)
* [Webpack bundle analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer)

## Decision Outcome

Outcome is to use "bundle-analyzer.com", because:

* free and open source
* ease of integration
* good level of control
* works with Netlify CI

## Pros and Cons of the Options

### Bundlesize

Good, because:

* free & open source
* well-maintained & popular repo
* easy to integrate

Bad, because:

* doesn't work with Netlify CI

### Webpack bundle analyzer

Good, because:

* free & open source
* most popular tool for measuring bundle size

Bad, because:

* Doesn't have an easy way to be integrated as Github check or Github action

### bundle-analyzer.com

Good, because:

* free and open source
* ease of integration
* works with Netlify CI

Bad, because:

* less popular solution compared to other options
* repo doesn't seem to be updated recently
