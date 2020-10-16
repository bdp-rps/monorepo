export default function removeChords(content) {
  return content.replace(/\{[A-Z0-9\(\)\/]*\}/gi, '')
}
