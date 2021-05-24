import { Box, Text } from '@bdp-rps/ui'
import React from 'react'

export default function BankAccount(props) {
  return (
    <Box {...props}>
      <Text weight="bold">Spendenkonto: Förderverein Watoto Kabisa</Text>
      <Text weight="bold">IBAN: DE93 5405 0110 0000 5389 91</Text>
      <Text weight="bold">BIC: MALADE51KLS</Text>
      <Text weight="bold">Stadtsparkasse Kaiserslautern</Text>
    </Box>
  )
}
