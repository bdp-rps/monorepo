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

import TimeSlotForm from './TimeSlotForm'

export default function TimeSlotCard({
  onEdit,
  title,
  description,
  onDelete,
  position,
}) {
  const theme = useTheme()
  const [isEditing, setIsEditing] = React.useState(false)
  return (
    <Card
      extend={{
        border: '1px solid',
        borderColor: theme.tokens.inputBorder,
      }}>
      {isEditing ? (
        <TimeSlotForm
          onCancel={() => setIsEditing(false)}
          onSave={(data) => {
            console.log(data)
            onEdit(data)
            setIsEditing(false)
          }}
          defaultValues={{ title, description }}
        />
      ) : (
        <Box space={4}>
          <Box
            alignItems="center"
            direction="row"
            justifyContent="space-between">
            <Box alignItems="center" direction="row">
              <Box maxWidth="200">
                <Text
                  extend={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}
                  variant="category">
                  {position}. {title}
                </Text>
              </Box>
              {!isEditing && onEdit && (
                <IconButton
                  icon={(props) => <IconPencil {...props} />}
                  onClick={(_) => setIsEditing((prev) => !prev)}
                />
              )}
            </Box>
            {onDelete && (
              <IconButton
                icon={(props) => <IconTrash {...props} />}
                onClick={onDelete}
              />
            )}
          </Box>
          <Box space="2">
            <Text variant="category">Beschreibung</Text>
            <Box>
              <Text>{description}</Text>
            </Box>
          </Box>
        </Box>
      )}
    </Card>
  )
}
