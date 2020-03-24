import { Box } from '@bdp-rps/ui'

export default function Layout({ children }) {
  return (
    <Box alignItems="center">
      <Box padding={[2, , , 0]} maxWidth={1000} width="100%" alignSelf="center">
        {children}
      </Box>
    </Box>
  )
}
