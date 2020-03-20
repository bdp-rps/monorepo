import React from 'react'

import Spacer from '../src/components/spacer'
import Text from '../src/components/text'

export default ({ name, children }) => (
  <div style={{ padding: 20, paddingRight: 40, minWidth: 300 }}>
    <Text intent="note" variant="info" extend={{ color: 'rgb(150, 150, 150)' }}>
      {name}
    </Text>
    <Spacer size={1.5} />
    {children}
  </div>
)
