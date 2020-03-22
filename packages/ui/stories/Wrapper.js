import React from 'react'

import Box from '../src/components/box'
import Spacer from '../src/components/spacer'
import Text from '../src/components/text'

export default ({ name, children }) => (
  <Box padding={5} paddingRight={10} minWidth={300}>
    <Text intent="note" variant="info" extend={{ color: 'rgb(150, 150, 150)' }}>
      {name}
    </Text>
    <Spacer size={1.5} />
    {children}
  </Box>
)
