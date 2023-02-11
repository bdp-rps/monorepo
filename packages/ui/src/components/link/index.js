import PropTypes from 'prop-types'
import React from 'react'

const style = ({ disabled, theme }) => ({
  fontSize: 16,
  fontFamily: theme.fonts.content,
  color: theme.tokens.primary,
  ':hover': {
    color: theme.tokens.primaryLight,
  },
  extend: [
    {
      condition: disabled,
      style: {
        cursor: 'not-allowed',
        color: theme.tokens.inputDisabledForeground,
        ':hover': {
          color: theme.tokens.inputDisabledForeground,
        },
      },
    },
  ],
})

export default function Link({ href, disabled, children, ...props }) {
  const styleProps = {
    disabled,
  }

  const extend = style(styleProps)

  return (
    <Click {...props} action={!disabled ? href : undefined} extend={extend}>
      {children}
    </Click>
  )
}

Link.defaultProps = {
  disabled: false,
}

Link.propTypes = {
  /** The href that the link points to. */
  href: PropTypes.string.isRequired,
  /** Whether the link is disabled. */
  disabled: PropTypes.bool,
}
