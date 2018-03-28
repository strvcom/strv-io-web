/* eslint-disable */

const webpack = require('webpack')
const dev = process.env.NODE_ENV !== 'production'
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin

module.exports = {
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/_error': { page: '/error' },
    }
  },
  webpack: config => {
    if (!dev) {
      config.plugins = config.plugins.concat([
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          openAnalyzer: false,
          reportFilename: 'bundleAnalyzerReport.html',
          defaultSizes: 'gzip',
        }),
      ])
    }

    if (!config.resolve) {
      config.resolve = {}
    }

    const modules = ['app']
    config.resolve.modules = config.resolve.modules
      ? config.resolve.modules.concat(modules)
      : modules

    // fixme: IMPORTANT!!! remove following line before launching
    if (dev) {
      config.devtool = 'inline-source-map'
    }
    config.module.rules.push({
      rules: [
        {
          test: /\.(eot|svg|otf|ttf|woff|woff2)$/,
          use: 'file-loader',
        },
      ],
    })
    return config
  },
}
