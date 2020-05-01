const NetlifyAPI = require('netlify')
const core = require('@actions/core')
const github = require('@actions/github')

const DEPLOY_STATE = 'ready'
const DEPLOY_CONTEXT = 'deploy-preview'
const MAX_TIMEOUT = 240000
const DELAY = 5000

const waitUntilReady = async (deployId, client, timeout) => {
  try {
    // Get deploy data from client
    const deploy = await client.getDeploy({ deploy_id: deployId })

    core.info('Waiting for deploy...')
    core.debug(`Remaining timeout: ${timeout}`)
    core.debug(`State: ${deploy.state}`)

    // If state is not ready and action didn't timed out call this function again with delay
    if (deploy.state !== DEPLOY_STATE && timeout > DELAY) {
      setTimeout(
        () => waitUntilReady(deploy.id, client, timeout - DELAY),
        DELAY
      )
      // If we stop waiting and deploy is ready inform user
    } else if (deploy.state === DEPLOY_STATE) {
      core.info(`Deploy ${deploy.id} is ready!`)
      // Otherwise assume that waiting timed out
    } else {
      core.error('Action timed out')
    }
  } catch (err) {
    core.error(`Error getting deploy state: ${err.message}`)
  }
}

const getNeltifyPreviewURL = async () => {
  // Get data from env variables
  const apiKey = process.env.NETLIFY_API_KEY
  const siteName = process.env.NETLIFY_SITE_NAME
  const siteId = process.env.NETLIFY_API_ID

  core.debug(JSON.stringify(github.contex, null, 2))
  core.debug(JSON.stringify(github.event, null, 2))

  // Get commit sha - for pull request we need sha of commit pull request head and not current context
  const commitRef =
    github.context.eventName === 'pull_request'
      ? github.context.event.pull_request.head.sha
      : github.context.sha
  // Parse timeout in case that it is not number or set fallback
  const maxTimeout = parseInt(process.env.MAX_TIMEOUT, 10) || MAX_TIMEOUT
  const waitForDeploy = Boolean(process.env.WAIT_FOR_DEPLOY) || true

  core.debug(`Commit SHA: ${commitRef}`)

  core.debug(
    JSON.stringify(
      {
        siteName,
        siteId,
        maxTimeout,
        waitForDeploy,
        commitRef,
      },
      null,
      '  '
    )
  )

  // If any of mandatory env vars are not provided end action with error
  if (!siteId || !apiKey || !siteName) {
    core.setFailed(
      'One of following inputs wasnt provided: NETLIFY_API_KEY, NETLIFY_SITE_NAME, NETLIFY_API_ID'
    )
  }

  try {
    // Create Netlify client
    const client = new NetlifyAPI(apiKey)

    // Get list of all deploys
    const siteDeploys = await client.listSiteDeploys({
      site_id: siteId,
    })

    // Filter deploy previews
    const previewDeploys = siteDeploys.filter(
      deploy => deploy.context === DEPLOY_CONTEXT
    )

    // Filter preview deploys by commit
    const deployByCommit = previewDeploys.filter(
      deploy => deploy.commit_ref === commitRef
    )

    core.debug(`Preview deploys: ${previewDeploys.length}`)
    core.debug(`Deploys related to latest commit: ${previewDeploys.length}`)

    // If there is no deploy by commit found return latest preview deploy
    const relatedDeploy = deployByCommit.length
      ? deployByCommit[0]
      : previewDeploys[0]

    core.debug(JSON.stringify(relatedDeploy, null, 2))

    // Compose ulr
    const url = `https://${relatedDeploy.id}--${siteName}.netlify.app`

    core.info(`Deploy URL: ${url}`)

    // Set output data
    core.setOutput('url', url)

    // If deploy is not ready yet start checking deploy status
    if (relatedDeploy.state !== DEPLOY_STATE && waitForDeploy) {
      waitUntilReady(relatedDeploy.id, client, maxTimeout)
    }
  } catch (err) {
    core.setFailed(err.message)
  }
}

// Shoot
getNeltifyPreviewURL()
