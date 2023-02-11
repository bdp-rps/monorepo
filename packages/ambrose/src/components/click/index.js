import React from 'react'
import PropTypes from 'prop-types'

import El from '../el'

import useConfig from '../../config/useConfig'

const buttonResetStyle = ({ disabled }) => ({
  backgroundColor: 'unset',
  backgroundImage: 'unset',
  margin: 0,
  padding: 0,
  borderWidth: 0,
  textAlign: 'left',
  cursor: 'pointer',
  appearance: 'none',
  touchAction: 'manipulation',
  color: 'inherit',
  '::-moz-focus-inner': {
    borderWidth: 0,
    padding: 0,
  },
  extend: [
    {
      condition: disabled,
      style: {
        cursor: 'not-allowed',
      },
    },
    {
      condition: !disabled,
      style: {
        ':active': {
          color: 'inherit',
        },
      },
    },
  ],
})

const linkResetStyle = ({ disabled }) => ({
  textDecoration: 'none',
  color: 'inherit',
  extend: [
    {
      condition: disabled,
      style: {
        cursor: 'not-allowed',
      },
    },
    {
      condition: !disabled,
      style: {
        ':active': {
          color: 'inherit',
        },
      },
    },
  ],
})

const Click = React.forwardRef(
  ({ action, disabled, target, children, extend, ...props }, ref) => {
    const config = useConfig()

    const isLink = typeof action === 'string' || typeof action === 'object'

    const Link = config.linkComponent || 'a'
    const as = isLink ? Link : 'button'

    const appliedStyle = isLink ? linkResetStyle :  buttonResetStyle

    return (
      <El
        {...props}
        target={isLink ? target : undefined}
        disabled={!isLink ? disabled : undefined}
        href={!disabled && isLink && action ? action : undefined}
        onClick={!disabled !isLink && action ? action : undefined}
        onTouchStart={() => {}}
        ref={ref}
        as={as}
        type={!isLink ? props.type || 'button' : null}
        extend={[
          {
            boxSizing: 'border-box',
          },
          appliedStyle({ disabled }),
          extend,
        ]}>
        {children}
      </El>
    )
  }
)

export default Click

Click.displayName = 'Click'
Click.propTypes = {
  /** An object containing valid CSS style declarations */
  extend: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
    PropTypes.array,
  ]),
  /** Either a string or object setting the href attribute that forces the component to render an <a> tag or a function setting the onClick handler */
  action: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.func]),
  /** If rendering a button (by not supplying an href), this let's you provide a type attribute for that button */
  type: PropTypes.string,
  /** A JSX node */
  children: PropTypes.node,
  /** Set the Click to disabled */
  disabled: PropTypes.bool,
}
