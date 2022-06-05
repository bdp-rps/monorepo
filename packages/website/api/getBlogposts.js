const STRAPI_URL = 'https://docs.bdp-rps.de'

export default function getBlogposts(req, res) {
  return fetch(STRAPI_URL + `/api/blogposts?populate=*`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json())
}
