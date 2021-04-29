import * as React from 'react'
import Icon from '../Icon'

function IconUp(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 660 1000" {...props}>
      <path d="M660 514H468v350H192V514H0l330-380 330 380" />
    </svg>
  )
}

export default (props) => <Icon icon={IconUp} {...props} />
