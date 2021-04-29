import * as React from 'react'
import Icon from '../Icon'

function IconDownThin(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 1000" {...props}>
      <path d="M500 750L250 990 0 750h162V10h176v740h162" />
    </svg>
  )
}

export default (props) => <Icon icon={IconDownThin} {...props} />
