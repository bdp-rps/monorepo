import * as React from 'react'
import Icon from '../Icon'
function IconUpBold(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 1000" {...props}>
      <path d="M760 514H568v350H192V514H0l380-380 380 380" />
    </svg>
  )
}
export default (props) => <Icon icon={IconUpBold} {...props} />
