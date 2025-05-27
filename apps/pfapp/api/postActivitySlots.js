const STRAPI_URL = 'https://docs.bdp-rps.de'

async function postActivitySlots(req) {
  return await fetch(STRAPI_URL + '/api/activity-slots', {
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

module.exports = postActivitySlots
