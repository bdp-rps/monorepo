import * as React from 'react'
import Icon from '../Icon'
function IconDown(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 660 1000" {...props}>
      <path d="M660 484L330 864 0 484h192V134h276v350h192" />
    </svg>
  )
}
export default (props) => <Icon icon={IconDown} {...props} />
