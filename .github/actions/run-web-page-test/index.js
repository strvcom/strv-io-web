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
      `[First Contentful Paint](https://developers.google.com/web/tools/lighthouse/audits/first-contentful-paint)`,
      `[Speed Index](https://sites.google.com/a/webpagetest.org/docs/using-webpagetest/metrics/speed-index)`,
      `[Last Painted Hero](https://github.com/WPO-Foundation/webpagetest/blob/master/docs/Metrics/HeroElements.md)`,
      `[First CPU Idle](https://github.com/WPO-Foundation/webpagetest/blob/master/docs/Metrics/TimeToInteractive.md)`,
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
## WebPageTest Report

<br/>
<h3 align="center"><a href="${data.summary}">Test Results</a></h3>
<br/>


* Run ID: [${data.id}](${data.summary})
* Tested URL: [${data.testUrl}](${data.testUrl})
* Location: ${data.from} (${data.location})
* Connectivity: ${data.connectivity}
* Successfull runs: ${data.successfulFVRuns}

## Performance Results (Median Run - SpeedIndex)

${perfTable(data)}

### Document Complete

${docPerfTable(data)}

### Fully Loaded

${fullLoadedPerfTable(data)}

## Median Waterfall
### First View
![First View Waterfall Chart](${data.median.firstView.images.waterfall})

### Repeat View
![Repeat View Waterfall Chart](${data.median.repeatView.images.waterfall})
`

const addComment = async (data, githubToken) => {
  const {
    eventName,
    repo,
    sha,
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

    if (eventName === 'push') {
      await octokit.repos.createCommitComment({
        owner,
        repo,
        sha,
        body: composeComment(data),
      })
    }
  } catch (err) {
    core.error(err.message)
  }
}

const parseJSON = jsonString => {
  if (jsonString) {
    try {
      return JSON.parse(jsonString)
    } catch (err) {
      core.error(`There was problem with parsing options: ${err.message}`)
    }
  }

  return {}
}

const runWebPageTest = async (wpt, testUrl) => {
  const userOptions = parseJSON(core.getInput('options'))
  const options = {
    pollResults: 10,
    label: `GitHub Action: ${github.context.sha}`,
    runs: 3,
    ...userOptions,
  }

  core.debug('Test options:')
  core.debug(JSON.stringify(options, null, 2))

  return new Promise((resolve, reject) => {
    core.info('Polling for results...')
    wpt.runTest(testUrl, options, (err, result) => {
      if (err) {
        return reject(err)
      }

      return resolve(result)
    })
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

  // Set failed if requred env vars aren't provided
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

    core.info(`Test results url: ${data.summary}`)

    // add github comment
    addComment(data, githubToken)
  } catch (err) {
    core.error(err.message || err.statusText)
  }
}

run()
