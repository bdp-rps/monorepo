import PropTypes from 'prop-types'
import React from 'react'
import { useFela } from 'react-fela'
import { applyMultiplier } from 'kilvin'

export default function Text({
  as,
  children,
  variant,
  intent,
  extend,
  align,
  weight,
  color,
  height,
  ...props
}) {
  const { css, theme } = useFela()
  const spacing = applyMultiplier(theme.baselineGrid)

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
      {...props}
      className={css(
        {
          ...fontStyle,
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

Text.defaultProps = {
  intent: 'body',
}

Text.propTypes = {
  /** Sets the semantic type for its text. */
  intent: PropTypes.oneOf([
    'title',
    'subtitle',
    'category',
    'body',
    'label',
    'note',
  ]),
  /** Some intents also support specific variants. */
  variant: PropTypes.oneOf(['info']),
  /** Extends the Fela style object. */
  extend: PropTypes.object,
}
