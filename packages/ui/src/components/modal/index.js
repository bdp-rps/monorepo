import PropTypes from 'prop-types'
import React, { useRef } from 'react'

import Box from '../box'
import Card from '../card'

export default function Modal({ children, visible, onClose }) {
  const innerRef = useRef()

  if (!visible) {
    return null
  }

  return (
    <Box
      justifyContent="center"
      alignItems="center"
      onClick={e => {
        const isClickOnInner = innerRef.current.contains(e.target)

        if (!isClickOnInner && onClose) {
          onClose()
        }
      }}
      extend={{
        position: 'fixed',
        zIndex: 1000,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0, 0.3)',
      }}>
      <Box
        ref={innerRef}
        alignSelf="center"
        justifyContent="center"
        alignItems="center"
        shrink={1}>
        <Card>{children}</Card>
      </Box>
    </Box>
  )
}

Modal.defaultProps = {
  visible: false,
}

Modal.propTypes = {
  /** Sets the visiblity of the modal. */
  visible: PropTypes.bool,
  /** A listener that is called once clicked outside of the modal. */
  onClose: PropTypes.func,
}
