const STRAPI_URL = 'https://docs.bdp-rps.de'

function getActivities(filters = {}) {
  // Convert filters object to query string
  const queryParams = new URLSearchParams()

  if (filters.groupType) {
    const groupTypes = filters.groupType.split(',')
    if (groupTypes.length === 1) {
      queryParams.append('filters[groupType][$eq]', groupTypes[0])
    } else {
      groupTypes.forEach((type, index) => {
        queryParams.append(`filters[groupType][$in][${index}]`, type)
      })
    }
  }

  const queryString = queryParams.toString()
  const url = `${STRAPI_URL}/api/activities${
    queryString ? `?${queryString}` : ''
  }`

  return fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json())
}

export { getActivities }
