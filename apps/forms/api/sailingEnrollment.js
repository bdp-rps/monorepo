import { useRouter } from 'next/router'

const STRAPI_URL = 'https://docs.bdp-rps.de'

export default async function enrollment(req) {
  return await fetch(STRAPI_URL + '/api/segelanmeldungs', {
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
