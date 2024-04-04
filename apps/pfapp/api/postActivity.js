const STRAPI_URL = 'https://docs.bdp-rps.de'

export default async function postActivity(req) {
  return await fetch(STRAPI_URL + '/api/activities', {
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
