import React from 'react'
import { Box, Text, Card, useTheme, IconTrash, IconButton } from '@bdp-rps/ui'

// const style = ({ theme }) => ({
//   textDecoration: 'none',
//   outline: 0,
//   paddingTop: 8,
//   paddingRight: 8,
//   paddingBottom: 8,
//   paddingLeft: 0,
//   flexGrow: 1,
//   borderBottomWidth: 1,
//   borderBottomStyle: 'solid',
//   borderBottomColor: theme.colors.grey7,
//   ':last-child': {
//     borderBottomWidth: 0,
//   },
// })

export default function TimeSlotCard({
  onClick,
  title,
  description,
  onDelete,
}) {
  const theme = useTheme()
  return (
    <Box>
      <Card
        extend={{
          border: '1px solid',
          borderColor: theme.tokens.inputBorder,
          ':hover': onClick
            ? {
                cursor: 'pointer',
                borderColor: theme.colors.blueLight,
              }
            : {},
        }}>
        <Box alignItems="flex-end" marginHorizontal={-6}>
          <IconButton
            icon={(props) => <IconTrash f {...props} />}
            onClick={onDelete}
          />
        </Box>
        <Box space={4}>
          <Box>
            <Text variant="category">Titel</Text>
            <Text>{title}</Text>
          </Box>
          <Box>
            <Text variant="category">Beschreibung</Text>
            <Text>{description}</Text>
          </Box>
        </Box>
      </Card>
    </Box>
  )
}
