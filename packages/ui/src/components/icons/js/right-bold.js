import * as React from 'react'
import Icon from '../Icon'
function IconRightBold(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 730 1000" {...props}>
      <path d="M350 120l380 380-380 380V688H0V310h350V120" />
    </svg>
  )
}
export default (props) => <Icon icon={IconRightBold} {...props} />
