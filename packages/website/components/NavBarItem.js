import { Box, Text, useTheme } from '@bdp-rps/ui'

export default function NavBarItem({ href, onClick, children }) {
  const theme = useTheme()

  return (
    <Box
      as={href ? 'a' : 'div'}
      href={href}
      onClick={onClick}
      paddingTop={[1, , , 3]}
      paddingBottom={[1, , , 3]}
      minWidth={50}
      extend={{
        cursor: 'pointer',
        textDecoration: 'none',
        ':hover': {
          '> p': {
            color: theme.tokens.secondaryLight,
          },
        },
      }}>
      <Text
        color={theme.tokens.background}
        extend={{ fontSize: 18, lineHeight: 1 }}>
        {children}
      </Text>
    </Box>
  )
}
