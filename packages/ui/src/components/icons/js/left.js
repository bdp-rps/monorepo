import * as React from 'react'
import Icon from '../Icon'
function IconLeft(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 730 1000" {...props}>
      <path d="M378 830L0 500l378-330v190h352v278H378v192" />
    </svg>
  )
}
export default (props) => <Icon icon={IconLeft} {...props} />
