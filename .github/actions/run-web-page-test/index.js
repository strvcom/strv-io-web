const WebPageTest = require('webpagetest')
const core = require('@actions/core')
const github = require('@actions/github')

const humanFileSize = size => {
  if (!size) {
    return '0'
  }
  const i = Math.floor(Math.log(size) / Math.log(1024))
  return (
    (size / Math.pow(1024, i)).toFixed(2) * 1 +
    ' ' +
    ['B', 'kB', 'MB', 'GB', 'TB'][i]
  )
}

const composeComment = data => {
  return `
   # WebPageTest report
  **Summary: ${data.summary}**

  * run id: ${data.id}
  * URL testid: ${data.testUrl}
  * location where the test has run: ${data.location}
  * from run parameter: ${data.from}
  * connectivity: ${data.connectivity}
  * successFullRuns: ${data.successfulFVRuns}

  ## Median Run Results
| View | First Paint | First Contentful Paint | First Meaningful Paint | Time to First Byte | Time to interactive |  Render Started |  Visualy Completed | SpeedIndex | Load Time |
|----------|----------|----------|----------|----------|----------|----------|----------|----------|----------|
| FirstView  | ${data.median.firstView.firstPaint} | ${
    data.median.firstView.firstContentfulPaint
  } | ${data.median.firstView.firstMeaningfulPaint} | ${
    data.median.firstView['lighthouse.Performance.interactive']
  } | ${data.median.firstView.TTFB} | ${data.median.firstView.render} | ${
    data.median.firstView.visualComplete
  } | ${data.median.firstView.SpeedIndex} | ${data.median.firstView.loadTime} |
| RepeatView | ${data.median.repeatView.firstPaint} | ${
    data.median.repeatView.firstContentfulPaint
  } | ${data.median.repeatView.firstMeaningfulPaint} | ${
    data.median.repeatView['lighthouse.Performance.interactive']
  } | ${data.median.repeatView.TTFB} | ${data.median.repeatView.render} | ${
    data.median.repeatView.visualComplete
  } | ${data.median.repeatView.SpeedIndex} | ${
    data.median.repeatView.loadTime
  } |
  ## Median Waterfall
  ### FirstView
  ![alt text](${data.median.firstView.images.waterfall})
  ### RepeatView
  ![alt text](${data.median.repeatView.images.waterfall})
  ## Median Requests
  ### FirstView
  | File | FileSize |
  |----------|----------|
   ${data.median.firstView.requests
     .map(request => `${request.url}|${humanFileSize(request.bytesIn)} \r\n`)
     .join('')}
  ### RepeatView
  | File | FileSize |
  |----------|----------|
   ${data.median.repeatView.requests
     .map(request => `${request.url}|${humanFileSize(request.bytesIn)} \r\n`)
     .join('')}
      `
}

const addComment = async data => {
  const { event, owner, repo } = github.context

  core.debug(`Context: ${JSON.stringify(github.context, null, 2)}`)

  if (event === 'pull_request') {
    await github.octokit.issue.createComment({
      ...repo,
      issue_number: 126,
      body: composeComment(data),
    })
  }
}

const runWebPageTest = async (wpt, testUrl) =>
  new Promise((resolve, reject) => {
    core.info('Polling for results...')
    wpt.runTest(
      testUrl,
      {
        pollResults: 10,
        label: `GitHub Action`,
        runs: 3,
      },
      (err, result) => {
        if (err) {
          return reject(err)
        }

        return resolve(result)
      }
    )
  })

const run = async () => {
  // Get data from env variables
  const apiKey =
    process.env.WEBPAGETEST_API_KEY || 'A.0cb50ee59f49ba062834a25404a10f04'
  const webPageTestServer =
    process.env.WEBPAGETEST_SERVER_URL || 'www.webpagetest.org'
  const testUrl = process.env.TEST_URL || 'www.strv.io'

  core.debug(`Test server: ${webPageTestServer}`)
  core.debug(`Test URL: ${testUrl}`)

  if (!apiKey || !testUrl) {
    core.setFailed(
      "One of mandatory environment variables wasn't provided: WEBPAGETEST_API_KEY, TEST_URL"
    )
  }

  try {
    // create WebPageTest client
    const wpt = new WebPageTest(webPageTestServer, apiKey)

    // run test and poll for result
    const { data } = await runWebPageTest(wpt, testUrl)
    core.info(`Test results: `)
    core.debug(JSON.stringify(data, null, 2))
    // add github comment
    addComment(data)
  } catch (err) {
    core.error(err.message)
  }
}

run()
