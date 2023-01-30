import * as React from 'react'
import Icon from '../Icon'
function IconChevronDown(props) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M.8 4.4l6.634 6.96a.8.8 0 001.132 0L15.2 4.4"
        stroke="#100D2B"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
export default (props) => <Icon icon={IconChevronDown} {...props} />
