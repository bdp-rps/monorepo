import * as React from 'react'

import { Box, Text } from '@bdp-rps/ui'
import ActivityForm from '../components/ActivityForm'
import Template from '../components/Template'

export default function Page() {
  return (
    <Template>
      <Box minHeight="95vh" paddingTop={4}>
        <Text variant="title">Gruppenstunde erstellen</Text>
        <ActivityForm />
      </Box>
    </Template>
  )
}
