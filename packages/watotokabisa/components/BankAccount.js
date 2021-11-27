import { Box, Text } from '@bdp-rps/ui'
import React from 'react'

export default function BankAccount(props) {
  return (
    <Box {...props}>
      <Text weight="bold">Spendenkonto: Förderverein Watoto Kabisa</Text>
      <Text weight="bold">IBAN: DE12 5405 0220 0034 5389 91</Text>

      <Text weight="bold">BIC: MALADE51KLS</Text>
      <Text weight="bold">Stadtsparkasse Kaiserslautern</Text>
    </Box>
  )
}
