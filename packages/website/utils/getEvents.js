import ICalParser from 'ical-js-parser'

const URL =
  'http://p113-caldav.icloud.com/published/2/NTc3MjYxODIwNTc3MjYxOL9EAXRUtN8Jk2TOJ4lytVjeXa1g5MooZp2-uuLqbgfCiUN_eh0zpHmy3xgMbPZEyjPgbw3-p8HkOAKvXJAc5gU'

function getDate(value) {
  const [match, year, month, day] = value.match(
    /([0-9]{4})([0-9]{2})([0-9]{2})/
  )

  const date = new Date(year, parseInt(month) - 1, day)
  return date.valueOf()
}

function normalizeEvent({
  uid,
  summary,
  description = '',
  location = '',
  dtstart,
  dtend,
}) {
  const startDate = getDate(dtstart.value)
  const endDate = getDate(dtend.value)

  return {
    id: uid,
    name: summary,
    description,
    location,
    startDate,
    endDate,
  }
}

export default async function getEvents(cutOff = new Date()) {
  const res = await fetch(URL)
  const data = await res.text()

  const { events } = ICalParser.toJSON(data)

  const timestamp = cutOff.valueOf()

  return events
    .map(normalizeEvent)
    .filter((event) => event.startDate >= timestamp)
    .sort((a, b) => (a.startDate >= b.startDate ? 1 : -1))
}
