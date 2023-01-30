export default function removeChords(content) {
  return content.replace(/(?:\r\n|\r|\n)/gi, ' ')
}
