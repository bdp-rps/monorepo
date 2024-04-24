import React from 'react'
import {
  Box,
  Text,
  Card,
  useTheme,
  IconTrash,
  IconButton,
  IconPencil,
  Button,
  Icon,
} from '@bdp-rps/ui'

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
  const [isEditing, setIsEditing] = React.useState(false)
  return (
    <Box flex="1">
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
        <Box space={4}>
          <Box
            alignItems="center"
            direction="row"
            justifyContent="space-between">
            <Box
              alignItems="center"
              direction="row"
              justifyContent="space-between">
              <Text variant="category">{title}</Text>
              {!isEditing && (
                <IconButton
                  icon={(props) => <IconPencil {...props} />}
                  onClick={(_) => setIsEditing((prev) => !prev)}
                />
              )}
            </Box>
            <IconButton
              icon={(props) => <IconTrash {...props} />}
              onClick={onDelete}
            />
          </Box>
          <Box space="2">
            <Text variant="category">Beschreibung</Text>
            {isEditing ? (
              <Box>
                <Text>asdsa</Text>
              </Box>
            ) : (
              <Box>
                <Text>{description}</Text>
              </Box>
            )}
          </Box>
          {isEditing && (
            <Box alignSelf="flex-start">
              <Button onClick={(_) => setIsEditing((prev) => !prev)}>
                Speichern
              </Button>
            </Box>
          )}
        </Box>
      </Card>
    </Box>
  )
}
