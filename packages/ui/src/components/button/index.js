import PropTypes from 'prop-types'
import React from 'react'
import { useFela } from 'react-fela'

const style = ({ theme, intent, variant }) => ({
  alignSelf: 'stretch',
  display: 'flex',
  flexGrow: 1,
  justifyContent: 'center',
  appearance: 'none',
  cursor: 'pointer',
  paddingLeft: 15,
  paddingRight: 15,
  paddingTop: 14,
  paddingBottom: 14,
  textAlign: 'center',
  boxSizing: 'border-box',
  fontFamily: theme.fonts.content,
  lineHeight: 1,
  borderWidth: 2,
  borderStyle: 'solid',
  fontSize: 18,
  transformOrigin: '50% 50%',
  transitionProperty: 'color, background-color, transform',
  transitionDuration: '150ms, 150ms, 50ms',
  transitionTimingFunction: 'ease-in-out',
  backgroundColor: theme.tokens.primary,
  borderColor: theme.tokens.primary,
  color: theme.colors.white,
  ':hover': {
    backgroundColor: theme.tokens.primaryLight,
    borderColor: theme.tokens.primaryLight,
  },
  ':active': {
    transform: 'scale(0.95)',
  },
  extend: {
    condition: variant === 'secondary',
    style: {
      borderColor: theme.tokens.primary,
      color: theme.tokens.primary,
      backgroundColor: 'transparent',
      ':hover': {
        color: theme.colors.white,
      },
    },
  },
})

export default function Button({ onClick, children, variant, ...props }) {
  const styleProps = {
    variant,
  }

  const { css } = useFela(styleProps)

  return (
    <button {...props} onClick={onClick} className={css(style)}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  variant: 'primary',
}

Button.propTypes = {
  /** Use either a primary or a secondary button. */
  variant: PropTypes.oneOf(['primary', 'secondary']),
  /** The onClick event handler */
  onClick: PropTypes.func,
}
