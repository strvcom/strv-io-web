const config = {
  plugins: [
    'gatsby-plugin-resolve-src',
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        displayName: false,
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'STRV.io',
        short_name: 'STRV.io',
        start_url: '/',
        icon: './static/assets/icon.png',
        theme_color: '#111517',
        background_color: '#111517',
        display: 'standalone',
      },
    },
    {
      resolve: 'gatsby-transformer-json',
      options: {
        typeName: ({ node, object, isArray }) => node.relativeDirectory,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/static/assets`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/static/collections`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/assets/`,
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline',
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/index.ts`,
        htmlTitle: `STRV.IO CMS`,
        htmlFavicon: `${__dirname}/static/assets/favicon.ico`,
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-2385632-31',
      },
    }
  ],
}

if (process.env.BUNDLE_ANALYZER_TOKEN) {
  config.plugins.push({
    resolve: '@bundle-analyzer/gatsby-plugin',
    options: { token: process.env.BUNDLE_ANALYZER_TOKEN },
  })
}

module.exports = config
