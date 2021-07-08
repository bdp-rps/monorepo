import PropTypes from 'prop-types'
import React from 'react'
import { useFela } from 'react-fela'

import Loading from '../loading'

const fontSizeMap = {
  tiny: 12,
  small: 14,
  medium: 16,
  large: 18,
}

const padding = {
  tiny: 8,
  small: 10,
  medium: 14,
  large: 14,
}

const loadingSizeMap = {
  tiny: 3,
  small: 3.5,
  medium: 4,
  large: 4.5,
}

const colorMap = {
  positive: 'primary',
  negative: 'destructive',
}

const style = ({ theme, intent, variant, disabled, loading, size }) => ({
  boxSizing: 'border-box',
  textDecoration: 'none',
  alignSelf: 'flex-start',
  whiteSpace: 'nowrap',
  width: '100%',
  display: 'flex',
  flexGrow: 1,
  justifyContent: 'center',
  appearance: 'none',
  cursor: 'pointer',
  paddingLeft: padding[size] + 1,
  paddingRight: padding[size] + 1,
  paddingTop: padding[size],
  paddingBottom: padding[size],
  textAlign: 'center',
  fontFamily: theme.fonts.content,
  lineHeight: 1,
  borderWidth: 2,
  borderStyle: 'solid',
  fontSize: fontSizeMap[size],
  transformOrigin: '50% 50%',
  transitionProperty: 'color, background-color, transform',
  transitionDuration: '150ms, 150ms, 50ms',
  transitionTimingFunction: 'ease-in-out',
  backgroundColor: theme.tokens[colorMap[intent]],
  borderColor: theme.tokens[colorMap[intent]],
  color: theme.colors.white,

  ':disabled': {
    backgroundColor: theme.tokens.inputDisabledBackground,
    borderColor: theme.tokens.inputDisabledBackground,
    color: theme.tokens.inputDisabledForeground,
    cursor: 'not-allowed',
  },

  extend: [
    {
      condition: !disabled && !loading,
      style: {
        ':hover': {
          backgroundColor: theme.tokens[colorMap[intent] + 'Light'],
          borderColor: theme.tokens[colorMap[intent] + 'Light'],
        },
        ':active': {
          transform: 'scale(0.98)',
        },
      },
    },
    {
      condition: loading,
      style: {
        cursor: 'not-allowed',
      },
    },
    {
      condition: intent === 'secondary',
      style: {
        color: 'foreground.primary',
        borderColor: 'transparent',
        backgroundColor: 'transparent',
        textDecoration: 'underline',
        textDecorationColor: theme.tokens.primary,
        textDecorationThickness: 2,
        textUnderlineOffset: 4,
        ':focus': {
          boxShadow: '0 0 0 1px white, 0px 0px 0 3px ' + theme.colors.grey600,
          ':not(:focus-visible)': {
            boxShadow: 'none',
          },
        },
        extend: [
          {
            condition: loading,
            style: {
              textDecoration: 'none',
            },
          },
          {
            condition: !disabled && !loading,
            style: {
              '@media (hover:hover)': {
                ':hover': {},
              },
              ':active': {},
            },
          },
        ],
      },
    },
    {
      condition: !disabled && variant === 'secondary',
      style: {
        borderColor: theme.tokens[colorMap[intent]],
        color: theme.tokens[colorMap[intent]],
        backgroundColor: 'transparent',
        ':hover': {
          color: theme.colors.white,
        },
      },
    },
  ],
})

export default function Button({
  onClick,
  children,
  variant,
  intent,
  disabled,
  submit,
  loading,
  size,
  href,
  ...props
}) {
  const styleProps = {
    variant,
    intent,
    disabled,
    loading,
    size,
  }

  const { css, theme } = useFela(styleProps)

  if (loading) {
    return (
      <div {...props} className={css(style)}>
        <Loading
          size={loadingSizeMap[size]}
          color={
            variant === 'primary'
              ? theme.tokens.background
              : intent === 'positive'
              ? theme.tokens.primary
              : theme.tokens.destructive
          }
        />
      </div>
    )
  }

  if (href) {
    return (
      <a
        {...props}
        href={!disabled ? href : undefined}
        disabled={disabled}
        className={css(style)}>
        {children}
      </a>
    )
  }

  if (submit) {
    return (
      <input
        {...props}
        type="submit"
        disabled={disabled}
        onClick={!disabled ? onClick : undefined}
        className={css(style)}
        value={children}
      />
    )
  }

  return (
    <button
      {...props}
      disabled={disabled}
      onClick={!disabled ? onClick : undefined}
      className={css(style)}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  variant: 'primary',
  intent: 'positive',
  size: 'medium',
}

Button.propTypes = {
  /** Use either a primary or a secondary button. */
  variant: PropTypes.oneOf(['primary', 'secondary']),
  /** Use either a positive blue or a negative red button. */
  intent: PropTypes.oneOf(['positive', 'negative']),
  /** The size of the button. */
  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large']),
  /** The onClick event handler */
  onClick: PropTypes.func,
  /** Disables the button. The click event handler won't be triggered. */
  disabled: PropTypes.bool,
  /** Enables a loading state. Hover, active and click events aren't triggered anymore. */
  loading: PropTypes.bool,
  /** Renders an input of type="submit" for forms. */
  submit: PropTypes.bool,
  /** Makes the button act as a link tag. */
  href: PropTypes.string,
}
