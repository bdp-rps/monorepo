import React from 'react'
import { useFela } from 'react-fela'

export default function Icon({
  icon: Icon,
  fill = 'currentColor',
  stroke = 'currentColor',
  size = '1em',
  extend,
  ...props
}) {
  const { css } = useFela()
  const style = {
    fill,
    stroke,
  }

  return (
    <Icon
      focusable="false"
      aria-hidden
      width={size}
      height={size}
      {...props}
      className={css(style, extend)}
    />
  )
}
