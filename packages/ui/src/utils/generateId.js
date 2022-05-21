function stringifyChildren(node) {
  if (typeof node === 'string') {
    return node
  }

  if (node.props && node.props.children) {
    if (Array.isArray(node.props.children)) {
      return node.props.children.map(stringifyChildren).join('')
    }

    return stringifyChildren(node.props.children)
  }
}

export default function generateId(node) {
  const value = stringifyChildren(node)

  return value.toLowerCase().replace(/ /gi, '')
}
