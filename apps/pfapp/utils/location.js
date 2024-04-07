let values = ['OUTSIDE', 'INSIDE']

let toText = (location) => {
  switch (location) {
    case 'OUTSIDE':
      return 'draußen'
    case 'INSIDE':
      return 'drinnen'
    default:
      return 'Keine Angaben'
  }
}

export default { toText, values }
