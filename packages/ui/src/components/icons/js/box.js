import * as React from 'react'
import Icon from '../Icon'
function IconBox(props) {
  return (
    <svg viewBox="0 0 900 1000" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M870 100c8 0 15 3 21 9s9 13 9 21v120H0V130c0-8 3-15 9-21s13-9 21-9h840M50 830V300h800v530c0 20-7 36.667-21 50-14 13.333-30.333 20-49 20H120c-18.667 0-35-6.667-49-20s-21-30-21-50m250-430v100h300V400H300" />
    </svg>
  )
}
export default (props) => <Icon icon={IconBox} {...props} />
