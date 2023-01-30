import * as React from 'react'
import Icon from '../Icon'
function IconMinus(props) {
  return (
    <svg viewBox="0 0 580 1000" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M550 450c20 0 30 16.667 30 50s-10 50-30 50H30c-20 0-30-16.667-30-50s10-50 30-50h520" />
    </svg>
  )
}
export default (props) => <Icon icon={IconMinus} {...props} />
