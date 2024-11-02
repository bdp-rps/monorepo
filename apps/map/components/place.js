import React, { useState, useEffect } from 'react'
import { Text, Box, Spacer, Button } from '@bdp-rps/ui'

export default function Song({ name }) {
  return (
    <Box>
      <Text variant="category">{name}</Text>
      <Box>
        <Text>{'  '}</Text>
      </Box>
    </Box>
  )
}
