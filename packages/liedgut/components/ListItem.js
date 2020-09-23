import React from 'react'
import { Box } from '@bdp-rps/ui'

const style = ({ theme }) => ({
  textDecoration: 'none',
  outline: 0,
  paddingTop: 8,
  paddingRight: 8,
  paddingBottom: 8,
  paddingLeft: 0,
  borderBottomWidth: 1,
  borderBottomStyle: 'solid',
  borderBottomColor: theme.colors.grey7,
  ':last-child': {
    borderBottomWidth: 0,
  },
})

export default function ListItem({
  href,
  onClick,
  children,
  extend,
  ...props
}) {
  if (href) {
    return (
      <Box as="a" {...props} href={href} extend={[style, extend]}>
        {children}
      </Box>
    )
  }

  return (
    <Box {...props} onClick={onClick} extend={[style, extend]}>
      {children}
    </Box>
  )
}
