import * as React from 'react'
import Icon from '../Icon'

function IconLeftBold(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 730 1000" {...props}>
      <path d="M378 120v190h352v378H378v192L0 500l378-380" />
    </svg>
  )
}

export default (props) => <Icon icon={IconLeftBold} {...props} />
