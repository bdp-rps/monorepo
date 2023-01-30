import * as React from 'react'
import Icon from '../Icon'
function IconRightDir(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 1000" {...props}>
      <path d="M0 270l400 230L0 730V270" />
    </svg>
  )
}
export default (props) => <Icon icon={IconRightDir} {...props} />
