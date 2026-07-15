const STRAPI_URL = 'https://docs.bdp-rps.de'

function getBlogpost(id) {
  return fetch(STRAPI_URL + `/api/blogposts/${id}?populate=*`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json())
}
function getBlogpostMainz(id) {
  return fetch(STRAPI_URL + `/api/mainz-posts/${id}?populate=*`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json())
}

export { getBlogpost, getBlogpostMainz }
