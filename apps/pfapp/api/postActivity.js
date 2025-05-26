const STRAPI_URL = 'https://docs.bdp-rps.de'

async function postActivity(req) {
  console.log('Posting activity to:', STRAPI_URL + '/api/activities')
  console.log('Request data:', JSON.stringify(req, null, 2))

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
      console.error('Error response:', JSON.stringify(responseData, null, 2))
      throw new Error(
        `HTTP error! status: ${response.status}, message: ${JSON.stringify(
          responseData
        )}`
      )
    }

    return response
  } catch (error) {
    console.error('Network or parsing error:', error)
    throw error
  }
}

module.exports = postActivity
