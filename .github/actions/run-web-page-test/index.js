const WebPageTest = require('webpagetest')
const core = require('@actions/core')
const github = require('@actions/github')
const toMd = require('./to-md')

const humanFileSize = size => {
  if (!size) {
    return '0'
  }
  const i = Math.floor(Math.log(size) / Math.log(1024))
  return `${(size / Math.pow(1024, i)).toFixed(2) * 1}${String.fromCharCode(
    160
  )}${['B', 'kB', 'MB', 'GB', 'TB'][i]}` // Char 160 is non-breakable space
}

const humanTime = time => (!time ? '0' : `${time}${String.fromCharCode(160)}ms`) // Char 160 is non-breakable space

const perfTable = data =>
  toMd.table([
    [
      '',
      'Load Time',
      'First Byte',
      'Start Render',
      `[https://developers.google.com/web/tools/lighthouse/audits/first-contentful-paint](First Contentful Paint)`,
      `[https://sites.google.com/a/webpagetest.org/docs/using-webpagetest/metrics/speed-index](Speed Index)`,
      `[https://github.com/WPO-Foundation/webpagetest/blob/master/docs/Metrics/HeroElements.md](Last Painted Hero)`,
      `[https://github.com/WPO-Foundation/webpagetest/blob/master/docs/Metrics/TimeToInteractive.md](First CPU Idle)`,
    ],
    [
      'First View',
      humanTime(data.median.firstView.loadTime),
      humanTime(data.median.firstView.TTFB),
      humanTime(data.median.firstView.render),
      humanTime(data.median.firstView.firstContentfulPaint),
      humanTime(data.median.firstView.SpeedIndex),
      humanTime(data.median.firstView.LastPaintedHero),
      humanTime(data.median.firstView.LastPaintedHero),
      `> ${humanTime(
        Math.max(
          data.median.firstView.firstContentfulPaint,
          data.median.firstView.LastInteractive
        )
      )}`,
    ],
    [
      'Repeat View',
      humanTime(data.median.repeatView.loadTime),
      humanTime(data.median.repeatView.TTFB),
      humanTime(data.median.repeatView.render),
      humanTime(data.median.repeatView.firstContentfulPaint),
      humanTime(data.median.repeatView.SpeedIndex),
      humanTime(data.median.repeatView.LastPaintedHero),
      humanTime(data.median.repeatView.LastPaintedHero),
      `> ${humanTime(
        Math.max(
          data.median.repeatView.firstContentfulPaint,
          data.median.repeatView.LastInteractive
        )
      )}`,
    ],
  ])

const docPerfTable = data =>
  toMd.table([
    ['', 'Time', 'Requests', 'Bytes In'],
    [
      'First View',
      humanTime(data.median.firstView.docTime),
      humanTime(data.median.firstView.requestsDoc),
      humanFileSize(data.median.firstView.bytesInDoc),
    ],
    [
      'Repeat View',
      humanTime(data.median.repeatView.docTime),
      humanTime(data.median.repeatView.requestsDoc),
      humanFileSize(data.median.repeatView.bytesInDoc),
    ],
  ])

const fullLoadedPerfTable = data =>
  toMd.table([
    ['', 'Time', 'Requests', 'Bytes In'],
    [
      'First View',
      humanTime(data.median.firstView.fullyLoaded),
      humanTime(data.median.firstView.requestsFull),
      humanFileSize(data.median.firstView.bytesIn),
    ],
    [
      'Repeat View',
      humanTime(data.median.repeatView.fullyLoaded),
      humanTime(data.median.repeatView.requestsFull),
      humanFileSize(data.median.repeatView.bytesIn),
    ],
  ])

const composeComment = data => `
# WebPageTest Report

** Detail report: ${data.summary} **

* run id: [${data.id}](${data.summary})
* URL testid: [${data.testUrl}](${data.testUrl})
* location where the test has run: ${data.location}
* from run parameter: ${data.from}
* connectivity: ${data.connectivity}
* successFullRuns: ${data.successfulFVRuns}

## Performance Results (Median Run - SpeedIndex)

${perfTable(data)}

### Document Complete

${docPerfTable(data)}

### Fully Loaded

${fullLoadedPerfTable(data)}
`

const addComment = async (data, githubToken) => {
  const {
    eventName,
    repo,
    payload: { number },
  } = github.context

  const octokit = new github.GitHub(githubToken)

  core.debug(`Context: ${JSON.stringify({ eventName, number, repo }, null, 2)}`)

  try {
    if (eventName === 'pull_request') {
      await octokit.issues.createComment({
        ...repo,
        issue_number: number,
        body: composeComment(data),
      })
    }
  } catch (err) {
    core.error(err.message)
  }
}

const runWebPageTest = async (wpt, testUrl) => {
  let userOptions = {}

  core.debug(`User options: ${core.getInput('options')}`)

  try {
    const optionsInput = core.getInput('options')
    if (optionsInput) {
      userOptions = JSON.parse(optionsInput)
    }
  } catch (err) {
    core.error(`There was problem with parsing options: ${err.message}`)
  }

  return new Promise((resolve, reject) => {
    core.info('Polling for results...')
    wpt.runTest(
      testUrl,
      { pollResults: 10, label: `GitHub Action`, runs: 3, ...userOptions },
      (err, result) => {
        if (err) {
          return reject(err)
        }

        return resolve(result)
      }
    )
  })
}

const run = async () => {
  // Get data from env variables
  const apiKey = process.env.WEBPAGETEST_API_KEY
  const githubToken = process.env.GITHUB_TOKEN
  const testUrl = process.env.TEST_URL
  const webPageTestServer =
    process.env.WEBPAGETEST_SERVER_URL || 'www.webpagetest.org'

  core.debug(`Test server: ${webPageTestServer}`)
  core.debug(`Test URL: ${testUrl}`)

  if (!apiKey || !testUrl || !githubToken) {
    core.setFailed(
      "One of mandatory environment variables wasn't provided: WEBPAGETEST_API_KEY, TEST_URL, GITHUB_TOKEN"
    )
  }

  try {
    // create WebPageTest client
    const wpt = new WebPageTest(webPageTestServer, apiKey)

    // run test and poll for result
    const { data } = await runWebPageTest(wpt, testUrl)

    core.info(`Test results: ${data.summary}`)

    // add github comment
    addComment(data, githubToken)
  } catch (err) {
    core.error(err.message || err.statusText)
  }
}

run()
