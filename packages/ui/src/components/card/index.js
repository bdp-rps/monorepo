import PropTypes from 'prop-types'
import React from 'react'
import { useFela } from 'react-fela'

import Box from '../box'

const style = ({ elevation }) => ({
  transition: 'box-shadow 200ms ease-in-out',
  padding: 20,
  backgroundColor: 'white',
  extend: [
    {
      condition: elevation === 'minimal',
      style: {
        boxShadow: '0 1px 4px rgba(0, 0, 0, 0.28)',
        ':hover': {
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.28)',
        },
      },
    },
    {
      condition: elevation === 'low',
      style: {
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.20)',
        ':hover': {
          boxShadow: '0 1px 4px rgba(0, 0, 0, 0.20)',
        },
      },
    },
    {
      condition: elevation === 'medium',
      style: {
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.16)',
        ':hover': {
          boxShadow: '0 1px 6px rgba(0, 0, 0, 0.20)',
        },
      },
    },
    {
      condition: elevation === 'high',
      style: {
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
        ':hover': {
          boxShadow: '0 1px 10px rgba(0, 0, 0, 0.20)',
        },
      },
    },
  ],
})

export default function Card({
  children,
  extend,
  elevation = 'low',
  ...props
}) {
  return (
    <Box {...props} extend={[style({ elevation }), extend]}>
      {children}
    </Box>
  )
}

Card.defaultProps = {
  elevation: 'low',
}

Card.propTypes = {
  /** Sets the amount of elevation that the card is above the page. */
  elevation: PropTypes.oneOf(['minimal', 'low', 'medium', 'high']),
  /** Extends the Fela style object. */
  extends: PropTypes.object,
}
