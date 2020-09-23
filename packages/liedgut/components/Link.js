import React from 'react'
import { Box } from '@bdp-rps/ui'

const style = ({ theme }) => ({
  fontSize: 16,
  fontFamily: theme.fonts.content,
  color: theme.tokens.primary,
  ':hover': {
    color: theme.tokens.primaryLight,
  },
})

export default function Link({ href, disabled, children, ...props }) {
  return (
    <Box as="a" {...props} href={href} disabled={disabled} extend={style}>
      {children}
    </Box>
  )
}
