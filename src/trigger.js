import api, { route, getAppContext } from "@forge/api";

// the key of the issue panel that will be opened by default
const issuePanelKey = 'forge-issue-panel-open-by-default';

export async function onIssueCreated(event) {
  // construct the special entity property key determining issue panel visibility
  const { issue } = event;
  const { appAri, environmentAri } = getAppContext();
  const { appId } = appAri;
  const { environmentId } = environmentAri;
  const propertyKey = `ari:cloud:ecosystem::extension/${appId}/${environmentId}/static/${issuePanelKey}`;

  // construct the special entity property value
  const propertyValue = [{
    "added": Math.floor(Date.now() / 1000), // timestamp in seconds
    "id":  Math.random().toString(36).substring(2, 10), // random 8-character alphanumeric ID
    "collapsed": false // you can also toggle the to true to collapse it again
  }];

  // set the special entity property on the newly created issue
  const response = await api.asApp().requestJira(route`/rest/api/3/issue/${issue.id}/properties/${encodeURIComponent(propertyKey)}`, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(propertyValue)
  });

  if (!response.ok) {
    console.error(`Failed to set issue panel property: ${response.status} ${response.statusText}`);
    throw new Error(`Failed to set issue panel property for issue ${issue.id}`);
  }
}
