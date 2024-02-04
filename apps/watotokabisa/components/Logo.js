import * as React from 'react'
import Image from 'next/image'
import { Box } from '@bdp-rps/ui'

const Logo = React.forwardRef(({ color = '#3c3c3c' }, ref) => {
  return (
    <div style={{ width: 138, height: 150 }}>
      <Image
        src="/images/logo.png"
        alt="Logo"
        width={138}
        height={150}
        sizes="100vw"
      />
    </div>
  )
})

export default Logo
