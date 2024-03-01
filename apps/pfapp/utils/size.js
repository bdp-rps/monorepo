let values = ['SMALL', 'MEDIUM', 'LARGE']

let toText = (size) => {
  switch (size) {
    case 'SMALL':
      return 'klein'
    case 'MEDIUM':
      return 'mittel'
    case 'LARGE':
      return 'groß'
  }
}

export default { toText, values }
