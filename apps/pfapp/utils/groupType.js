let values = ['WOLF', 'RR', 'SCOUT']

let toText = (groupType) => {
  switch (groupType) {
    case 'WOLF':
      return 'Wölflinge'
    case 'RR':
      return 'Ranger und Rover'
    case 'SCOUT':
      return 'Pfadfinderinnen und Pfadfinder'
  }
}

export default { toText, values }
