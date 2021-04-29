import * as React from 'react'
import Icon from '../Icon'

function IconLeftThin(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 980 1000" {...props}>
      <path d="M240 750L0 500l240-250v160h740v178H240v162" />
    </svg>
  )
}

export default (props) => <Icon icon={IconLeftThin} {...props} />
