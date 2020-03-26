import PropTypes from 'prop-types'
import React from 'react'
import { useFela } from 'react-fela'

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

  const { css } = useFela(styleProps)

  return (
    <a {...props} href={!disabled ? href : undefined} className={css(style)}>
      {children}
    </a>
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
