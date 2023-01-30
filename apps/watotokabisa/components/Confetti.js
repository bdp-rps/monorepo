import React, { useState, useEffect } from 'react'
import { Box, useTheme } from '@bdp-rps/ui'
import BaseConfetti from 'react-dom-confetti'

export default function Confetti({ delay = 500 }) {
  const theme = useTheme()
  const [active, setActive] = useState(false)

  const config = {
    angle: 0,
    spread: 360,
    startVelocity: 40,
    elementCount: 300,
    dragFriction: 0.12,
    duration: 3000,
    stagger: 3,
    width: '10px',
    height: '10px',
    perspective: '500px',
    colors: [
      theme.colors.redSalsa,
      theme.colors.yellowOrange,
      theme.colors.pistachio,
      theme.colors.zomp,
      theme.colors.cgBlue,
      theme.colors.red,
    ],
  }

  useEffect(() => {
    const timeout = setTimeout(() => setActive(true), delay)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <Box
      alignItems="center"
      justifyContent="center"
      extend={{
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 40,
        pointerEvents: 'none',
      }}
    >
      <BaseConfetti active={active} config={config} />
    </Box>
  )
}
