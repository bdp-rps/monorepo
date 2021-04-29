import * as React from 'react'
import Icon from '../Icon'

function IconRight(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 730 1000" {...props}>
      <path d="M350 170l380 330-380 330V638H0V360h350V170" />
    </svg>
  )
}

export default (props) => <Icon icon={IconRight} {...props} />
