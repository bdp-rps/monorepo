import React from 'react'

import Box from '../box'

const alignMap = {
  start: 'flex-start',
  end: 'flex-end',
  center: 'center',
}

export default function Row({
  size = 12,
  align = 'start',
  style,
  extend,
  children,
}) {
  const width = (size / 12) * 100 + '%'

  return (
    <Box
      style={style}
      extend={extend}
      wrap="wrap"
      maxWidth="inherit"
      marginLeft={-4}
      marginRight={-4}
      direction={[, , , 'row']}
      justifyContent={[, , , alignMap[align]]}>
      {children}
    </Box>
  )
}
