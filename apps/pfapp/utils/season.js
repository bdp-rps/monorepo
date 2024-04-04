let values = ['SPRING', 'SUMMER', 'AUTMN', 'WINTER']

let toText = (season) => {
  switch (season) {
    case 'SPRING':
      return 'Frühling'
    case 'SUMMER':
      return 'Sommer'
    case 'AUTMN':
      return 'Herbst'
    case 'WINTER':
      return 'Winter'
  }
}

export default { toText, values }
