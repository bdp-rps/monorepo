const STRAPI_URL = 'https://docs.bdp-rps.de'

export default function getCourseAnnouncements(req, res) {
  return fetch(STRAPI_URL + `/api/course-announcements?populate=*`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json())
}
