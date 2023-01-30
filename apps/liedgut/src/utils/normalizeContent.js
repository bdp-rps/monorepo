export default function normalizeContent(content) {
  return content.replace(/{[a-z0-9]}/gi, '').toLowerCase()
}
