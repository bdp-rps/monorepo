import * as React from 'react'
import Icon from '../Icon'

function IconDownBold(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 1000" {...props}>
      <path d="M760 484L380 864 0 484h192V134h376v350h192" />
    </svg>
  )
}

export default (props) => <Icon icon={IconDownBold} {...props} />
