const sizeToString = (size) => {
  switch (size) {
    case 'large':
      return 'Groß'
      break
    case 'medium':
      return 'Mittel'
      break
    case 'small':
      return 'Klein'
      break

    default:
      return 'Nicht Angegeben'
      break
  }
}
const typeToString = (type) => {
  switch (type) {
    case 'lager':
      return 'Lager'
      break
    case 'stammeslager':
      return 'Stammeslager'
      break
    case 'stammesheim':
      return 'Stammesheim'
      break
    case 'heim':
      return 'Heim'
      break

    default:
      return 'Nicht Angegeben'
      break
  }
}

export { sizeToString, typeToString }
