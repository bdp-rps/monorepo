const STRAPI_MAP =
  '0f3c83b1573377f61920bc89d3771409fb4f27100b50e1e5e538b39b2f3072134243b3523601f1eebf31663f25c638b9f4ad7c1a6b99a2e514e8c7102d4e553000685afa98bfe5e4e1af70d29cc0f6e68df75864fcb81d2131f878ab759691ece2210ac633ef6895d6d6ebc30e16b1e213ce4c8e637ea7ebc3be00e954ed831b'
const STRAPI_URL = 'https://docs.bdp-rps.de'

export default function getPlaces(req, res) {
  return fetch(STRAPI_URL + '/api/places', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json())
}
