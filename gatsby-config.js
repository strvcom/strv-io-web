module.exports = {
  plugins: [
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-styled-components',
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
    'gatsby-plugin-netlify-cms',
    'gatsby-transformer-json',
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

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline',
    'gatsby-plugin-typescript',
  ],
}
