import { Box } from '@bdp-rps/ui'

export default function Layout({ children, extend, ...props }) {
  return (
    <Box {...props} alignItems="center" extend={extend}>
      <Box
        padding={[2.5, , , 0]}
        maxWidth={999}
        width="100%"
        alignSelf="center">
        {children}
      </Box>
    </Box>
  )
}
