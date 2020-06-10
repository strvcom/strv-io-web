// https://github.com/GoogleChrome/lighthouse-ci/blob/master/docs/configuration.md

module.exports = {
  ci: {
    collect: {
      settings: {
        plugins: ['lighthouse-plugin-field-performance'],
      },
    },
  },
}
