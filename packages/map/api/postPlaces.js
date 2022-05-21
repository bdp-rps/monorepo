const STRAPI_URL = 'https://docs.bdp-rps.de'

export default async function postPlaces(req) {
  return await fetch(STRAPI_URL + '/api/places', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      data: {
        ...req,
      },
    }),
  })
}
