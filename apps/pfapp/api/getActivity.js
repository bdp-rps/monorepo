const STRAPI_URL = 'https://docs.bdp-rps.de'

function getActivity(id) {
  console.log(id)
  return fetch(STRAPI_URL + `/api/activities/${id}?populate=*`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json())
}

export { getActivity }
