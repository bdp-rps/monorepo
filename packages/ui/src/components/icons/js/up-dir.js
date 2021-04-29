import * as React from 'react'
import Icon from '../Icon'

function IconUpDir(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 1000" {...props}>
      <path d="M0 700l230-400 230 400H0" />
    </svg>
  )
}

export default (props) => <Icon icon={IconUpDir} {...props} />
