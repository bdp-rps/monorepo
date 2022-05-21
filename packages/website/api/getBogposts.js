const STRAPI_URL = 'https://docs.bdp-rps.de'

export default function getPlaces(req, res) {
  return fetch(STRAPI_URL + '/api/places', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json())
}
