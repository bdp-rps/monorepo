import React from 'react'
import { Click, Text, useConfig } from '@bdp-rps/ui'

export default function Link({ href, children, variant = 'body' }) {
  return (
    <Click href={href}>
      <Text variant={variant} extend={{ textDecoration: 'underline' }}>
        {children}
      </Text>
    </Click>
  )
}
