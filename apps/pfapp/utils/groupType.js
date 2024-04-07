import * as React from 'react'
import { IconLilie, IconWolfskopf, IconRr } from '@bdp-rps/ui'

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

let toIcon = (groupType, size) => {
  switch (groupType) {
    case 'WOLF':
      return <IconWolfskopf size={size} />
    case 'RR':
      return <IconRr size={size} />
    case 'SCOUT':
      return <IconLilie size={size} />
  }
}
export default { toText, toIcon, values }
