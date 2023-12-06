import * as React from 'react'
import Image from 'next/image'
import { Box } from '@bdp-rps/ui'

const Logo = React.forwardRef(({ color = '#3c3c3c' }, ref) => {
  return (
    <Box>
      <Image src="/images/logo.png" alt="Logo" width={138} height={150} />
    </Box>
  )
})

export default Logo
