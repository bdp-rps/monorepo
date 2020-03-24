import { Box, useTheme } from '@bdp-rps/ui'

export default function NavBar({ children }) {
  const theme = useTheme()

  return (
    <Box
      width="100%"
      minHeight={40}
      extend={{ backgroundColor: theme.tokens.primary }}>
      {children}
    </Box>
  )
}
