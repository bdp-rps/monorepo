const STRAPI_URL = 'https://docs.bdp-rps.de'

async function postActivity(req) {
  try {
    const response = await fetch(STRAPI_URL + '/api/activities', {
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

    const responseData = await response.json()

    if (!response.ok) {
      throw new Error(
        `HTTP error! status: ${response.status}, message: ${JSON.stringify(
          responseData
        )}`
      )
    }

    return response
  } catch (error) {
    throw error
  }
}

module.exports = postActivity
