import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import { useTheme } from 'ambrose'

import Box from '../box'
import Click from '../click'
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

const Button = forwardRef(
  (
    {
      href,
      disabled,
      intent,
      variant,
      loading,
      type,
      size,
      icon: Icon,
      iconPosition = 'right',
      target,
      onClick,
      children,
      ...props
    },
    ref
  ) => {
    const theme = useTheme()

    const extend = style({
      intent,
      variant,
      disabled,
      loading,
      size,
      theme,
      hasIcon: Icon,
    })
    const buttonProps = {
      ...props,
      disabled,
      extend,
      type,
    }

    if (loading) {
      return (
        <Box {...props} extend={extend} ref={ref}>
          <Box
            extend={{
              position: 'absolute',
            }}>
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
          </Box>
          {children}
        </Box>
      )
    }

    const content = (
      <Box direction="row" space={2}>
        {iconPosition === 'left' && Icon && <Icon />}
        {children}
        {iconPosition === 'right' && Icon && <Icon />}
      </Box>
    )

    if (href) {
      const rel = target === '_blank' ? 'noreferrer noopener' : ''

      return (
        <Click {...buttonProps} ref={ref} href={href} target={target} rel={rel}>
          {content}
        </Click>
      )
    }

    return (
      <Click {...buttonProps} ref={ref} onClick={onClick}>
        {content}
      </Click>
    )
  }
)

export default Button

Button.displayName = 'Button'
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
  type: PropTypes.oneOf(['submit', 'reset']),
  /** Makes the button act as a link tag. */
  href: PropTypes.string,
}
