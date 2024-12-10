const STRAPI_URL = 'https://docs.bdp-rps.de'

export default function getCourseAnnouncement(id) {
  return fetch(STRAPI_URL + `/api/course-announcements/${id}?populate=*`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json())
}
