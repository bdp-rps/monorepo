const STRAPI_URL = 'https://docs.bdp-rps.de'

export default function getBlogpost(id) {
  return fetch(STRAPI_URL + `/api/blogposts/${id}?populate=*`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json())
}
