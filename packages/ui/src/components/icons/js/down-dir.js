import * as React from 'react'
import Icon from '../Icon'

function IconDownDir(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 1000" {...props}>
      <path d="M460 300L230 700 0 300h460" />
    </svg>
  )
}

export default (props) => <Icon icon={IconDownDir} {...props} />
