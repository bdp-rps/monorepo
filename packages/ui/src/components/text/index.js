import React from 'react'
import { useFela } from 'react-fela'

import applySpacing from '../../utils/applySpacing'

export default function Text({
  as,
  children,
  variant,
  intent = 'body',
  extend,
  align,
  weight,
  color,
  height,
  domProps,
  ...otherProps
}) {
  const { css, theme } = useFela()
  const spacing = applySpacing(theme.baselineGrid)
  const {
    element,
    fontSize,
    lineHeight,
    fontWeight,
    variants,
    color: defaultColor,
    ...fontStyle
  } = theme.typography[intent]

  const Component = as || element

  return (
    <Component
      {...otherProps}
      {...domProps}
      className={css(
        {
          ...fontStyle,
          display: 'inline',
          color: color || defaultColor,
          textAlign: align,
          fontWeight: weight || fontWeight,
          lineHeight: height || lineHeight + 'px',
          fontSize,
          ...(variants && variants[variant] ? variants[variant] : {}),
        },
        extend
      )}>
      {children}
    </Component>
  )
}
