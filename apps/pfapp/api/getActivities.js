const STRAPI_URL = 'https://docs.bdp-rps.de'

function getActivities(req, res) {
  return fetch(STRAPI_URL + `/api/activities`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json())
}

export { getActivities }
