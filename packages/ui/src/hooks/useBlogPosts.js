import { useState } from 'react'

const STRAPI_URL = 'https://docs.bdp-rps.de'

export default function useBlogPosts(slug) {
  const [posts, setPosts] = useState([])
  const [isLoading, setIsloading] = useState(false)
  const [error, setError] = useState(null)

  setIsloading(true)
  fetch(STRAPI_URL + `/api/${slug}?populate=*`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => setPosts(response.json()))
    .then((_) => setIsloading(false))
    .catch((err) => setError(err))

  return [posts, isLoading, err]
}
