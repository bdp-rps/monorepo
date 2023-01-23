import * as React from 'react'
import Icon from '../Icon'
function IconResizeFull(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 792 1000" {...props}>
      <path d="M476 104h316v316L692 296 546 448 446 348l152-146-122-98M246 548l100 100-152 146 122 100H0V578l100 122 146-152" />
    </svg>
  )
}
export default (props) => <Icon icon={IconResizeFull} {...props} />
