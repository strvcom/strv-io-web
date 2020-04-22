const NetlifyAPI = require("netlify");
const core = require("@actions/core");
const github = require("@actions/github");

const getNeltifyPreviewURL = async () => {
  try {
    const client = new NetlifyAPI(core.getInput("NETLIFY_API_KEY"));
    const siteName = core.getInput("NETLIFY_SITE_NAME");
    const commitRef = github.context.sha;

    core.debug(
      JSON.stringify({
        siteName,
        commitRef,
        context: github.context,
      })
    );

    const siteDeploys = await client.listSiteDeploys({
      site_id: core.getInput("NETLIFY_API_ID"),
    });

    const deployId = siteDeploys.filter(
      (deploy) =>
        deploy.commit_ref === commitRef && deploy.context === "deploy-preview"
    )[0].id;

    core.debug(deployId);

    core.setOutput("url", `https://${deployId}--${siteName}.netlify.app`);
  } catch (err) {
    console.error(err);
  }
};

getNeltifyPreviewURL();
