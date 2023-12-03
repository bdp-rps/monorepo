import ICalParser from 'ical-js-parser'

const URL =
  'http://p107-caldav.icloud.com/published/2/MTA3MDUyMDY3NjUxMDcwNREKf3siCmXjnpHw1dzk0y6QdEvegy5whLSKTGq3RE66Xmd94oFbrfbZGqDJGmsZuaU-l4S7dkEOlU5QYW2TzgU'

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

export default async function getEvents(cutOff = new Date()) {
  const res = await fetch(URL)

  const data = await res.text()
  console.log('data', data)
  const { events } = ICalParser.toJSON(data)

  const timestamp = cutOff.valueOf()

  return events
    .map(normalizeEvent)
    .filter((event) => event.startDate >= timestamp)
    .sort((a, b) => (a.startDate >= b.startDate ? 1 : -1))
}
