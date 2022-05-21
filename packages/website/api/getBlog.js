const STRAPI_URL = 'https://docs.bdp-rps.de'

export default function getPlaces(id) {
  return fetch(STRAPI_URL + `/api/blog/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json())
}
