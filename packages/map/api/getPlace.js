const STRAPI_URL = 'https://docs.bdp-rps.de'

export default function getPlace(id) {
  return fetch(`${STRAPI_URL}/api/places/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json())
}
