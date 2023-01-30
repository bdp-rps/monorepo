export default function normalizeChord(chord) {
  if (!chord) {
    return ''
  }

  return chord
    .replace(/[() ]+/g, '')
    .replace('b', 'bb')
    .replace('B', 'Bb')
    .replace('h', 'b')
    .replace('H', 'B')
    .replace(
      /^[a-z]+/g,
      (match) => match.charAt(0).toUpperCase() + match.substr(1) + 'm'
    )
    .replace('is', '#')
    .replace('s', 'b')
}
