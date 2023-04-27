import ICalParser from 'ical-js-parser'

const URL =
  'http://p113-caldav.icloud.com/published/2/NTc3MjYxODIwNTc3MjYxOL9EAXRUtN8Jk2TOJ4lytVjeXa1g5MooZp2-uuLqbgfCiUN_eh0zpHmy3xgMbPZEyjPgbw3-p8HkOAKvXJAc5gU'

const halfDay = 1000 * 60 * 60 * 12

function getDate({ value, isAllDay }, isStartDate) {
  const [match, year, month, day] = value.match(
    /([0-9]{4})([0-9]{2})([0-9]{2})/
  )

  const date = new Date(year, parseInt(month) - 1, day)
  return date.valueOf() - (isAllDay ? (isStartDate ? -halfDay : halfDay) : 0)
}

function getLocation(location) {
  return location
    .replace(/\\n/gi, ', ')
    .replace(', Germany', '')
    .replace(', Rhineland-Palatinate', '')
    .replace(/\\/gi, '')
}

function getDescription(description) {
  return description.replace(/\\n/gi, '<br />')
}

function normalizeEvent({
  uid,
  summary,
  description = '',
  location = '',
  dtstart,
  dtend,
}) {
  const startDate = getDate(dtstart, true)
  const endDate = getDate(dtend, false)

  return {
    id: uid,
    name: summary,
    description: getDescription(description),
    location: getLocation(location),
    startDate,
    endDate,
  }
}

export default async function getEvents(cutOff = new Date(), url = URL) {
  const res = await fetch(url)
  const data = await res.text()

  const { events } = ICalParser.toJSON(data)

  const timestamp = cutOff.valueOf()

  return events
    .map(normalizeEvent)
    .filter((event) => event.startDate >= timestamp)
    .sort((a, b) => (a.startDate >= b.startDate ? 1 : -1))
}
