const STRAPI_URL = 'https://docs.bdp-rps.de'

export default async function enrollments(req) {
  return await fetch(STRAPI_URL + '/api/enrollment', {
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
