const STRAPI_URL = 'https://docs.bdp-rps.de'

export default async function postDistributors(req) {
  return await fetch(STRAPI_URL + '/api/mail-distributor', {
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
