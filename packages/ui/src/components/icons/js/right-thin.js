import * as React from 'react'
import Icon from '../Icon'
function IconRightThin(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 980 1000" {...props}>
      <path d="M742 750V588H0V410h742V250l238 250-238 250" />
    </svg>
  )
}
export default (props) => <Icon icon={IconRightThin} {...props} />
