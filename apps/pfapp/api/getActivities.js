const STRAPI_URL = 'https://docs.bdp-rps.de'

function getActivities(page = 1, pageSize = 10) {
  const url = `${STRAPI_URL}/api/activities?pagination[page]=${page}&pagination[pageSize]=${pageSize}`
  const data = fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json())

  return data
}

export { getActivities }
