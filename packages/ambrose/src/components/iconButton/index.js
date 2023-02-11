import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { useFela } from 'react-fela'

import Click from '../click'
import Box from '../box'

import useIconLink from '../../hooks/useIconLink'

const buttonStyle = ({ theme, size }) => ({
  cursor: 'pointer',
  background: 'transparent',
  padding: 0,
  border: 0,
  width: size,
  height: size,
  font: 'inherit',
  ':focus': {
    outline: 0,
    boxShadow: '0 0 0 1px white, 0px 0px 0 3px ' + theme.colors.focusColor,
    ':not(:focus-visible)': {
      boxShadow: 'none',
    },
  },
})

const linkStyle = ({ size }) => ({
  textDecoration: 'none',
  display: 'flex',
  color: 'inherit',
  width: size,
  height: size,
  alignItems: 'center',
  justifyContent: 'center',
})

const IconButton = forwardRef(
  (
    {
      label,
      action,
      icon: Icon,
      size,
      iconSize,
      role,
      color,
      disabled,
      extend,
      ...props
    },
    ref
  ) => {
    const { theme } = useFela()

    const isLink = typeof action === 'string' || typeof action === 'object'
    const styleProps = {
      size,
      theme,
    }

    if (isLink) {
      const {
        linkProps,
        iconProps,
        label: labelEl,
      } = useIconLink(label, action)

      return (
        <Click
          {...props}
          {...linkProps}
          ref={ref}
          action={action}
          disabled={disabled}
          extend={[linkStyle(styleProps), extend]}>
          <Icon size={iconSize} color={color} {...iconProps} />
          {labelEl}
        </Click>
      )
    }

    return (
      <Click
        {...props}
        ref={ref}
        onClick={onClick}
        disabled={disabled}
        extend={[buttonStyle(styleProps), extend]}>
        <Box
          extend={{
            alignItems: 'center',
            justifyContent: 'center',
          }}
          // maybe this should be aria-label? Ask kitty
          title={label}
          role={role}>
          <Icon size={iconSize} color={color} aria-hidden focusable={false} />
          {labelEl}
        </Box>
      </Click>
    )
  }
)

export default IconButton

IconButton.displayName = 'IconButton'

IconButton.defaultProps = {
  size: 48,
  iconSize: 16,
  role: 'presentation',
  color: 'foreground.primary',
}

IconButton.propTypes = {
  size: PropTypes.number,
  iconSize: PropTypes.number,
  /** Either a string or object setting the href attribute that forces the component to render an <a> tag or a function setting the onClick handler */
  action: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.func,
  ]),
  label: PropTypes.string.isRequired,
  icon: PropTypes.func.isRequired,
  role: PropTypes.string,
}
