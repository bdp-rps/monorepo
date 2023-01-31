export default function escapeSongName(name) {
  return name
    .replace(/\s+/gi, '_')
    .toLowerCase()
    .replace('ü', 'ue')
    .replace('ä', 'ae')
    .replace('ß', 'ss')
    .replace('ö', 'oe')
    .replace(/\W/gi, '')
    .replace(/_/gi, '-')
}
