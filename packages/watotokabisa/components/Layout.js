import { Box, useTheme } from '@bdp-rps/ui'

export default function Layout({ children, ...props }) {
  const theme = useTheme()

  return (
    <Box
      paddingHorizontal={[4, , , 0]}
      {...props}
      maxWidth={theme.maxContentWidth}
      width="100%"
      alignSelf="center">
      {children}
    </Box>
  )
}
