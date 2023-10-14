let values = ['OUTSIDE', 'INSIDE']

let toText = (location) => {
  switch (location) {
    case 'OUTSIDE':
      return 'draußen'
    case 'INSIDE':
      return 'drinnen'
  }
}

export default { toText, values }
