import React, { useRef } from 'react'
import { Box, Card } from '@bdp-rps/ui'

export default function Modal({ children, onClose }) {
  const innerRef = useRef()

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
